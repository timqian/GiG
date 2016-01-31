import { repo } from "../config";
import store from "../store";

/**
 * commit new post to github
 * api doc: https://developer.github.com/v3/repos/contents/#create-a-file
 * PUT /repos/:owner/:repo/contents/:path
 *
 * @param  {String} title
 * @param  {String} content
 * @return {Boolean}         return success or not
 */
export default async (title, content) => {

  // generate dateString
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateString = `${year}-${month<10 ? '0'+month : month}-${day}`;
  /*console.log("dateString", dateString);*/

  // generate fileName and content
  const fileName = `${dateString}-${title}.md`;
  content = `# ${title}\n\n${content}`;

  const putUrl = `/repos/${repo}/contents/posts/${fileName}`;
  const res = await store.authedAxios.put(putUrl, {
    message: 'commited from simple-cms',
    content: window.btoa(unescape(encodeURIComponent(content))),  //according to http://stackoverflow.com/questions/23223718/failed-to-execute-btoa-on-window-the-string-to-be-encoded-contains-characte
  }).catch((res) => {
    alert(res);
  });
  location.hash = '#';
};
