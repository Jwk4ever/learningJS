## 时间

#### 事件流
事件捕获 处于目标阶段 事件冒泡阶段

#### 事件处理程序
- HTML事件处理
    `<input type="button" value="click me" onclick="showMessage()">`
- DOM 0级事件处理程序
	`var btn = document.getElementById('btn');`
	`btn.onclick = function(){ alert("click") };`
- DOM 2级事件处理程序
	`addEventListener()`
	`removeEventListener()`
	IE中分别为`attachEvent detachEvent`  

#### 事件对象event
`bubbles` 是否冒泡
`cancelable` 是否可以取消冒泡
`currentTarget`
`defaultPrevented`
`detail`
`eventPhase`
`preventDefault()` 阻止默认事件
`stopImmediatePropagation()`
`stopPropagation()` 停止冒泡或捕获
`target`
`trusted`
`type` 事件类型
`view`

#### 事件类型
UI事件
`load unload abort error select resize scroll`
焦点事件
`blur focusin focusout focus`
鼠标和滚轮事件
`click dbclick mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup`
`pageX pageY clientX clientY screenX screenY` event属性 标记点击位置
`relatedTarget` 相关目标
键盘与文本事件
`keydown keypress keyup textInput`
`keyCode char key` event表明按键键码
移动设备事件

#### 内存和性能
事件委托：利用事件冒泡，指定一个事件处理程序管理某一类型的所有事件

