import axios from "axios";
import { apiBaseURL, repo } from "./config";

/**
 * generate Main page by accessing post folder on github repo
 *
 * @return {String}
 */
export default async () => {
  const url = `${apiBaseURL}/repos/${repo}/contents/posts`;
  const content = await axios.get(url)
    .catch((res) => {console.log(res);});

  // name example: 2016-01-31-example-name.md
  const posts = content.data
    .sort((a, b) => {             // 日期最近的放上面
      return new Date(b.name.slice(0, 10)) - new Date(a.name.slice(0, 10));
    })
    .map((item) => {
      const title = item.name.slice(11, -3).replace(/-/g, ' ');
      const date = item.name.slice(0, 10)
      const path = item.path;
      return `<li>
                <a href='#${path}'><b>${title}</b></a> &nbsp
                <small>${date}</small>
              </li>`;
    });

  return `<ul>${posts.join('')}</ul>`;
}
