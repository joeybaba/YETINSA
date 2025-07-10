# 网站模块化配置文档

## 模块结构说明

网站现在已经模块化为4个独立的板块，每个模块都有清晰的边界和标识，方便重新排序和管理。

## 当前模块顺序

### 1. 模块1: Core Products (核心产品)
- **ID**: `#products`
- **CSS类**: `product-showcase module-section`
- **导航标题**: "Core Products"
- **内容**: LED显示组件和特殊应用LED产品展示
- **位置**: 第1个模块

### 2. 模块2: Application Scenarios (应用场景)
- **ID**: `#solutions`
- **CSS类**: `solutions-section module-section`
- **导航标题**: "Application Scenarios"
- **内容**: 各种应用场景的滚动展示
- **位置**: 第2个模块

### 3. 模块3: Hot Products (热销产品)
- **ID**: `#about`
- **CSS类**: `features-section module-section`
- **导航标题**: "Hot Products"
- **内容**: 热销产品图片滚动展示
- **位置**: 第3个模块

### 4. 模块4: Company Profile (公司简介)
- **ID**: `#company`
- **CSS类**: `features-section module-section`
- **导航标题**: "Company Profile"
- **内容**: 公司数据、行业地位、企业文化
- **位置**: 第4个模块

## 模块化标记说明

每个模块在HTML中都有清晰的注释标记：

```html
<!-- ========================================
     模块X: 模块名称
======================================== -->
<section id="模块ID" class="模块CSS类 module-section">
    <!-- 模块内容 -->
</section>
<!-- ======================================== 
     模块X结束: 模块名称
======================================== -->
```

## 如何调整模块顺序

### 方法1: 直接移动HTML代码块
1. 找到要移动的模块（通过注释标记识别）
2. 复制整个模块代码块（从开始注释到结束注释）
3. 删除原位置的代码
4. 粘贴到新位置

### 方法2: 更新导航顺序
调整模块顺序后，需要同步更新：

1. **主导航栏** (`index.html` 第29-34行)
```html
<ul class="nav-links">
    <li><a href="#products" class="nav-link active">Core Products</a></li>
    <li><a href="#solutions" class="nav-link">Application Scenarios</a></li>
    <li><a href="#about" class="nav-link">Hot Products</a></li>
    <li><a href="#company" class="nav-link">Company Profile</a></li>
</ul>
```

2. **页脚导航** (`index.html` 第547-553行)
```html
<ul class="footer-nav-list">
    <li><a href="#home">Home</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#solutions">Solutions</a></li>
    <li><a href="#about">Hot Products</a></li>
    <li><a href="#company">Company Profile</a></li>
</ul>
```

## 模块特性

### 统一的CSS类
- 所有模块都有 `module-section` 类
- 提供统一的基础样式和间距
- 便于全局样式管理

### 独立的功能
- 每个模块功能独立
- 可以单独修改而不影响其他模块
- JavaScript功能自动适配模块顺序

### 响应式设计
- 所有模块都支持响应式布局
- 移动端和桌面端都有优化

## 常见调整场景

### 场景1: 将Company Profile移到第一位
1. 移动模块4到模块1位置
2. 更新导航链接顺序
3. 更新第一个导航项的 `active` 类

### 场景2: 交换Hot Products和Application Scenarios
1. 交换模块2和模块3的位置
2. 更新导航顺序

### 场景3: 添加新模块
1. 按照模块标记格式添加新section
2. 在导航中添加对应链接
3. 确保ID和href匹配

## 注意事项

1. **ID唯一性**: 确保每个模块的ID在页面中唯一
2. **导航同步**: 调整模块顺序后必须同步更新导航
3. **CSS类保持**: 保持 `module-section` 类以维持统一样式
4. **JavaScript兼容**: 现有JavaScript代码会自动适配新顺序
5. **测试功能**: 调整后测试导航跳转和滚动高亮功能

## 技术支持

如需调整模块顺序或添加新模块，请参考此文档或联系开发团队。
