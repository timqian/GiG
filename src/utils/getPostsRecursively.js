import axios from "axios";
import { apiBaseURL, repo } from "../config";

/**
 * Retrive all the files under the path: posts
 *
 * @return {Object}  structure: {life:[posts], tech:[], science:[], ...}
 */
async function getPostsRecursively() {
  const resFirstObject = await axios.get(`${apiBaseURL}/repos/${repo}/contents/posts`).catch(res => {alert(res);});
  const dirUrls = resFirstObject.data.map(item => item.url);
  const categories = resFirstObject.data.map(item => item.name);;
  const urlPromises = dirUrls.map(url => axios.get(url));
  const resSecondArray = await Promise.all(urlPromises).catch(err => {console.log('Failed: ', err);});
  const posts =
  /*resSecondArray.map(res => {
    return res.data.map(item => {
      return {Ç
        title: item.name.slice(11, -3),
        date:item.name.slice(0, 10),
        path: item.path,
        sha: item.sha
      };
    });
  });*/
  resSecondArray.reduce((p, c, i) => {
    console.log("category", categories);
    p[categories[i]] = c.data.map(item => {
      return {
        title: item.name.slice(11, -3),
        date:item.name.slice(0, 10),
        path: item.path,
        sha: item.sha
      };
    });
    return p;
  }, {});
  /*console.log("posts", posts);*/
  return posts;

}

export default getPostsRecursively;
