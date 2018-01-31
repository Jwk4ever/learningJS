## 离线应用与客户端存储

#### 离线检测
`navigator.onLine` 属性，判断是否在线
`online` 事件
`offline` 事件

#### 应用缓存
`appcache` manifest文件

#### 数据缓存
'cookies' 通过HTTP响应返回一个cookie,然后客户端每次请求都会上传cookies
缺点
- 存储有限
- 在客户端存储不安全
- 每次都随请求上传浪费带宽
`document.cookie` 接口用来设置cookie

#### Storage
分为localStorage 和 sessionStorage 两个，API一致，主要区别保存的时间周期有区别
`clear()` 清除所有变量
`getItem()` 获取变量
`key()` 获得Index位置处值得名字
`removeItem()` 删除键值对
`setItem()` 设置键值对
`length` 获取所有键值对个数

#### IndexDB
通过异步请求对数据库进行操作
`indexedDB.open()` 打开数据库请求，监听两个事件`success`和`error`，通过回调操作数据库
`db.setVersion()` 打开数据库设置版本的请求
`let store = db.createObjectStore()` 建立存储空间，两个参数名字和主键
`store.add()` 添加请求和 `store.put()` 更新请求
`let transaction = store.transaction()` 创建事务，访问储存空间
`transaction.objectStore()`获取储存空间
`get()` 和 `delete()` 查看和删除请求 

