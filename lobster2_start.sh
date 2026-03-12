#!/bin/bash

###############################################################################
# 龙虾2号任务启动脚本
# 功能：自动设置工作环境，拉取最新代码，准备开发环境
###############################################################################

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# 检查命令是否存在
check_command() {
    if ! command -v $1 &> /dev/null; then
        print_error "$1 未安装"
        return 1
    fi
    return 0
}

# 主函数
main() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}🦞 龙虾2号任务启动${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""

    # 1. 检查必要命令
    print_info "检查必要命令..."
    check_command git || exit 1
    check_command node || exit 1
    check_command npm || exit 1
    print_success "所有必要命令已安装"
    echo ""

    # 2. 进入工作目录
    print_info "进入AI-Academy工作目录..."
    cd /data/workspace/AI-Academy
    if [ $? -ne 0 ]; then
        print_error "无法进入工作目录"
        exit 1
    fi
    print_success "已进入工作目录"
    echo ""

    # 3. 检查Git仓库
    print_info "检查Git仓库状态..."
    if [ ! -d ".git" ]; then
        print_error "不是Git仓库"
        exit 1
    fi
    print_success "Git仓库检查通过"
    echo ""

    # 4. 拉取最新代码
    print_info "拉取最新代码..."
    git pull origin main
    if [ $? -ne 0 ]; then
        print_error "拉取代码失败"
        print_warning "请检查网络连接或Git配置"
        exit 1
    fi
    print_success "代码已同步到最新版本"
    echo ""

    # 5. 检查node_modules
    print_info "检查依赖包..."
    if [ ! -d "ai-academy-web/node_modules" ]; then
        print_warning "依赖包未安装，正在安装..."
        cd ai-academy-web
        npm install
        if [ $? -ne 0 ]; then
            print_error "依赖包安装失败"
            exit 1
        fi
        cd ..
        print_success "依赖包安装完成"
    else
        print_success "依赖包已存在"
    fi
    echo ""

    # 6. 显示工作指导
    print_info "工作指导文档："
    echo "  - 任务清单：/data/workspace/openclaw工作区/lobster-communicate/queue/lobster2_work_guide.md"
    echo "  - 测试清单：/data/workspace/openclaw工作区/lobster-communicate/queue/lobster2_test_checklist.md"
    echo ""

    # 7. 显示当前分支
    print_info "当前Git分支："
    git branch
    echo ""

    # 8. 显示最近提交
    print_info "最近提交记录："
    git log --oneline -5
    echo ""

    # 9. 检查工作区状态
    print_info "工作区状态："
    git status --short
    echo ""

    # 10. 显示开发命令
    print_info "常用开发命令："
    echo "  进入Web项目：cd /data/workspace/AI-Academy/ai-academy-web"
    echo "  启动开发服务器：npm run dev"
    echo "  构建生产版本：npm run build"
    echo "  运行测试：npm test"
    echo "  Git提交：git add . && git commit -m 'feat: xxx'"
    echo "  Git推送：git push origin main"
    echo ""

    # 完成
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}✨ 环境准备完成，可以开始工作了！${NC}"
    echo -e "${GREEN}========================================${NC}"

    # 提示下一步操作
    echo ""
    print_info "下一步："
    echo "1. 阅读工作指导文档"
    echo "2. 查看测试清单了解验收标准"
    echo "3. 开始第一个任务"
    echo "4. 定期提交代码并push到远程仓库"
    echo "5. 通过lobster-communicate与虾仔1号保持沟通"
    echo ""

    # 询问是否要查看工作指导
    read -p "是否要查看工作指导文档？(y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cat /data/workspace/openclaw工作区/lobster-communicate/queue/lobster2_work_guide.md
    fi
}

# 运行主函数
main
