/**
 * generate Main page
 *
 * @return {String}
 */
import axios from "axios";
import config from "./config";
const { apiBaseURL, repo } = config;

export default async function () {
  const content = await axios.get(`${apiBaseURL}/${repo}/contents/posts`)
    .catch((res) => {console.log(res);});

  const posts = content.data.sort((a, b) => {
    return new Date(b.name.slice(0, 10)) - new Date(a.name.slice(0, 10));
  })
  .map((item) => {
    const title = item.name.slice(11, -3).replace(/-/g, ' ');
    const date = item.name.slice(0, 10)
    const path = item.path;
    return `<li><a href='#${path}'>${title}</a><small>${date}</small></li>`;
  });
  console.log(posts);
  return posts;
}
