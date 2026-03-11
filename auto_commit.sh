#!/bin/bash
# AI Academy 30分钟自动提交监控脚本

PROJECT_DIR="/data/workspace/AI-Academy"
LOG_FILE="$PROJECT_DIR/auto_commit.log"

cd "$PROJECT_DIR" || exit 1

# 检查是否有未提交的变更
if git diff --quiet && git diff --cached --quiet; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') - 无变更，跳过提交" >> "$LOG_FILE"
else
    # 添加所有变更
    git add -A
    
    # 提交变更
    git commit -m "auto: 30分钟活跃检查 - $(date '+%Y-%m-%d %H:%M') - 保持项目活跃度"
    
    # 推送到远程
    git push origin main
    
    echo "$(date '+%Y-%m-%d %H:%M:%S') - 已提交并推送变更" >> "$LOG_FILE"
fi
