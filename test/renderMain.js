import getAllPosts from "../src/utils/getAllPosts";
import renderMain from "../src/utils/renderMain";


(async () => {
  const allPosts = await getAllPosts().catch((res) => {console.log("res", res);});
  const html = renderMain(allPosts);
  console.log("getAllPosts()", allPosts);
  console.log("renderMain()", html);
})();
