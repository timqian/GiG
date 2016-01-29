获取内容只需要请求 https://raw.githubusercontent.com
compose 需要请求 api.github.com

## 获取 post 的日期

new Date(filename.substring(0, 10));

## posts 数据结构

posts = [
  {
    title:,
    date,
    download_url,
    tag?
  },
  {
    title:,
    date,
    download_url,
    tag?
  },
  ...
]

## use string templates as view component

## 浏览器端 router 实现（window.onpopstate 响应浏览器的 url 改变）: https://github.com/krasimir/navigo

## 需要分类功能，这个挺基本的。 需要把 posts 数据放到一个地方？

如果是 类型是dir 就对该dir 在做一次请求。（所以，dir 不要太多）

## 每次输入密码不太好，最好单独搞一个登录界面用来登录，或者为博主弄一个 admin url

## 考虑项目的可定制性

## 用 github search api 提供 search 服务： https://developer.github.com/v3/search/

- 使用网页
https://github.com/search?utf8=%E2%9C%93&q=test+repo%3Atimqian%2Fsimple-cms+path%3Aposts&type=Code&ref=advsearch&l=&l=

## 创建 md 时，加上 title


## 前面都是细节，关键问题在于，我需要一个统一的state吗？用 redux 或着别的什么东西来管理应用状态

# function design: 第一版（没有分类功能，没有分页功能）

- `checkAdmin()`: if admin mode, show admin buttons
- `getAllPosts()`
- `getContent()`
- `renderMain()`
- `renderContent()`
- `renderComposer()`
- `renderLogin()`
- `commitNew()`
- `commitEdit()`

# router design:

- `/`
- `/posts`
- `/pages`
- `/compose`
- `/edit`
- `/login`
- `#admin`: indicate if user is in admin mode
