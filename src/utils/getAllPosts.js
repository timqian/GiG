import axios from "axios";
import { apiBaseURL, repo } from "../config";

/**
 * retive all the files under the path: posts
 *
 * @return {Object}
 */
export default async () => {
  const url = `${apiBaseURL}/repos/${repo}/contents/posts`;
  const res = await axios.get(url).catch((res) => {alert(res);});

  console.log("res.data", res.data);
  const posts = res.data
    .map((item) => {
      /*console.log("item", item);*/
      return {
        title: item.name.slice(11, -3),
        date:item.name.slice(0, 10),
        path: item.path,
        sha: item.sha
      };
    });
    /*console.log("posts", posts);*/
  return posts;
}
