## H5脚本编程

#### 跨文档消息传递(XDM)
`postMessage(msg, src)` 传递消息 和 域名
`message`事件 事件对象包含data、origin、source分别是数据、发送文档所在的域、发送文档window的代理
data最好为字符串，不是字符串需要JSON.strinfy()方法处理

#### 原生拖放
拖动元素触发了`dragstart`、`drag`、`dragend`三个事件
有效放置目标触发`dragenter`、`dragover`、`dragleave`或`drop`
拖动事件中包含dataTransfer对象，主要有
`getDate()`方法
`setDate()`方法
`dropEffect`
`effectAllow`
`draggable`拖动属性

原生拖动实例

#### 媒体元素
`video` 视频
`audio` 音频

