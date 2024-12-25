// 项目数据
const projects = {
    game: [
        {
            title: "Create the World",
            icon: "globe",
            status: "规划中",
            description: "一款创新的编程游戏，玩家通过代码创建和管理自己的虚拟世界。支持创建行星、添加地形特征，甚至设计生物的遗传代码。",
            features: ["面向对象编程", "遗传算法", "生态系统"],
            highlights: [
                "自定义行星生成系统",
                "生物遗传模板系统",
                "生态系统平衡模拟"
            ],
            github: "#",
            docs: "#"
        },
        {
            title: "God World",
            icon: "chess",
            status: "规划中",
            description: "一款策略游戏，玩家作为神明通过信仰和灾难间接引导文明发展。需要平衡宗教影响力和科技进步。",
            features: ["策略", "文明演化", "信仰系统"],
            highlights: [
                "复杂的信仰影响系统",
                "动态的文明发展路线",
                "多样化的神力干预方式"
            ],
            github: "#",
            docs: "#"
        },
        {
            title: "Little Commander",
            icon: "chess-knight",
            status: "规划中",
            description: "战术模拟游戏，玩家可以控制从小队到军团级别的部队。包含详细的士兵属性、技能和训练系统。",
            features: ["战术", "角色养成", "战斗系统"],
            highlights: [
                "多层次的指挥系统",
                "丰富的角色成长路线",
                "真实的战术模拟"
            ],
            github: "#",
            docs: "#"
        },
        {
            title: "Pattern War",
            icon: "puzzle-piece",
            status: "开发中",
            description: "创新的策略游戏，结合塔防和动作元素。玩家需要保护中心核心，收集资源并升级能力。",
            features: ["塔防", "资源管理", "剧情"],
            highlights: [
                "独特的战斗系统",
                "深度的资源管理",
                "隐藏的剧情线索"
            ],
            github: "#",
            docs: "#"
        }
    ],
    tool: [
        {
            title: "猿途享",
            icon: "map-marked-alt",
            status: "待开发",
            description: "一款旅行规划应用，帮助用户规划旅程、记录旅行、分享体验。支持智能路线规划和POI推荐。",
            features: ["iOS", "Swift", "地图服务"],
            highlights: [
                "智能路线规划",
                "POI推荐系统",
                "社交分享功能"
            ],
            github: "#",
            docs: "#"
        },
        {
            title: "SmartPlanner",
            icon: "calendar-check",
            status: "开发中",
            description: "智能日程规划工具，结合AI技术帮助用户优化时间管理。支持自动任务分类和优先级排序。",
            features: ["AI", "时间管理", "效率工具"],
            highlights: [
                "智能任务分类",
                "自动优先级排序",
                "数据可视化统计"
            ],
            github: "#",
            docs: "#"
        }
    ]
};

// 创建项目卡片的HTML
function createProjectCard(project) {
    return `
        <article class="project-card">
            <div class="project-card__header">
                <div class="project-card__icon">
                    <i class="fas fa-${project.icon}"></i>
                </div>
                <h3 class="project-card__title">${project.title}</h3>
                <span class="project-card__status">${project.status}</span>
            </div>
            <div class="project-card__content">
                <p class="project-card__description">${project.description}</p>
                <div class="project-card__features">
                    ${project.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <ul class="project-card__highlights">
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
            <div class="project-card__footer">
                <a href="${project.github}" class="project-link" aria-label="查看项目源码">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${project.docs}" class="project-link" aria-label="查看项目文档">
                    <i class="fas fa-book"></i>
                </a>
            </div>
        </article>
    `;
}

// 渲染项目列表
function renderProjects(category = 'all') {
    const showcase = document.querySelector('.projects-showcase');
    let html = '';

    if (category === 'all' || category === 'game') {
        html += `
            <section class="project-series" aria-labelledby="game-projects">
                <h2 id="game-projects" class="series-title">游戏开发项目</h2>
                <div class="projects-grid">
                    ${projects.game.map(project => createProjectCard(project)).join('')}
                </div>
            </section>
        `;
    }

    if (category === 'all' || category === 'tool') {
        html += `
            <section class="project-series" aria-labelledby="tool-projects">
                <h2 id="tool-projects" class="series-title">工具应用项目</h2>
                <div class="projects-grid">
                    ${projects.tool.map(project => createProjectCard(project)).join('')}
                </div>
            </section>
        `;
    }

    showcase.innerHTML = html;
}

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 渲染初始项目列表
    renderProjects();

    // 添加分类切换事件监听
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 更新标签状态
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 重新渲染项目列表
            renderProjects(tab.dataset.category);
        });
    });
});