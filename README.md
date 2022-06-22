# 👋 ⚛️React练习及笔记内容

根据官方笔记和B站上的尚硅谷React教学视频编写的备忘文档

[尚硅谷React教程](https://www.bilibili.com/video/BV1wy4y1D7JT?spm_id_from=333.337.search-card.all.click&vd_source=1accccbf65ef01b231cfa311e00517ea)

## 1- Hello,React

​	React通过修改虚拟DOM的内容来向页面呈现内容。

```javascript
<body>
    <!-- 准备好 一个容器 -->
    <div id="test"></div>

    <!-- 引入react 核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>
    <!-- 引入react-dom用于支持react操作dom -->
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <!-- 引入babel 将jsx转成js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <script text="text/babel">
        // 1.创建虚拟dom
        const VDOM = <h1>Hello,React</h1> /* 此处不要写双引号，因为不是字符串 */
        // 2.渲染虚拟DOM到页面
        ReactDOM.render(VDOM,document.getElementById('test'))
    </script>
</body>
```

## 2-虚拟DOM的两种创建方式

​	可以通过Javascript和JSX两种方式创建虚拟DOM

​	使用JSX创建虚拟DOM

```javascript
<script type="text/babel" > /* 此处一定要写babel */
		//1.创建虚拟DOM
		const VDOM = <h1 id="title"><span>Hello,React</span></h1> /* 此处一定不要写引号，因为不是字符串 */
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
	</script>
```

​	使用Javascript创建虚拟DOM

```javascript
<script type="text/javascript" >
		//1.创建虚拟DOM React. 
		const VDOM =React.createElement('h1',{id:'title'},'Hello,React') /* 此处一定不要写引号，因为不是字符串 */
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
	</script>
```

**总结：**

关于虚拟DOM：

​        1、本质是Object类型的对象

​        2、虚拟DOM比较轻 ，真实DOM比较重，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性

​        3、虚拟DOM最终会被React转化为真实DOM，呈现在页面上。



