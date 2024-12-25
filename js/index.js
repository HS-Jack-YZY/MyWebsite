// 渲染首页精选项目
function renderFeaturedProjects() {
    const featuredProjects = [
        projects.tool.find(p => p.title === 'SmartPlanner'),
        projects.tool.find(p => p.title === '猿途享')
    ];
    
    const container = document.querySelector('#featured-projects .projects-grid');
    if (container) {
        container.innerHTML = featuredProjects.map(project => createProjectCard(project)).join('');
    }
}

// 导航栏滚动效果
function initScrollEffect() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// 移动端菜单
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    initScrollEffect();
    initMobileMenu();
    renderFeaturedProjects();
}); 