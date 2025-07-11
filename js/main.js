/* ========================================
   主要JavaScript功能模块
======================================== */

// 应用程序主类
class YETINSAApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initScrollAnimations();
    this.initNavigationEffects();
    this.initApplicationsScroll();
  }

  // 设置事件监听器
  setupEventListeners() {
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
    });

    // 滚动时的导航栏效果
    window.addEventListener('scroll', this.handleNavbarScroll.bind(this));

    // 窗口大小改变时重新计算动画
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  // 平滑滚动处理
  handleSmoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // 导航栏滚动效果
  handleNavbarScroll() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    if (window.scrollY > 100) {
      nav.style.background = 'rgba(15, 23, 42, 0.95)';
      nav.style.backdropFilter = 'blur(15px)';
    } else {
      nav.style.background = 'rgba(15, 23, 42, 0.8)';
      nav.style.backdropFilter = 'blur(10px)';
    }
  }

  // 窗口大小改变处理
  handleResize() {
    // 重新计算应用场景滚动动画
    this.initApplicationsScroll();
  }

  // 初始化滚动动画
  initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.data-item, .position-item, .culture-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  // 初始化导航效果
  initNavigationEffects() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.module-section');

    // 滚动时高亮当前section对应的导航链接
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

  // 初始化应用场景滚动
  initApplicationsScroll() {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    // 计算滚动容器的宽度，确保动画正确
    const cards = scrollContainer.querySelectorAll('.display-app-card');
    if (cards.length === 0) return;

    const originalCardsCount = cards.length / 2; // 原始卡片数量（不包括复制的卡片）
    const cardWidth = cards[0].offsetWidth;
    const cardGap = 32; // 卡片间距，与CSS中的gap值保持一致
    
    // 动态调整动画时间，根据卡片数量和宽度
    const animationDuration = originalCardsCount * 8; // 每张卡片8秒
    scrollContainer.style.animationDuration = `${animationDuration}s`;
    
    // 计算动画终点位置，确保无缝循环
    const totalWidth = originalCardsCount * (cardWidth + cardGap);
    
    // 动态创建keyframes
    this.createScrollKeyframes(totalWidth);
  }

  // 创建滚动关键帧
  createScrollKeyframes(totalWidth) {
    // 移除旧的样式
    const oldStyle = document.getElementById('dynamic-scroll-keyframes');
    if (oldStyle) {
      oldStyle.remove();
    }

    // 创建新的样式
    const keyframes = document.createElement('style');
    keyframes.id = 'dynamic-scroll-keyframes';
    keyframes.innerHTML = `
      @keyframes scrollRight {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${totalWidth}px);
        }
      }
    `;
    document.head.appendChild(keyframes);
  }

  // 设置背景图位置
  setBackgroundImages() {
    const itemsWithBg = document.querySelectorAll('.data-item, .position-item, .culture-item');
    itemsWithBg.forEach(item => {
      const bg = item.querySelector('.data-item-bg, .position-item-bg, .culture-item-bg');
      if (bg && item.dataset.bg) {
        bg.style.backgroundImage = `url('${item.dataset.bg}')`;
      }
    });
  }
}

// 工具函数
const Utils = {
  // 防抖函数
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // 节流函数
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // 检测设备类型
  isMobile() {
    return window.innerWidth <= 768;
  },

  // 获取元素在视口中的位置
  getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      bottom: rect.bottom + window.scrollY,
      right: rect.right + window.scrollX
    };
  }
};

// 当DOM加载完成时初始化应用
document.addEventListener('DOMContentLoaded', () => {
  new YETINSAApp();
});
