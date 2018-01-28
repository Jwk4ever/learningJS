## DOM的扩展

#### 选择符API
`querySelector()`跟css选择符一样，返回第一个匹配的元素
`querySelectorAll()`返回所有的匹配的集合NodeList
`matchesSeletor()`如果有元素匹配返回true

#### 元素遍历
`childElementCount`
`firstElementChild`
`lastElementChild`
`previousElementSibling`
`nextElementSibling`

#### HTML5
`document.getELementsByClassName()`根据元素的class选取元素
`classList`属性，返回元素class的名称合集该合计有`add contains remove toggle`等方法
`document.activeElement`属性获取焦点元素
`hasFocus()`判断时候有焦点
`readyState`判断文档是否加载完成，可能有`loading complete`两个值
`head`对文档`<head>`元素的引用
`data-*`自定义数据属性，可以通过元素`dataset`属性来访问
`innerHTML outerHTML`插入元素
`insertAdjacentHTML`有四个参数`beforebegin afterbegin beforeend afterend`分别代表元素插入的位置
`scrollIntoView`让元素可见

#### 专有扩展
`document.children`返回元素节点
`document.contains`包含
`document.compareDocumentPosition()`判断两个节点的关系
![compareDocumentPosition返回码](campareDocumentPosition.jpg)
`innerText outerText`插入文本 类似属性`textContent`
`scrollIntoViewIfNeeded()`只有不在可视范围内进行滚动
`scrollBylines()`按行滚动
`scrollByPages()`按页滚动

