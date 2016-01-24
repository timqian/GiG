import { repo } from "./config";

/**
 * commit new post to github
 * api doc: https://developer.github.com/v3/repos/contents/#create-a-file
 * PUT /repos/:owner/:repo/contents/:path
 *
 * @param  {String} title
 * @param  {String} content
 * @return {Boolean}         return success or not
 */
export default async (authedAxios, title, content) => {

  // generate dateString
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateString = `${year}-${month<10 ? '0'+month : month}-${day}`;
  console.log("dateString", dateString);

  // generate fileName
  const fileName = `${dateString}-${title.replace(/\s/g, '-')}.md`;
  console.log("fileName", fileName);

  const res = await authedAxios.put(`/repos/${repo}/contents/posts/${fileName}`, {
    message: 'commited from simple-cms',
    content: window.btoa(content),
  }).catch((res) => {
    console.log("err res:", res);
  });
  console.log("res", res);
};
