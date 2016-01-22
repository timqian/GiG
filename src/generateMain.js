/**
 * generate Main page
 *
 * @return {String}
 */
import axios from "axios";
import config from "./config";
const { apiBaseURL, repo } = config;

export default async function () {
  const content = await axios.get(`${apiBaseURL}/${repo}/contents/_posts`);
  content.data.map((item) => {
    
  });
  return content.data;
}
