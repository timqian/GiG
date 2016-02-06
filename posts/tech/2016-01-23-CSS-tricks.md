## 控制元素显示与否

- `element.style.visibility`: 隐藏后扔占用空间
- `element.style.display`: 隐藏后不占用空间

#### Examples
- in html:

```html
<a href='#' style='display:none'>hi</a> <!--隐藏-->
<a href='#' style='display:'>hi</a> <!--现实-->
<a href='#' style='visibility:hidden'>hi</a><!--隐藏-->
<a href='#' style='visibility:visible'>hi</a><!--显示-->
```

- 用 js 控制 element 的 style 属性

```javascript
document.getElementById('typediv1').style.visibility='hidden'; //隐藏
```

## 文字大小

- `em`	Relative to the font-size of the element (2em means 2 times the size of the current font)
- `rem`	Relative to font-size of the root element
