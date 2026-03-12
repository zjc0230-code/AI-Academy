#!/bin/bash

# 🦞 龙虾4号 - AI-Academy Web开发启动脚本
# 用途：快速准备开发环境并启动项目

set -e  # 遇到错误立即退出

echo "🦞 龙虾4号 - AI-Academy Web开发启动中..."
echo "================================================"
echo ""

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目路径
PROJECT_DIR="/data/workspace/AI-Academy/web"
WORKSPACE="/data/workspace/openclaw工作区/lobster-communicate/queue"

echo -e "${BLUE}📂 项目目录: ${PROJECT_DIR}${NC}"
echo -e "${BLUE}📝 工作文档目录: ${WORKSPACE}${NC}"
echo ""

# 检查Git环境
echo -e "${BLUE}🔍 检查Git环境...${NC}"
if ! command -v git &> /dev/null; then
    echo -e "${YELLOW}⚠️  Git未安装，请先安装Git${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Git已安装${NC}"
echo ""

# 检查Node.js环境
echo -e "${BLUE}🔍 检查Node.js环境...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js未安装，请先安装Node.js${NC}"
    exit 1
fi
NODE_VERSION=$(node --version)
echo -e "${GREEN}✅ Node.js已安装: ${NODE_VERSION}${NC}"

if ! command -v npm &> /dev/null; then
    echo -e "${YELLOW}⚠️  npm未安装，请先安装npm${NC}"
    exit 1
fi
NPM_VERSION=$(npm --version)
echo -e "${GREEN}✅ npm已安装: ${NPM_VERSION}${NC}"
echo ""

# 进入项目目录
cd ${PROJECT_DIR}
echo -e "${GREEN}✅ 已进入项目目录${NC}"
echo ""

# 拉取最新代码
echo -e "${BLUE}📥 拉取最新代码...${NC}"
git fetch origin
git pull origin main
echo -e "${GREEN}✅ 代码已更新${NC}"
echo ""

# 检查依赖是否安装
echo -e "${BLUE}🔍 检查依赖...${NC}"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  依赖未安装，正在安装依赖...${NC}"
    npm install --silent
    echo -e "${GREEN}✅ 依赖安装完成${NC}"
else
    echo -e "${GREEN}✅ 依赖已安装${NC}"
fi
echo ""

# 显示工作指导文档
echo -e "${BLUE}📚 工作指导文档:${NC}"
echo -e "${GREEN}  ${WORKSPACE}/lobster4_web_guide.md${NC}"
echo ""

# 显示测试清单
echo -e "${BLUE}🧪 测试验收清单:${NC}"
echo -e "${GREEN}  ${WORKSPACE}/lobster4_web_test_checklist.md${NC}"
echo ""

# 显示Git状态
echo -e "${BLUE}📊 当前Git状态:${NC}"
git status --short
echo ""

# 显示最新提交
echo -e "${BLUE}📝 最新提交:${NC}"
git log --oneline -3
echo ""

# 显示开发命令
echo -e "${BLUE}🚀 开发命令:${NC}"
echo -e "${GREEN}  启动开发服务器:  npm run dev${NC}"
echo -e "${GREEN}  构建生产版本:     npm run build${NC}"
echo -e "${GREEN}  启动生产服务器:   npm run start${NC}"
echo -e "${GREEN}  代码检查:          npm run lint${NC}"
echo ""

# 显示Git提交规范
echo -e "${BLUE}📝 Git提交规范:${NC}"
echo -e "${YELLOW}  格式: <type>(<scope>): <subject>${NC}"
echo -e "${YELLOW}  示例: feat(layout): 添加Header和Footer组件${NC}"
echo ""

# 显示工作要求
echo -e "${BLUE}📋 工作要求:${NC}"
echo -e "${GREEN}  ✓ 每15-20分钟提交一次代码${NC}"
echo -e "${GREEN}  ✓ 每30分钟汇报一次进度${NC}"
echo -e "${GREEN}  ✓ 提交前运行npm run lint检查代码${NC}"
echo -e "${GREEN}  ✓ 重要功能完成后立即push${NC}"
echo ""

# 询问是否启动开发服务器
echo -e "${YELLOW}是否立即启动开发服务器？(y/n)${NC}"
read -r choice

if [[ "$choice" =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}🚀 启动开发服务器...${NC}"
    echo -e "${GREEN}访问地址: http://localhost:3000${NC}"
    echo ""
    echo -e "${YELLOW}按 Ctrl+C 停止服务器${NC}"
    echo ""
    npm run dev
else
    echo -e "${GREEN}✅ 环境准备完成，可以开始开发了！${NC}"
    echo -e "${BLUE}运行 'npm run dev' 启动开发服务器${NC}"
fi

echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}🦞 加油，龙虾4号！💪${NC}"
echo -e "${GREEN}================================================${NC}"
