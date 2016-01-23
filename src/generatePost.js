/**
 * generage post html
 *
 * @param {String} fileLocation location of the file in git repo
 * @return {String}
 */

import axios from "axios";
import { contentBaseURL, repo } from "./config";
import marked from "marked";

export default async (location) => {
  const url = `${contentBaseURL}/${repo}/gh-pages/${location}`;
  const md = await axios.get(url)
    .catch((res) => {console.log(res);})


  return marked(md.data);
};
