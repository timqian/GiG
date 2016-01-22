/**
 * generate Main page
 *
 * @return {String}
 */
import axios from "axios";
import { apiBaseURL } from "./config";
export default async function () {
  const content = await axios.get(`${apiBaseURL}/timqian/simple-cms/_posts`)
  return content
}
