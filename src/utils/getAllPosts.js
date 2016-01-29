import axios from "axios";
import { apiBaseURL, repo } from "../config";

/**
 * retive all the posts on github
 *
 * @return {Object}
 */
export default async () => {
  const url = `${apiBaseURL}/repos/${repo}/contents/posts`;
  const content = await axios.get(url).catch((res) => {console.log(res);});

  // name example: 2016-01-31 example name.md
  const posts = content.data
    .map((item) => {
      /*console.log("item", item);*/
      return {
        title: item.name.slice(11, -3),
        date:item.name.slice(0, 10),
        path: item.path,
      };
    });

  return posts;
}
