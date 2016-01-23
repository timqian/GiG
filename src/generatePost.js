/**
 * Generage page from markdown
 * and change default behaiver of <a> tag
 *
 * @param {String} fileLocation location of the file in git repo
 * @return {String} html
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
