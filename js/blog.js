// 博客文章数据
const blogPosts = [
    // 模式识别系列
    {
        title: "模式识别中的最优分类超平面与线性支持向量机",
        date: "2022-08-29",
        views: 2411,
        likes: 3,
        bookmarks: 10,
        comments: 1,
        description: "介绍了线性支持向量机的基本原理,包括最优分类超平面的几何意义、拉格朗日对偶问题的推导、支持向量的概念以及软间隔最大化。通过数学推导和图形解释,深入浅出地讲解了SVM的核心思想。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126593786",
        category: "pattern-recognition",
        tags: ["模式识别", "SVM", "机器学习"]
    },
    {
        title: "模式识别中的感知器",
        date: "2022-08-16",
        views: 483,
        likes: 1,
        bookmarks: 0,
        comments: 0,
        description: "详细讲解了感知器算法的基本原理,包括感知器模型的数学表示、权重向量的几何意义、感知器学习算法的迭代过程以及收敛性证明。同时给出了具体的代码实现示例。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126363102",
        category: "pattern-recognition",
        tags: ["模式识别", "感知器", "机器学习"]
    },
    {
        title: "模式识别中的Fisher线性判别分析",
        date: "2022-08-13",
        views: 1046,
        likes: 2,
        bookmarks: 5,
        comments: 0,
        description: "阐述了Fisher线性判别分析的基本思想,包括类内散度矩阵和类间散度矩阵的定义、Fisher准则函数的推导、最优投影方向的求解过程,以及多类情况下的推广方法。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126322265",
        category: "pattern-recognition",
        tags: ["模式识别", "Fisher判别", "机器学习"]
    },
    {
        title: "第4章 线性分类器",
        date: "2022-08-13",
        views: 409,
        likes: 1,
        bookmarks: 1,
        comments: 0,
        description: "介绍了线性分类器的基本概念,包括线性判别函数的形式、决策边界的几何解释、广义线性判别函数等内容,为后续学习各种线性分类算法奠定基础。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126316103",
        category: "pattern-recognition",
        tags: ["模式识别", "线性分类器", "机器学习"]
    },
    {
        title: "模式识别学习笔记——第2章 统计学习方法-2.5 正态分布时的统计决策",
        date: "2022-08-08",
        views: 1105,
        likes: 4,
        bookmarks: 14,
        comments: 1,
        description: "讨论了正态分布条件下的统计决策方法,包括多维正态分布的性质、协方差矩阵的几何意义、最小错误率贝叶斯决策规则在正态分布情况下的推导等内容。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126137031",
        category: "pattern-recognition",
        tags: ["模式识别", "统计学习", "正态分布"]
    },
    {
        title: "模式识别学习笔记——第2章—2.4 两类错误率、Neyman-Pearson决策与ROC曲线",
        date: "2022-08-01",
        views: 2390,
        likes: 13,
        bookmarks: 40,
        comments: 4,
        description: "详细介绍了二类分类问题中的错误率分析方法,包括第一类错误和第二类错误的定义、Neyman-Pearson判别准则、ROC曲线的绘制方法和性能评估指标等内容。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126081278",
        category: "pattern-recognition",
        tags: ["模式识别", "ROC曲线", "性能评估"]
    },
    {
        title: "模式识别学习笔记——第2章 统计学习方法—2.3最小风险贝叶斯决策",
        date: "2022-07-30",
        views: 2857,
        likes: 2,
        bookmarks: 10,
        comments: 0,
        description: "阐述了最小风险贝叶斯决策的理论基础,包括风险函数的定义、损失函数的选择、条件风险的计算以及最优决策规则的推导过程。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126067387",
        category: "pattern-recognition",
        tags: ["模式识别", "贝叶斯决策", "风险函数"]
    },
    {
        title: "模式识别学习笔记——第2章 统计学习方法-2.2最小错误率贝叶斯决策",
        date: "2022-07-29",
        views: 3019,
        likes: 5,
        bookmarks: 37,
        comments: 0,
        description: "介绍了最小错误率贝叶斯决策的基本原理,包括后验概率的计算、决策规则的确定、错误率的计算方法等,并通过具体例子说明了决策过程。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126049029",
        category: "pattern-recognition",
        tags: ["模式识别", "贝叶斯决策", "错误率"]
    },
    {
        title: "模式识别学习笔记——第2章 统计学习方法—2.1引言",
        date: "2022-07-28",
        views: 312,
        likes: 2,
        bookmarks: 4,
        comments: 0,
        description: "概述了统计学习方法的基本框架,包括概率论基础知识回顾、统计决策的基本概念、贝叶斯决策理论的引入等内容。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126027282",
        category: "pattern-recognition",
        tags: ["模式识别", "统计学习", "概率论"]
    },
    // C++系列
    {
        title: "C++：类的静态成员详解",
        date: "2022-08-01",
        views: 718,
        likes: 3,
        bookmarks: 0,
        comments: 0,
        description: "详细讲解了C++中类的静态成员特性,包括静态成员变量和静态成员函数的声明、定义和初始化方式,以及它们的使用场景和注意事项。",
        link: "https://blog.csdn.net/HS_Jack_ZZZ/article/details/126106913",
        category: "cpp",
        tags: ["C++", "静态成员", "面向对象"]
    }
];

// 工具函数：格式化数字
function formatNumber(num) {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
}

// 渲染文章卡片
function renderBlogCard(post) {
    const template = document.getElementById('blog-card-template');
    const card = template.querySelector('.blog-card').cloneNode(true);
    
    // 填充文章内容
    card.querySelector('.card-title').textContent = post.title;
    card.querySelector('.publish-date').innerHTML = `<i class="far fa-calendar-alt"></i> ${post.date}`;
    card.querySelector('.views').innerHTML = `<i class="far fa-eye"></i> ${formatNumber(post.views)}`;
    card.querySelector('.likes').innerHTML = `<i class="far fa-thumbs-up"></i> ${post.likes}`;
    card.querySelector('.bookmarks').innerHTML = `<i class="far fa-bookmark"></i> ${post.bookmarks}`;
    card.querySelector('.comments').innerHTML = `<i class="far fa-comment"></i> ${post.comments}`;
    card.querySelector('.card-description').textContent = post.description;
    
    // 添加标签
    const tagsContainer = card.querySelector('.card-tags');
    post.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'card-tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });
    
    // 设置链接
    card.querySelector('.card-link').href = post.link;
    
    return card;
}

// 渲染文章列表
function renderBlogPosts(category = 'all') {
    const container = document.querySelector('.blog-posts');
    container.innerHTML = '';
    
    const filteredPosts = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === category);
    
    // 按日期降序排序
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    filteredPosts.forEach(post => {
        container.appendChild(renderBlogCard(post));
    });
}

// 初始化分类标签点击事件
function initCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 更新激活状态
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 重新渲染文章列表
            renderBlogPosts(tab.dataset.category);
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initCategoryTabs();
    renderBlogPosts();
});
