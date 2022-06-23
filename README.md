# 👋 ⚛️React练习及笔记内容

根据官方笔记和B站上的尚硅谷React教学视频编写的备忘文档

[尚硅谷React教程](https://www.bilibili.com/video/BV1wy4y1D7JT?spm_id_from=333.337.search-card.all.click&vd_source=1accccbf65ef01b231cfa311e00517ea)

我建立了一个前端交流群，欢迎加入！

![二维码](https://s2.loli.net/2022/06/23/d3M8TUKt74LvPFo.png)

[点击链接加入群聊【前端学习-求职】](https://jq.qq.com/?_wv=1027&k=aP4rxRLD)

## 1 - Hello,React

​	React通过修改虚拟DOM的内容来向页面呈现内容。

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

## 2 - 虚拟DOM的两种创建方式

​	可以通过Javascript和JSX两种方式创建虚拟DOM

​	使用JSX创建虚拟DOM

```jsx
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

## 3 - JSX语法规则

jsx语法规则：

​          1.定义虚拟DOM时 不要写引号。

```jsx
const VDOM = (....)
```

​          2.标签中混入js表达式时，要用花括号

```jsx
<div><h2 className="title" id="{myId.toLowerCase()}"> //id中的表达式显示的是花括号才可以
```

​          3.样式的类名指令不要用class ，要用className 例如：

```jsx
<div><h2 className="title" id="{myId.toLowerCase()}">
```

​          4.内联样式要用style={{key:value}}的形式去写，采用小驼峰命名法 例如：

```jsx
<span style={{color:'white',fontSize:'29px'}}>{myData.toLowerCase()}</span>
```

​          5.虚拟DOM必须只有一个跟标签

```jsx
const VDOM = (<div>...</div>)  //例如 图中只有一个div根节点
```

​          6.标签必须闭合 闭合或者自闭合

```jsx
<input type="text"></input>
<input type="text"/>
```



​          7.标签首字母

​            (1).若小写字母开头，则将该标签转为Html中同名元素。若html中无该标签对应的同名元素，则报错

```jsx
<good><good/> //例如如果是good标签，则会在html中找同名元素，所以会报错
```

​            (2).若大写字母开头，React就去渲染对应的组件，若组件没有定义，则报错 （之后组件内容会涉及）

一定注意区分：【js语句()】与【js表达式】

​        3.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方

​          例如：

​            (1).a 

​            (2).a + b

​            (3).demo(1)

​            (4).arr.map()

​            (5).function test(){}

​        4.语句（代码）:改变程序走向的代码行

​          下面这些都是语句（代码）：

​            (1).if(){}

​            (2).for(){}

​            (3).switch(){

​              case:xxx

​            } 

## 4 - 关于类内容的复习

### 类的基本知识

创建一个Person类 ，另外创建一个Student类继承自Person类

```javascript
class Person{
            // 构造器方法
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
            // 一般方法
            speak(){
                // speak 方法放在了哪里? -- 类的原型对象上,供实例使用
                // 通过Person实例调用speak时,speak中的this就是Person实例
                console.log(`我叫${this.name},我的年龄是${this.age}`)
            }
        }
class Student extends Person{
            constructor(name,age,grade){
                // 当继承于父类 且需要写构造器时,必须写super
                super(name,age)
                this.grade = grade
            }
            // 重写从父类继承过来的方法
            speak(){
                console.log(`我叫${this.name},我的年龄是${this.age},我就读的年级是:${this.grade}`)
            }
            // 通过Student实例调用study时,study中的this就是Student实例
            study(){
                console.log('我很努力的学习')
            }
        }
```

总结:

​        1.类中的构造器不是必须写的,要对实例进行一些初始化的操作,如添加指定属性时才写

​        2.如果A类继承了B类,且A类中写了构造器,那么A类中的构造器中super是必须要调用的

​        3.类中定义的方法都放在了类的原型对象中的

### 原生事件绑定方式

原生事件绑定的三种方式

```javascript
<script type="text/javascript">
        const btn1 = document.getElementById('btn1')
        btn1.addEventListener('click',()=>{
            alert('按钮1被点击了')
        })
        const btn2 = document.getElementById('btn2')
        btn2.onClick = () =>{
            alert('按钮2被点击了')
        }
        function demo(){
            alert('按钮3被点击了')
        }
    </script>
```

### 类中的方法this指向

 study方法放在了哪里? -类的原型对象上,供实例使用
 通过Person实例调用study时,study中的this就是Person实例

```javascript
class Person{
            constructor(name,age){
                this.name = name 
                this.age = age
            }
            study(){
                console.log(this);
            }
        }
```

## 5 - React中自定义组件

React中的组件主要包括函数式组件和类式组件

### 函数式组件

```jsx
// 1.创建一个组件
function MyComponent(){
                    // 经过babel翻译后,开启严格模式,禁止自定义的函数中的this指向window,于是this指向undifined
                    console.log(this)//此处的this时undifined
                    return <h2>我是函数定义的组件（适用于【函数组件】的定义）</h2>
                }
// 2.渲染组件到页面中
ReactDOM.render(<MyComponent/>,document.getElementById('test'))
```

执行了ReactDOM.render(<MyComponent/>．．．．．)之后,发生了什么?

​          1.React解析组件标签,找到MyCompnent标签

​          2.发现组件是使用函数定义的,随后调用该函数,将返回的虚拟DOM转为真实DOM，随后呈现在页面中

### 类式组件

```jsx
// 1.创建类式组件
        class MyComponent extends React.Component{
            // render是放在那里的？===M有Component的原型对象上，供实例使用。
            // render中的this是谁？=== MyComponent的实例对象《=》MyComponent组件实例对象
            render(){
                console.log('this指的是：',this)
                return <h2>我是用类定义的组件(适用于[复杂组件]的定义)</h2>
            }
        }
        
        // 2.渲染类式组件
        ReactDOM.render(<MyComponent/>,document.getElementById('test'))
```

执行了ReactDOM.render(<MyComponent/>．．．．．)之后,发生了什么?

​          1.React解析组件标签,找到MyCompnent标签

​          2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。

​          3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。

## 6 - 组件实例中的三大属性

### state
