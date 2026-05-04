// 水族文化历法 - 权限管理系统（账号密码登录版）

const AuthManager = {
    // 管理员账号密码配置
    ADMIN_CREDENTIALS: {
        username: 'admin',
        password: 'fish2025'
    },

    // 初始化权限系统
    init() {
        // 检查是否已登录
        const isLoggedIn = localStorage.getItem('shuiAdminLogin');
        if (!isLoggedIn) {
            localStorage.setItem('shuiAdminLogin', 'false');
        }
        this.updateUI();
    },

    // 验证管理员账号密码
    verifyCredentials(username, password) {
        return username === this.ADMIN_CREDENTIALS.username && 
               password === this.ADMIN_CREDENTIALS.password;
    },

    // 管理员登录
    login(username, password) {
        if (this.verifyCredentials(username, password)) {
            localStorage.setItem('shuiAdminLogin', 'true');
            this.updateUI();
            return true;
        }
        return false;
    },

    // 检查是否为管理员（已登录）
    isAdmin() {
        return localStorage.getItem('shuiAdminLogin') === 'true';
    },

    // 注销登录
    logout() {
        localStorage.setItem('shuiAdminLogin', 'false');
        this.updateUI();
    },

    // 更新 UI 状态
    updateUI() {
        const isAdmin = this.isAdmin();

        // 更新导航栏中的管理后台按钮显示
        const adminBtns = document.querySelectorAll('#tab-admin, .admin-nav-btn');
        adminBtns.forEach(btn => {
            if (btn) {
                btn.style.display = isAdmin ? 'block' : 'none';
            }
        });

        // 更新登录状态显示
        this.updateLoginStatusUI();
    },

    // 更新登录状态 UI
    updateLoginStatusUI() {
        const isAdmin = this.isAdmin();
        const loginContainer = document.getElementById('login-status-container');
        
        if (!loginContainer) return;

        if (!isAdmin) {
            loginContainer.innerHTML = `
                <button onclick="showLoginModal()" class="px-4 py-2 bg-primary hover:bg-blue-700 text-white rounded-xl cursor-pointer transition-all">
                    <i class="fas fa-sign-in-alt mr-2"></i>管理员登录
                </button>
            `;
        } else {
            loginContainer.innerHTML = `
                <div class="flex items-center space-x-3">
                    <span class="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600">
                        <i class="fas fa-user-shield mr-1"></i>管理员
                    </span>
                    <button onclick="AuthManager.logout()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl cursor-pointer transition-all">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            `;
        }
    },

    // 检查后台访问权限
    checkAdminAccess(redirect = true) {
        if (!this.isAdmin()) {
            if (redirect) {
                showToast('⚠️ 请先登录管理员账号', 'error');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }
            return false;
        }
        return true;
    }
};

// 显示登录模态框
function showLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// 管理员账号密码登录
function loginWithCredentials() {
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value;

    if (!username || !password) {
        showToast('⚠️ 请输入账号和密码', 'error');
        return;
    }

    if (AuthManager.login(username, password)) {
        closeLoginModal();
        showToast('✅ 登录成功！欢迎管理员', 'success');
        
        // 如果在后台页面，刷新以应用权限
        if (window.location.pathname.includes('admin.html')) {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    } else {
        showToast('❌ 账号或密码错误', 'error');
    }
}

// 显示提示消息
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-24 right-4 z-50 px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300 translate-x-full ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white font-medium`;
    toast.innerHTML = message;
    
    document.body.appendChild(toast);
    
    // 动画进入
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
    }, 100);
    
    // 自动消失
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 页面加载时初始化权限系统
document.addEventListener('DOMContentLoaded', () => {
    AuthManager.init();
});