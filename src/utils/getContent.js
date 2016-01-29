import {contentBaseURL, repo} from "../config";
import axios from "axios";

/**
 * get raw content from github
 *
 * @param  {String} filePath content path
 * @return {String}          raw content of the file
 */
export default async (filePath) => {
  const url = `${contentBaseURL}/${repo}/gh-pages/${filePath}`;
  const res = await axios.get(url)
    .catch((res) => {console.log(res);});
  const content = res.data;
  return content;
};
