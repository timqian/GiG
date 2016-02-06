import axios from "axios";
import { apiBaseURL, repo } from "../config";

const url = `${apiBaseURL}/repos/${repo}/contents/posts`;
let posts = [];

/**
 * Retrive all the files under the path: posts
 *
 * @return {Object}
 */
async function getPostsRecursively() {
  const res = await axios.get(url).catch((res) => {alert(res);});

  res.data.forEach((item) => {
    /*console.log("item", item);*/
    if (item.type === 'dir') {
      await getPostsRecursively();
    } else {
      posts.push({
        title: item.name.slice(11, -3),
        date:item.name.slice(0, 10),
        path: item.path,
        sha: item.sha
      });
    }
  });
    /*console.log("posts", posts);*/
  return posts;
}

export default getPostsRecursively;
