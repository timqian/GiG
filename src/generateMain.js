/**
 * generate Main page
 *
 * @return {String}
 */
import axios from "axios";
import config from "./config";
const { apiBaseURL, repo } = config;

export default async function () {
  console.log(`${apiBaseURL}/${repo}/contents/posts`);
  const content = await axios.get(`${apiBaseURL}/${repo}/contents/posts`)
    .catch((res) => {console.log(res);});
  /*const posts = content.data.map((item) => {
    const title = item.name.slice(11, -4).replace(/-/g, ' ');
    const date = new Date(item.name.slice(0, 10));
    const path = item.path;
    return `<li><a href='#${path}'>${title}</a><small>${date}</small></li>`;
  });*/
  console.log(content);
  /*console.log(posts);*/
  /*return posts;*/
}
