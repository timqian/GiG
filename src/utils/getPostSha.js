import flattenPosts from "./flattenPosts";

/**
 * find sha for post from storePosts
 * @param  {String} postPath
 * @param  {Object} storePosts
 * @return {String}          sha
 */
export default (postPath, storePosts) => {
  const flattenedPosts = flattenPosts(storePosts);
  const intendPost = flattenedPosts.find((post) => {
    if (post.path === postPath) {
      return true;
    }
  });
  return intendPost.sha;
};
