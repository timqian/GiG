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


import Navigo from "navigo";

import store from "./store";
import checkAdmin from "./utils/checkAdmin";
import getAllPosts from "./utils/getAllPosts";
import renderMain from "./utils/renderMain";

const router = new Navigo(null, false);  // root = null, useHash=false

const container = document.getElementById('contentContainer');

router.on('/', async () => {
  checkAdmin();
  store.allPosts = await getAllPosts();
  container.innerHTML = await renderMain(store.allPosts);
});

router.on('/posts/:path', async (params) => {
  checkAdmin();
  store.currentPost = await getContent(`posts/${params.path}`);
  container.innerHTML = await renderContent(store.currentPost);
});

router.on('/pages/:path')
