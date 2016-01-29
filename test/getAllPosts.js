import getAllPosts from "../src/utils/getAllPosts";



(async () => {
  let allPosts = await getAllPosts().catch((res) => {console.log("res", res);});
  console.log("getAllPosts()", allPosts);
})();
