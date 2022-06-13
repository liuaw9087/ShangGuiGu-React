import React from 'react';
import ReactDOM from 'react-dom';

/*
注意： 组件名称必须以大写字母开头。

React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。 */

// 函数组件
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = <Welcome name="liuaw" />
// root.render(element)


// 进阶:组合组件
/* 通常来说，每个新的 React 应用程序的顶层组件都是 App 组件。但是，如果你将 React 集成到现有的应用程序中，你可能需要使用像 Button 这样的小组件，并自下而上地将这类组件逐步应用到视图层的每一处。 */
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// function App() {
//   return (
//     <div>
//       <Welcome name="sara" />
//       <Welcome name="liuaw" />
//       <Welcome name="sam" />
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = <App />
// root.render(element)
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
