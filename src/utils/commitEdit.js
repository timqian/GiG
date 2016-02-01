import { repo } from "../config";
import store from "../store";

/**
 * commit edited post to github
 * api doc: https://developer.github.com/v3/repos/contents/#update-a-file
 *
 *
 * @param  {String} content
 * @return {Boolean}         return success or not
 */
export default async (content) => {

  const putUrl = `/repos/${repo}/contents/${store.currentPost.path}`;
  const res = await store.authedAxios.put(putUrl, {
    message: 'commited from simple-cms',
    content: window.btoa(unescape(encodeURIComponent(content))),  //according to http://stackoverflow.com/questions/23223718/failed-to-execute-btoa-on-window-the-string-to-be-encoded-contains-characte
    sha: store.currentPost.sha,
  }).catch((res) => {
    console.log("res", res);
    alert(res);
  });
  alert('commit success');
  location.hash = '#';
};
