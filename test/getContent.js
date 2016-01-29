import getContent from "../src/utils/getContent";



(async () => {
  let content = await getContent('posts/2015-12-12-you are so good.md').catch((res) => {console.log("res", res);});
  console.log("getContent()", content);
})();
