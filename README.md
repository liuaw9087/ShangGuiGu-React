# 👋 ⚛️React 练习及笔记内容

根据官方笔记和 B 站上的尚硅谷 React 教学视频编写的备忘文档

[尚硅谷 React 教程](https://www.bilibili.com/video/BV1wy4y1D7JT?spm_id_from=333.337.search-card.all.click&vd_source=1accccbf65ef01b231cfa311e00517ea)

我建立了一个前端交流群，欢迎加入！

![二维码](https://s2.loli.net/2022/06/23/d3M8TUKt74LvPFo.png)

[点击链接加入群聊【前端学习-求职】](https://jq.qq.com/?_wv=1027&k=aP4rxRLD)

## 1 - Hello,React

 React 通过修改虚拟 DOM 的内容来向页面呈现内容。

```jsx
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

## 2 - 虚拟 DOM 的两种创建方式

 可以通过 Javascript 和 JSX 两种方式创建虚拟 DOM

 使用 JSX 创建虚拟 DOM

```jsx
<script type="text/babel">
  {" "}
  /* 此处一定要写babel */ //1.创建虚拟DOM const VDOM = <h1 id="title">
    <span>Hello,React</span>
  </h1> /* 此处一定不要写引号，因为不是字符串 */ //2.渲染虚拟DOM到页面 ReactDOM.render(VDOM,document.getElementById('test'))
</script>
```

 使用 Javascript 创建虚拟 DOM

```javascript
<script type="text/javascript" >
		//1.创建虚拟DOM React.
		const VDOM =React.createElement('h1',{id:'title'},'Hello,React') /* 此处一定不要写引号，因为不是字符串 */
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
	</script>
```

**总结：**

关于虚拟 DOM：

 1、本质是 Object 类型的对象

 2、虚拟 DOM 比较轻 ，真实 DOM 比较重，因为虚拟 DOM 是 React 内部在用，无需真实 DOM 上那么多的属性

 3、虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。

## 3 - JSX 语法规则

jsx 语法规则：

 1.定义虚拟 DOM 时 不要写引号。

```jsx
const VDOM = (....)
```

 2.标签中混入 js 表达式时，要用花括号

```jsx
<div><h2 className="title" id="{myId.toLowerCase()}"> //id中的表达式显示的是花括号才可以
```

 3.样式的类名指令不要用 class ，要用 className 例如：

```jsx
<div><h2 className="title" id="{myId.toLowerCase()}">
```

 4.内联样式要用 style={{key:value}}的形式去写，采用小驼峰命名法 例如：

```jsx
<span style={{ color: "white", fontSize: "29px" }}>{myData.toLowerCase()}</span>
```

 5.虚拟 DOM 必须只有一个跟标签

```jsx
const VDOM = <div>...</div>; //例如 图中只有一个div根节点
```

 6.标签必须闭合 闭合或者自闭合

```jsx
<input type="text"></input>
<input type="text"/>
```

 7.标签首字母

 (1).若小写字母开头，则将该标签转为 Html 中同名元素。若 html 中无该标签对应的同名元素，则报错

```jsx
<good><good/> //例如如果是good标签，则会在html中找同名元素，所以会报错
```

 (2).若大写字母开头，React 就去渲染对应的组件，若组件没有定义，则报错 （之后组件内容会涉及）

一定注意区分：【js 语句()】与【js 表达式】

 3.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方

 例如：

 (1).a

 (2).a + b

 (3).demo(1)

 (4).arr.map()

 (5).function test(){}

 4.语句（代码）:改变程序走向的代码行

 下面这些都是语句（代码）：

 (1).if(){}

 (2).for(){}

 (3).switch(){

 case:xxx

 }

## 4 - 关于类内容的复习

### 类的基本知识

创建一个 Person 类 ，另外创建一个 Student 类继承自 Person 类

```javascript
class Person {
  // 构造器方法
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 一般方法
  speak() {
    // speak 方法放在了哪里? -- 类的原型对象上,供实例使用
    // 通过Person实例调用speak时,speak中的this就是Person实例
    console.log(`我叫${this.name},我的年龄是${this.age}`);
  }
}
class Student extends Person {
  constructor(name, age, grade) {
    // 当继承于父类 且需要写构造器时,必须写super
    super(name, age);
    this.grade = grade;
  }
  // 重写从父类继承过来的方法
  speak() {
    console.log(
      `我叫${this.name},我的年龄是${this.age},我就读的年级是:${this.grade}`
    );
  }
  // 通过Student实例调用study时,study中的this就是Student实例
  study() {
    console.log("我很努力的学习");
  }
}
```

总结:

 1.类中的构造器不是必须写的,要对实例进行一些初始化的操作,如添加指定属性时才写

 2.如果 A 类继承了 B 类,且 A 类中写了构造器,那么 A 类中的构造器中 super 是必须要调用的

 3.类中定义的方法都放在了类的原型对象中的

### 原生事件绑定方式

原生事件绑定的三种方式

```javascript
<script type="text/javascript">
  const btn1 = document.getElementById('btn1')
  btn1.addEventListener('click',()=>{alert("按钮1被点击了")}) const btn2 =
  document.getElementById('btn2') btn2.onClick = () =>{alert("按钮2被点击了")}
  function demo(){alert("按钮3被点击了")}
</script>
```

### 类中的方法 this 指向

study 方法放在了哪里? -类的原型对象上,供实例使用
通过 Person 实例调用 study 时,study 中的 this 就是 Person 实例

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  study() {
    console.log(this);
  }
}
```

## 5 - React 中自定义组件

React 中的组件主要包括函数式组件和类式组件

### 函数式组件

```jsx
// 1.创建一个组件
function MyComponent() {
  // 经过babel翻译后,开启严格模式,禁止自定义的函数中的this指向window,于是this指向undifined
  console.log(this); //此处的this时undifined
  return <h2>我是函数定义的组件（适用于【函数组件】的定义）</h2>;
}
// 2.渲染组件到页面中
ReactDOM.render(<MyComponent />, document.getElementById("test"));
```

执行了 ReactDOM.render(<MyComponent/>．．．．．)之后,发生了什么?

 1.React 解析组件标签,找到 MyCompnent 标签

 2.发现组件是使用函数定义的,随后调用该函数,将返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中

### 类式组件

```jsx
// 1.创建类式组件
class MyComponent extends React.Component {
  // render是放在那里的？===M有Component的原型对象上，供实例使用。
  // render中的this是谁？=== MyComponent的实例对象《=》MyComponent组件实例对象
  render() {
    console.log("this指的是：", this);
    return <h2>我是用类定义的组件(适用于[复杂组件]的定义)</h2>;
  }
}

// 2.渲染类式组件
ReactDOM.render(<MyComponent />, document.getElementById("test"));
```

执行了 ReactDOM.render(<MyComponent/>．．．．．)之后,发生了什么?

 1.React 解析组件标签,找到 MyCompnent 标签

 2.发现组件是使用类定义的，随后 new 出来该类的实例，并通过该实例调用到原型上的 render 方法。

 3.将 render 返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中。

## 6 - 组件实例中的三大属性

### 1 - state

(1).通过 onXxx 属性指定事件处理函数(注意大小写)
a.React 使用的自定义(合成)事件，而不是使用的原生 DOM 事件 --- 为了更好的兼容性
b.React 中的事件是通过事件委托方式处理的(委托给组件最外层元素)
(2).通过 event.target 得到发生事件的 DOM 元素对象

### 2 - props



### 3 - refs
