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

// 渲染最新文章
function renderLatestPosts() {
    // 获取最新的两篇文章（按日期排序）
    const latestPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2);
    
    const container = document.querySelector('#latest-posts .posts-grid');
    if (container) {
        // 使用与博客页面相同的渲染函数
        container.innerHTML = latestPosts.map(post => {
            const template = document.createElement('div');
            template.innerHTML = `
                <article class="blog-card">
                    <div class="card-content">
                        <h3 class="card-title">${post.title}</h3>
                        <div class="card-meta">
                            <span class="publish-date"><i class="far fa-calendar-alt"></i> ${post.date}</span>
                            <div class="stats">
                                <span class="views"><i class="far fa-eye"></i> ${formatNumber(post.views)}</span>
                                <span class="likes"><i class="far fa-thumbs-up"></i> ${post.likes}</span>
                                <span class="bookmarks"><i class="far fa-bookmark"></i> ${post.bookmarks}</span>
                                <span class="comments"><i class="far fa-comment"></i> ${post.comments}</span>
                            </div>
                        </div>
                        <p class="card-description">${post.description}</p>
                        <div class="card-tags">
                            ${post.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <a href="${post.link}" class="card-link" target="_blank" rel="noopener noreferrer">
                        <span class="read-more">阅读全文 <i class="fas fa-arrow-right"></i></span>
                    </a>
                </article>
            `;
            return template.innerHTML;
        }).join('');
    }

    // 更新仪表盘的博客统计数据
    updateBlogStats();
}

// 更新博客统计数据
function updateBlogStats() {
    const totalViews = blogPosts.reduce((sum, post) => sum + post.views, 0);
    const totalLikes = blogPosts.reduce((sum, post) => sum + post.likes, 0);
    const totalBookmarks = blogPosts.reduce((sum, post) => sum + post.bookmarks, 0);
    
    const statsContainer = document.querySelector('.blog-stats .stat-grid');
    if (statsContainer) {
        const stats = [
            { number: blogPosts.length, label: '文章' },
            { number: totalViews, label: '阅读' },
            { number: totalLikes, label: '点赞' },
            { number: totalBookmarks, label: '收藏' }
        ];
        
        statsContainer.innerHTML = stats.map(stat => `
            <div class="stat-box">
                <span class="stat-number">${formatNumber(stat.number)}${stat.number >= 1000 ? '+' : ''}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
    }
}

// 工具函数：格式化数字
function formatNumber(num) {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
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
    renderLatestPosts();
}); 