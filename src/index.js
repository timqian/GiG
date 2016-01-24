/**
 * Do different things for different hash
 *
 */

import normalize from "!style!css!normalize.css";
import milligram from '!style!css!milligram';
import generateMain from "./generateMain";
import authAxios from "./authAxios";
import generateComposer from "./generateComposer";
import getContent from "./getContent";
import marked from "marked";
import commitNew from "./commitNew";
import commitEdit from "./commitEdit";

let authedAxios;   // to store the authed axios instance

let currentPost = {
  filePath: '',
  fileContent: '',
}

const container = document.getElementById('contentContainer');

const handleHashChange = async () => {
  console.log(location.hash);

  // insert different html into the container
  // according to location hash
  switch (location.hash.split('/')[0]) {

    case '':              // main page
      container.innerHTML = await generateMain();
      document.getElementById('editLink').style.display = 'none';
      document.getElementById('composeLink').style.display = ''; // show compose link
      break;

    case '#posts':
    case '#pages':                              // post or page
      const filePath = location.hash.slice(1);
      const md = await getContent(filePath);
      currentPost.filePath = filePath;
      currentPost.fileContent = md;             // set currentPost for #edit to use
      container.innerHTML = marked(md);
      document.getElementById('editLink').style.display = '';
      document.getElementById('composeLink').style.display = 'none'; // show edit link
      break;

    case '#compose':
      if (authedAxios) {     // to see if authed Axios is created
        currentPost = {};
        container.innerHTML = generateComposer(currentPost);
      } else {
        location.hash = '#login';
      }
      break;

    case '#edit':
      if (authedAxios) {     // to see if authed Axios is created
        container.innerHTML = generateComposer(currentPost);
      } else {
        location.hash = '#login';
      }
      break;

    case '#login':        // admin page
      // create an axios instance with auth, and make compose visible
      const password = window.prompt('Enter your github password');
      authedAxios = authAxios(password);
      authedAxios.get('/user')
        .then((res) => {
          window.history.go(-1);
        })
        .catch((res) => {
          alert('wrong pass');
          authedAxios = undefined;
        });
      break;


    case '#finishCompose':
      console.log(document.getElementById('titleField'), document.getElementById('contentField'));
      const title = document.getElementById('titleField').value;
      const content = document.getElementById('contentField').value;
      console.log("title", title);
      console.log("content", content);
      if (currentPost.filePath) {
        commitEdit(authedAxios, currentPost.filePath, content);
      } else {
        commitNew(authedAxios, title, content);
      };
      break;

    default:
      alert('sorry, but there is no such hash')
  };
};

handleHashChange();
window.onhashchange = handleHashChange;
