(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{364:function(t,s,n){"use strict";n.r(s);var a=n(43),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("ol",[n("li",[t._v("dom react原理")]),t._v(" "),n("li",[t._v("css布局")]),t._v(" "),n("li",[t._v("js原型链继承")]),t._v(" "),n("li",[t._v("fetch取消")])]),t._v(" "),n("p",[t._v("在项目开发中会遇到用户在一个页面中多次点击之后，再点击下一个页面。但是会遇到上一个页面的接口请求还在pending当中，第二个页面的接口请求会排队等待。这样就会非常影响用户的体验，所以要做到离开一个页面的同时也中止这个页面上所有尚未完成的接口请求。")]),t._v(" "),n("p",[t._v("问题解决：\n构造函数")]),t._v(" "),n("p",[t._v("AbortController.AbortController()创建一个新的AbortController 对象实例。")]),t._v(" "),n("p",[t._v("属性")]),t._v(" "),n("p",[t._v("AbortController.signal 只读返回一个AbortSignal对象实例，它可以用来 with/abort 一个DOM请求")]),t._v(" "),n("p",[t._v("方法")]),t._v(" "),n("p",[t._v("AbortController.abort()中止一个尚未完成的DOM请求。这能够中止fetch 请求，任何响应Body的消费者和流。")]),t._v(" "),n("p",[t._v("具体使用（react中）：\n1、在componentDidMount中实例化")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("componentDidMount")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AbortController"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbortController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        signal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("signal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("2、请求时添加一个请求对象 { signal }")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("resetVehicleRedis")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" HostFormData "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    HostFormData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'diuber2017'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    HostFormData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secret_key"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'09e8b1b88e615f0d9650886977af33e9'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/web/admin_setting/resetVehicleRedis'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("HostFormData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      credentials"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'include'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      signal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("signal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("3、离开页面中止请求")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("componentWillUnmount")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AbortController"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("abort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[t._v("eventloop")]),t._v(" "),n("li",[t._v("instanceof")]),t._v(" "),n("li",[t._v("promise封装setstate")]),t._v(" "),n("li",[t._v("redux基本组成和设计单向数据流")]),t._v(" "),n("li",[t._v("https协议的过程")]),t._v(" "),n("li",[t._v("https获取加密密钥的过程")]),t._v(" "),n("li",[t._v("http的方法有哪几种,每种方法的有用途")]),t._v(" "),n("li",[t._v("类式继承的方案")]),t._v(" "),n("li",[t._v("prototype继承的实现")]),t._v(" "),n("li",[t._v("数字千分位处理，正则和非正则都要实现")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("numFormat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocaleString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(\\d)(?=(?:\\d{3})+$)/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$1,'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("ol",{attrs:{start:"15"}},[n("li",[n("p",[t._v("借用构造继承，几种组合继承方式")])]),t._v(" "),n("li",[n("p",[t._v("看编程代码说出运行结果：\nProcess.nextTick，setImmediate 和promise.then 的优先级\nProcess.nextTick，pronise, setImmediate的优先级")])]),t._v(" "),n("li",[n("p",[t._v("实现一个bind函数")])]),t._v(" "),n("li",[n("p",[t._v("千位加逗号")])]),t._v(" "),n("li",[n("p",[t._v("三个继承方式的优缺点  优化列出代码")])]),t._v(" "),n("li",[n("p",[t._v("nodejs的事件循环")])]),t._v(" "),n("li",[n("p",[t._v("bfc")])]),t._v(" "),n("li",[n("p",[t._v("css实现正方形div水平垂直居中")])]),t._v(" "),n("li",[n("p",[t._v("koa1的原理,继承")])]),t._v(" "),n("li",[n("p",[t._v("最后是一个写代码 处理有依赖的异步任务 加重试")])]),t._v(" "),n("li",[n("p",[t._v("diff的原理")])]),t._v(" "),n("li",[n("p",[t._v("es6箭头函数")])]),t._v(" "),n("li",[n("p",[t._v("import和requre的区别")])]),t._v(" "),n("li",[n("p",[t._v("symbol")])]),t._v(" "),n("li",[n("p",[t._v("函数实现正面模板")])]),t._v(" "),n("li",[n("p",[t._v("正方形实现，三角形实现")])]),t._v(" "),n("li",[n("p",[t._v("CSS考了 伪类")])]),t._v(" "),n("li",[n("p",[t._v("实现布局header,content,footer，上中下布局；当content 超出窗口可视区，不显示footer；当content 没超出可视区时，固定footer 在最下面")])]),t._v(" "),n("li",[n("p",[t._v("算法:背包问题、闭包问题、函数柯里化")])]),t._v(" "),n("li",[n("p",[t._v("宽是高的一半的垂直居中，里面有字体也要垂直居中类数组")])]),t._v(" "),n("li",[n("p",[t._v("promise async settimeout先后次序")])]),t._v(" "),n("li",[n("p",[t._v("event类 on once灯方法")])]),t._v(" "),n("li",[n("p",[t._v("==的隐式转化")])]),t._v(" "),n("li",[n("p",[t._v("什么是闭包，")])]),t._v(" "),n("li",[n("p",[t._v("最长子序列")])]),t._v(" "),n("li",[n("p",[t._v("二叉树中序遍历")])]),t._v(" "),n("li",[n("p",[t._v("http握手原理")])]),t._v(" "),n("li",[n("p",[t._v("react 新版本的特性")])]),t._v(" "),n("li",[n("p",[t._v("多空格字符串格式化为数组")])]),t._v(" "),n("li",[n("p",[t._v("bind函数运行结果")])]),t._v(" "),n("li",[n("p",[t._v("点击table的td显示td内容")])]),t._v(" "),n("li",[n("p",[t._v("数字千分位处理")])]),t._v(" "),n("li",[n("p",[t._v("固定日期与当前时间格式化处理")])]),t._v(" "),n("li",[n("p",[t._v("上中下三栏布局")])]),t._v(" "),n("li",[n("p",[t._v("实现一个子类实例可以继承父类的所有方法")])]),t._v(" "),n("li",[n("p",[t._v("Jsonp跨域，js原型继承 & 原型链，promise，二叉树搜寻算法，算法：前端做并发请求控制")])]),t._v(" "),n("li",[n("p",[t._v("杭州一面:\n节流函数\nKoa中间件机制及代码实现\nReact Fiber原理以及为什么componentWillRecievedProps会废弃\n给定一个数组，一个期望值，找到数组中两个相加等于期望值")])]),t._v(" "),n("li",[n("p",[t._v("深圳前端一面：\nreact生命周期 deepClone 回流重绘 canvas")])]),t._v(" "),n("li",[n("p",[t._v("深圳前端一面：")]),t._v(" "),n("ol",[n("li",[t._v("数组去重")]),t._v(" "),n("li",[t._v("React Hook原理")]),t._v(" "),n("li",[t._v("列表diff中key的作用")]),t._v(" "),n("li",[t._v("Vue v-model原理")]),t._v(" "),n("li",[t._v("场景题：Vue CheckBoxGroup/CheckBox设计")]),t._v(" "),n("li",[t._v("Vue双向绑定原理")])])]),t._v(" "),n("li",[n("p",[t._v("成都前端：")]),t._v(" "),n("ol",[n("li",[t._v("换行字符串格式化")]),t._v(" "),n("li",[t._v("屏幕占满和未占满的情况下，使footer固定在底部，尽量多种方法。")]),t._v(" "),n("li",[t._v("日期转化为2小时前，1分钟前等")]),t._v(" "),n("li",[t._v("多个bind连接后输出的值")]),t._v(" "),n("li",[t._v("原码，补码，反码")]),t._v(" "),n("li",[t._v("事件委托")])])]),t._v(" "),n("li",[n("p",[t._v("成都前端：")]),t._v(" "),n("ol",[n("li",[t._v("React Hook, Fiber Reconciler ,新的生命周期 getDerivedStateFromPros 为什么是Static")]),t._v(" "),n("li",[t._v("redux 异步")]),t._v(" "),n("li",[t._v("redux 异步中间件原理")]),t._v(" "),n("li",[t._v("express koa 中间件原理\n56.北京前端一面：")])])]),t._v(" "),n("li",[n("p",[t._v("宏任务微任务")])]),t._v(" "),n("li",[n("p",[t._v("libUA")])]),t._v(" "),n("li",[n("p",[t._v("express ctx 中间键代码实现")])]),t._v(" "),n("li",[n("p",[t._v("vue 发布订阅和虚拟dom代码实现")])]),t._v(" "),n("li",[n("p",[t._v("请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数      控制请求的并发度，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接        使用 fetch 即可")])]),t._v(" "),n("li",[n("p",[t._v("南京前端1面：")]),t._v(" "),n("ol",[n("li",[t._v("事件循环")]),t._v(" "),n("li",[t._v("react diff算法，key的作用，setData的机制，事件合成")]),t._v(" "),n("li",[t._v("vue的v-model原理")]),t._v(" "),n("li",[t._v("实现一个方法，参数是一个generator函数，执行结果是执行完所有generator中的yield")]),t._v(" "),n("li",[t._v("获取页面所有img并且下载")]),t._v(" "),n("li",[t._v("两个同源tab之间的交互，数据同步")])])]),t._v(" "),n("li",[n("p",[t._v("上海前端一面：")])]),t._v(" "),n("li",[n("p",[t._v("怎么将一个异步方法promise化，以及实现promise.all()方法")])]),t._v(" "),n("li",[n("p",[t._v("vue单页多页的区别，vue路由实现原理")])]),t._v(" "),n("li",[n("p",[t._v("vue数据驱动视图原理？更新视图的过程是否是同步的操作？")])]),t._v(" "),n("li",[n("p",[t._v("nodejs相关的应用（答：开发命令行工具、web服务，ssr，数据库操作等）")])]),t._v(" "),n("li",[n("p",[t._v("vue项目开发环境如何配置？wepack-dev-server 热更新功能实现原理")])]),t._v(" "),n("li",[n("p",[t._v("express、koa、redis等技术相关应用")])]),t._v(" "),n("li",[n("p",[t._v("[1,2,3].map(parseInt) 执行结果")])]),t._v(" "),n("li",[n("p",[t._v("北京前端一面题：")])]),t._v(" "),n("li",[n("p",[t._v("css 如何实现元素a距离屏幕10px，高度无论宽度怎么改变都是其.5")])]),t._v(" "),n("li",[n("p",[t._v("隐式转换，会问为什么这样")])]),t._v(" "),n("li",[n("p",[t._v("同步异步输出的顺序")])]),t._v(" "),n("li",[n("p",[t._v("argument是数组吗，如果不是怎么变为数组")])]),t._v(" "),n("li",[n("p",[t._v("如何实现for循环内定时器依次输出123")])]),t._v(" "),n("li",[n("p",[t._v("bind实现")])]),t._v(" "),n("li",[n("p",[t._v("函数节流")])]),t._v(" "),n("li",[n("p",[t._v("动态规划算法")])]),t._v(" "),n("li",[n("p",[t._v("北京前端一面：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("function request(urls, maxNumber, callback) 要求编写函数实现，根据urls数组内的url地址进行并发网络请求，最大并发数maxNum   ber,当所有请求完毕后调用callback函数(已知请求网络的方法可以使用fetch api)")])]),t._v(" "),n("li",[n("p",[t._v("throttle函数实现")])])]),t._v(" "),n("p",[t._v("3.requestAnimationFrame 和 setTime、setInterval的区别，requestAnimationFrame 可以做什么")]),t._v(" "),n("p",[t._v("4.二叉树路径总和（leetcode 112）")]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("给定一个不含重复数字的数组arr,指定个数n,目标和sum,判断是否含有由n个不同数字相加得到sum的情况（leetcode 40 变种， 数   字不得重复使用）")])])]),t._v(" "),n("li",[n("p",[t._v("上海前端一面：\nwebsocket 原理\nhttp2如何实现多路复用")])]),t._v(" "),n("li",[n("p",[t._v("冒泡算法")])]),t._v(" "),n("li",[n("p",[t._v("前端安全 ， DOS")])]),t._v(" "),n("li",[n("p",[t._v("前端缓存、回话机制")])]),t._v(" "),n("li",[n("p",[t._v("跨域")])]),t._v(" "),n("li",[n("p",[t._v("计算机网络知识 TCP UDP")])]),t._v(" "),n("li",[n("p",[t._v("测试 单测、集成测试")])]),t._v(" "),n("li",[n("p",[t._v("自动化集成")])]),t._v(" "),n("li",[n("p",[t._v("Docker 应用")])]),t._v(" "),n("li",[n("p",[t._v("Nodejs express koa")])]),t._v(" "),n("li",[n("p",[t._v("成都前端笔试：")])]),t._v(" "),n("li",[n("p",[t._v("输入一个日期 返回几秒前 几天前或者几月前；")])]),t._v(" "),n("li",[n("p",[t._v("153812.7  转化153,812.7；")])]),t._v(" "),n("li",[n("p",[t._v("用两种方法 一种是正则；")])]),t._v(" "),n("li",[n("p",[t._v("还有关于 bind的一道题；")])]),t._v(" "),n("li",[n("p",[t._v("北京前端一面\n①['a','b'],['A','B'],['1','0']，输出['aA1','aA0','aB1','aB0','bA1','bA0','bB1','bB0']，算法的排列组合问题\n②vue-router路由监听的原理\n③webpack打包的原理，webpack有没有针对打包过程做一些优化提升打包速度\n④请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数，控制请求的并发度，实现max个请求执行完之后再执行下max个请求，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接 使用 fetch 即可\n⑤vue双向绑定的原理\n64.深圳抖音\n写一个eventBus，元素水平垂直居中，vuex mobox，小程序架构优化 日志系统")])])]),t._v(" "),n("p",[t._v("二轮:")]),t._v(" "),n("ol",[n("li",[t._v("主要是围绕你的项目经历和技术，有一定的深度，主要还是要对项目全面熟悉；还有一个就是函数     柯理化的编码实现")]),t._v(" "),n("li",[t._v("函数柯里化、Web安全、react性能优化、react算法原理")]),t._v(" "),n("li",[t._v("上来直接让写一个autocomplete 组件，可能是想考察业务思考点；")]),t._v(" "),n("li",[t._v("后续的问题主要会接着业务场景问 扣实际场景 不问知识理论；")]),t._v(" "),n("li",[t._v("http网络协议 ；")]),t._v(" "),n("li",[t._v("tcp为什么是可靠的；")]),t._v(" "),n("li",[t._v("js设计模式；")]),t._v(" "),n("li",[t._v("solid原则；")]),t._v(" "),n("li",[t._v("柯里化；")]),t._v(" "),n("li",[t._v("curry函数实现\nhttps原理\nwebpack打包原理\nbabel原理\nnode相关基础问题")])]),t._v(" "),n("p",[t._v("11.深圳二面：\n1，一千个棋子，甲先取乙后取，每次最多取七个最少取一个，问是否有一个方案让甲一定赢\n2，3×7的格子，从左上角到右下角，只能往右或者往下，有多少种走法，\n3，一个不均匀硬币，如何抛出均匀概率\n4，然后有一个生成0到13随机数的算法，如何用它均匀生成0到9随机数\n5，两千万高考生成绩如何排序\n6，用链表表示的大数求和\n12.杭州二面")]),t._v(" "),n("ol",[n("li",[t._v("css 单行和多行截断")]),t._v(" "),n("li",[t._v("给一个由域名组成的字符串进行按子域名分组的反转，比如 news.toutiao.com 反转成 com.toutiao.news 需要 in place 做，                        3.其他技术问题都是穿插在我的业务项目里面的，有点针对实际情景给解决方案")])]),t._v(" "),n("p",[t._v("13.深圳抖音二面：\n最近在做项目（痛点，难点，怎么解决），ssr（ssr csr混合怎么处理），小程序架构（带来的优缺点），状态管理，异步编程（各个优缺点）")]),t._v(" "),n("p",[t._v("三轮：\n1.自己做得最有成就的项目\n2.自己主动承担并是核心的项目\n3.项目深度:比如现场实现vue的数据代理等\n4.技术广度:什么是微前端等\n5.职业发展\n6.  1. js实现依赖注入\n2. 接口攻击的方式和防御措施\n3. https握手过程\n4. 设计模式\n5. redux和 mobx的区别\n6. js多线程如何共享大的数据")])])},[],!1,null,null,null);e.options.__file="bytedance.md";s.default=e.exports}}]);