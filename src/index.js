import normalize from "!style!css!normalize.css";
import style from "!style!css!sass!./style/index.sass";
import Navigo from "navigo";
import { repo, siteName } from "./config";
import store from "./store";
import authAxios from "./utils/authAxios";
import checkAdmin from "./utils/checkAdmin";
import getAllPosts from "./utils/getAllPosts";
import getPostsRecursively from "./utils/getPostsRecursively";
import getContent from "./utils/getContent";
import commitPost from "./utils/commitPost";
import commitEdit from "./utils/commitEdit";
import getPostSha from "./utils/getPostSha";
import renderPost from "./components/renderPost";
import renderComposer from "./components/renderComposer";
import renderLogin from "./components/renderLogin";
import renderMain from "./components/renderMain";
import renderPage from "./components/renderPage";
import renderEditor from "./components/renderEditor";

document.getElementById('siteName').innerText = siteName;

const router = new Navigo(null, true); // root = null, useHash=true
const container = document.getElementById('contentContainer');

router.on({
  'posts/:relativePath/:title': async (params) => {        // intend for category
    checkAdmin();
    store.currentPost.title = params.title.slice(11, -3); // delete date and '.md'
    store.currentPost.path = `posts/${params.relativePath}/${params.title}`;
    store.currentPost.content = await getContent(store.currentPost.path);
    container.innerHTML = await renderPost(store.currentPost.title, store.currentPost.content);
  },
  'pages/:title': async (params) => {
    checkAdmin();
    const pageContent = await getContent(`pages/${params.title}`);
    container.innerHTML = await renderPage(pageContent);
  },
  'admin/compose': async () => {
    checkAdmin();
    const html = renderComposer();
    container.innerHTML = html;
  },
  'admin/finishCompose': async () => {
    checkAdmin();
    const title = document.getElementById('titleField').value;
    const content = document.getElementById('contentField').value;
    await commitPost(title, content);
  },
  'admin/edit': async () => {
    checkAdmin();
    store.currentPost.sha = getPostSha(store.currentPost.path, store.allPosts);
    const html = `<h1>${store.currentPost.title}</h1>${renderEditor(store.currentPost.content)}`;
    container.innerHTML = html;
  },
  'admin/finishEdit': async () => {
    checkAdmin();
    const content = document.getElementById('editedContent').value;
    await commitEdit(content);
  },
  'admin/delete': async () => {   //ref: https://developer.github.com/v3/repos/contents/#delete-a-file
    checkAdmin();
    store.currentPost.sha = getPostSha(store.currentPost.path, store.allPosts);
    store.authedAxios.delete(`/repos/${repo}/contents/${store.currentPost.path}`,{
      data: {
        message: "delete from GiG",
        sha: store.currentPost.sha,
      },
    })
    .then(res => {
      alert('delete success');
      location.hash = '#';
    })
    .catch(res => { alert(res); });
  },
  'admin/login/checkLogin': async () => {
    checkAdmin();
    const password = document.getElementById('loginPasswordInput').value;
    store.authedAxios = authAxios(password);
    /*console.log("password", password);*/
    store.authedAxios.get('/user')
    .then(res => { location.hash = 'admin'; })
    .catch((res) => {
      alert('wrong pass');
      history.go(-1);
      authedAxios = undefined;
    });
  },
  'admin/login': async () => {
    const html = renderLogin();
    container.innerHTML = html;
  },
  'admin': async () => {
    checkAdmin();
    store.allPosts = await getAllPosts();
    container.innerHTML = await renderMain(store.allPosts, true);
  },
  'categories': async () => {
    alert('TODO');
  },
  '': async () => {
    checkAdmin();
    store.allPosts = await getPostsRecursively();
    container.innerHTML = await renderMain(store.allPosts);
  },
});
