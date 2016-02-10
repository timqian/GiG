/**
 * posts object to array
 * @param  {Object} storePosts original posts Object
 * @return {Array}             flattened posts
 */
export default (storePosts) => {
  let posts = [];
  Object.keys(storePosts).forEach(key => {
    posts = posts.concat(storePosts[key]);
  });
  return posts;
}
