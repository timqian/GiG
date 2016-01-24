## 控制元素显示与否

- `element.style.visibility`: 隐藏后扔占用空间
- `element.style.display`: 隐藏后不占用空间

#### Examples
- in html:

```html
<a href='#' style='display:none'>hi</a> <!--隐藏-->
<a href='#' style='display:'>hi</a> <!--现实-->
<a href='#' style='visibility:hidden'>hi</a><!--隐藏-->
<a href='#' style='visibility:visible'>hi</a><!--现实-->
```

- 用 js 控制 element 的 style 属性

```javascript
document.getElementById('typediv1').style.visibility='hidden'; //隐藏
```
