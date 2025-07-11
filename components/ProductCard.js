/* ========================================
   产品卡片组件
======================================== */

class ProductCard {
  constructor(productData) {
    this.data = productData;
  }

  // 生成产品卡片HTML
  render() {
    return `
      <article class="product-card" data-product-id="${this.data.id}">
        <div class="product-media">
          <img src="${this.data.image}" alt="${this.data.name}" loading="lazy">
          <span class="tech-badge">${this.data.badge}</span>
        </div>
        <div class="product-content">
          <h3>${this.data.name}</h3>
          <ul class="spec-list">
            ${this.data.specs.map(spec => `<li>${spec}</li>`).join('')}
          </ul>
        </div>
      </article>
    `;
  }

  // 创建DOM元素
  createElement() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.render();
    return wrapper.firstElementChild;
  }

  // 绑定事件
  bindEvents(element) {
    // 产品卡片点击事件
    element.addEventListener('click', () => {
      this.handleCardClick();
    });

    // 产品图片懒加载
    const img = element.querySelector('img');
    if (img) {
      this.setupLazyLoading(img);
    }

    // 规格列表悬停效果已在CSS中实现
  }

  // 处理卡片点击
  handleCardClick() {
    // 可以在这里添加产品详情弹窗或跳转逻辑
    console.log(`Product clicked: ${this.data.name}`);
    
    // 触发自定义事件
    document.dispatchEvent(new CustomEvent('productCardClick', {
      detail: this.data
    }));
  }

  // 设置图片懒加载
  setupLazyLoading(img) {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src || image.src;
            image.classList.remove('lazy');
            observer.unobserve(image);
          }
        });
      });

      imageObserver.observe(img);
    }
  }

  // 静态方法：批量创建产品卡片
  static createMultiple(productsData, container) {
    if (!container) return;

    const fragment = document.createDocumentFragment();
    
    productsData.forEach(productData => {
      const card = new ProductCard(productData);
      const element = card.createElement();
      card.bindEvents(element);
      fragment.appendChild(element);
    });

    container.appendChild(fragment);
  }

  // 静态方法：根据ID查找产品
  static findById(products, id) {
    return products.find(product => product.id === id);
  }

  // 静态方法：按类别过滤产品
  static filterByCategory(products, category) {
    return products.filter(product => product.category === category);
  }
}

// 产品系列组件
class ProductSeries {
  constructor(seriesData) {
    this.data = seriesData;
  }

  // 生成产品系列HTML
  render() {
    return `
      <div class="category-section" data-series-id="${this.data.id}">
        <h3 class="category-title">${this.data.title}</h3>
        <p class="category-description">${this.data.description}</p>
        <div class="product-grid">
          ${this.data.products.map(product => new ProductCard(product).render()).join('')}
        </div>
      </div>
    `;
  }

  // 创建DOM元素
  createElement() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.render();
    const element = wrapper.firstElementChild;
    
    // 为每个产品卡片绑定事件
    const productCards = element.querySelectorAll('.product-card');
    productCards.forEach((cardElement, index) => {
      const card = new ProductCard(this.data.products[index]);
      card.bindEvents(cardElement);
    });

    return element;
  }

  // 静态方法：批量创建产品系列
  static createMultiple(seriesData, container) {
    if (!container) return;

    const fragment = document.createDocumentFragment();
    
    Object.values(seriesData).forEach(series => {
      const seriesComponent = new ProductSeries(series);
      const element = seriesComponent.createElement();
      fragment.appendChild(element);
    });

    container.appendChild(fragment);
  }
}

// 导出组件
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ProductCard,
    ProductSeries
  };
}
