/**
 * generate Main page
 *
 * @return {String}
 */
import axios from "axios";
import config from "./config";
export default async function () {
  const content = await axios.get(`${config.apiBaseURL}/timqian/simple-cms/contents/_posts`)
    /*.then((res) => {console.log('hello: ', res.data);})*/
    .catch((res) => {console.log(res);})
  /*console.log(`${config.apiBaseURL}/timqian/simple-cms/contents/_posts`);*/
  console.log(content.data);
  return content.data;
}
