使用 Templete string ，我们可以方便得在 string 中插入变量。这不就是 view component 主要工作吗？
例子：
```
function sayHi(name) {
  return `<p>How are you, ${name}?</p>`;
}
```
于是在[最近的小项目]( https://github.com/timqian/GiG)中试验了下这种方式.

## 项目简介
利用 github 作为后端博客系统，可以直接在博客上增删内容(通过调用 github api)

## 项目结构
- store.js: 保存应用状态                (Model)
- componets: 放 view components       (View)
- index.js: 根据不同的 route 做不同的事  (Controller)
- 其他 util 函数

## 工作原理
主体部分放在 `<main id="contentContailer"></main/>`中，根据不同的 route 设置其的 innerHTML 。
header 和 footer 部分几乎不变，只需要根据不同的 route 控制一下某些内容是否显示。

## 这种方式的好处
- 代码体积小
- 业务无关代码少
- view component 容易理解

## 遇到的坑
- 由于使用这种方式生成的 component 是纯字符串，所以无法在 onclick handler 中调用其他的模块。所以对于需要比较复杂操作 onclick 事件，我会改变网页的 route, 在 `index.js`中来 handle 这个事件，导致 index 比较臃肿。

## 项目地址

https://github.com/timqian/GiG