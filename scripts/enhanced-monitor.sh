#!/bin/bash
# AI Academy 增强型监控脚本（含系统健康检查）
# 功能：迭代监控 + 系统健康检查 + 问题告警

WORK_DIR="/data/workspace/AI-Academy"
LOG_FILE="$WORK_DIR/.iteration-monitor.log"
HEALTH_LOG="$WORK_DIR/.system-health.log"
TIMEOUT_MINUTES=30
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# 初始化问题列表
PROBLEMS=()

echo "====== $TIMESTAMP =====" >> "$LOG_FILE"

cd "$WORK_DIR" || exit 1

# ========== 迭代监控部分 ==========
last_commit_time=$(git log -1 --format=%ct)
current_time=$(date +%s)
time_diff=$((current_time - last_commit_time))
time_diff_minutes=$((time_diff / 60))

echo "迭代监控: 距上次提交 ${time_diff_minutes} 分钟" >> "$LOG_FILE"

if [ "$time_diff_minutes" -ge "$TIMEOUT_MINUTES" ]; then
    if [ -n "$(git status --porcelain)" ]; then
        echo "检测到变更，准备启动新迭代" >> "$LOG_FILE"
    else
        echo "工作区无变更，无需启动新迭代" >> "$LOG_FILE"
    fi
else
    echo "未超时，继续监控" >> "$LOG_FILE"
fi

# ========== 系统健康检查部分 ==========

# 1. 检查SupplyAI状态
if [ -d "/data/workspace/SupplyAI" ]; then
    cd "/data/workspace/SupplyAI" || exit 1
    supply_last_commit=$(git log -1 --format=%ct)
    supply_diff_minutes=$(((current_time - supply_last_commit) / 60))

    if [ "$supply_diff_minutes" -gt 60 ]; then
        PROBLEMS+=("SupplyAI: 超过${supply_diff_minutes}分钟无提交")
    fi

    echo "SupplyAI检查: 距上次提交 ${supply_diff_minutes} 分钟" >> "$LOG_FILE"
fi

# 2. 检查AI Academy状态
cd "$WORK_DIR" || exit 1
if [ "$time_diff_minutes" -gt 60 ]; then
    PROBLEMS+=("AI Academy: 超过${time_diff_minutes}分钟无提交")
fi

# 3. 检查磁盘空间
disk_usage=$(df -h "$WORK_DIR" | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$disk_usage" -gt 80 ]; then
    PROBLEMS+=("磁盘空间: 使用率${disk_usage}%")
fi

echo "系统检查: 磁盘使用率 ${disk_usage}%" >> "$LOG_FILE"

# 4. 记录健康检查结果
echo "====== $TIMESTAMP =====" >> "$HEALTH_LOG"
if [ ${#PROBLEMS[@]} -gt 0 ]; then
    echo "⚠️  发现问题:" >> "$HEALTH_LOG"
    for problem in "${PROBLEMS[@]}"; do
        echo "  - $problem" >> "$HEALTH_LOG"
    done
else
    echo "✅ 系统正常" >> "$HEALTH_LOG"
fi
echo "" >> "$HEALTH_LOG"

echo "" >> "$LOG_FILE"

# ========== 输出结果 ==========
if [ ${#PROBLEMS[@]} -gt 0 ]; then
    echo "PROBLEM_COUNT:${#PROBLEMS[@]}"
    echo "PROBLEMS:${PROBLEMS[*]}"
else
    echo "STATUS:OK"
fi
