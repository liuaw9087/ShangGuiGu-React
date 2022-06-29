// 引入react核心库
import React from 'react'
// 引入reactDOM
import ReactDOM from 'react-dom/client'
// 引入App组件
import App from './App'

// 在 New Root API 中，createRoot 创建一个 root，然后调用 render 方法完成渲染：
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// 渲染App组件到页面
// 旧版API
// ReactDOM.render(<App />, document.getElementById('root'))
root.render(<App />);
