/**
 * find sha for post from allPosts
 * @param  {String} postPath
 * @param  {String} allPosts
 * @return {String}          sha
 */
export default (postPath, allPosts) => {
  const intendPost = allPosts.find((post) => {
    if (post.path === postPath) {
      return true;
    }
  });
  /*console.log("intendPost", intendPost);*/
  return intendPost.sha;
};
