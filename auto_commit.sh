#!/bin/bash
# AI Academy 项目活跃度监控（仅记录，不自动提交）
# 改为手动提交有意义的变更

PROJECT_DIR="/data/workspace/AI-Academy"
LOG_FILE="$PROJECT_DIR/monitor.log"

cd "$PROJECT_DIR" || exit 1

# 记录项目状态
if git diff --quiet && git diff --cached --quiet; then
    STATUS="无变更"
else
    STATUS="有待提交的变更"
fi

echo "$(date '+%Y-%m-%d %H:%M:%S') - 项目状态: $STATUS" >> "$LOG_FILE"

# 仅在有实质性变更时提醒（不自动提交）
if [ "$STATUS" = "有待提交的变更" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') - ⚠️  检测到变更，请确认是否有意义后再手动提交" >> "$LOG_FILE"
fi
