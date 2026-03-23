#!/bin/bash
# AI Academy 迭代监控脚本（修复版）
# 特点：监控检查不提交到Git，避免计入时间间隔

WORK_DIR="/data/workspace/AI-Academy"
LOG_FILE="$WORK_DIR/.iteration-monitor.log"
TIMEOUT_MINUTES=30

echo "====== $(date '+%Y-%m-%d %H:%M:%S') =====" >> "$LOG_FILE"

cd "$WORK_DIR" || exit 1

# 获取最后一次提交的时间戳
last_commit_time=$(git log -1 --format=%ct)
current_time=$(date +%s)
time_diff=$((current_time - last_commit_time))
time_diff_minutes=$((time_diff / 60))

echo "距上次提交: ${time_diff_minutes}分钟" >> "$LOG_FILE"

# 如果超过阈值且工作区有实质性变更
if [ "$time_diff_minutes" -ge "$TIMEOUT_MINUTES" ]; then
    if [ -n "$(git status --porcelain)" ]; then
        echo "检测到变更，准备启动新迭代" >> "$LOG_FILE"
        # 这里可以触发启动新迭代的逻辑
        # 当前版本仅记录日志，不自动提交
    else
        echo "工作区无变更，无需启动新迭代" >> "$LOG_FILE"
    fi
else
    echo "未超时，继续监控" >> "$LOG_FILE"
fi

echo "" >> "$LOG_FILE"

# 注意：此脚本不执行git commit，避免监控提交计入时间间隔
