/**
 * Route design
 *  - `/`:            show all posts' name
 *  - `/posts/:path`  show post's content
 *  - `/pages/:path`  show page's content
 *  - `/compose`      compose new post
 *  - `/edit`         edit post
 *  - `/login`        to be admin
 *  - `#admin`        indicate if user is in admin mode
 */
import normalize from "!style!css!normalize.css";
import style from "!style!css!sass!./style/index.sass";
import Navigo from "navigo";
import store from "./store";
import authAxios from "./utils/authAxios";
import checkAdmin from "./utils/checkAdmin";
import getAllPosts from "./utils/getAllPosts";
import renderMain from "./utils/renderMain";
import getContent from "./utils/getContent";
import renderContent from "./utils/renderContent";
import renderComposer from "./utils/renderComposer";
import renderLogin from "./utils/renderLogin";
import commitPost from "./utils/commitPost";

const router = new Navigo(null, true); // root = null, useHash=true
const container = document.getElementById('contentContainer');

router.on({
  'posts/:path': async (params) => {
    checkAdmin();
    store.currentPost = await getContent(`posts/${params.path}`);
    container.innerHTML = await renderContent(store.currentPost);
  },
  'pages/:path': async (params) => {
    checkAdmin();
    store.currentPost = await getContent(`pages/${params.path}`);
    container.innerHTML = await renderContent(store.currentPost);
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
    commitPost(title, content);
  },
  'admin/edit': async () => {
    checkAdmin();

  },
  'admin/delete': async () => {
    checkAdmin();
  },
  'admin/login/checkLogin': async () => {
    const password = document.getElementById('loginPasswordInput').value;
    store.authedAxios = authAxios(password);
    console.log("password", password);
    store.authedAxios.get('/user')
      .then((res) => {
        location.hash = 'admin'
      })
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
  '': async () => {
    checkAdmin();
    store.allPosts = await getAllPosts();
    container.innerHTML = await renderMain(store.allPosts);
  },
});
