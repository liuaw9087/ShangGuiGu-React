// 引入react库
import React from 'react'
// 引入ReactDOM库
import ReactDOM from 'react-dom/client'
// 引入App
import App from './App'
// 渲染组件到页面
// ReactDOM.render(<App />, document.getElementById('root'))
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);