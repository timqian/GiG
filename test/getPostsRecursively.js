import getPostsRecursively from "../src/utils/getPostsRecursively";



(async () => {
  let allPosts = await getPostsRecursively().catch((res) => {console.log("res", res);});
  console.log("getAllPosts()", allPosts);
})();
