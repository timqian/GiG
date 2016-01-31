/**
 * store state of the app
 */
export default {
  admin: false,
  authedAxios: undefined,  // will be create when user login
  allPosts: [],            // all posts info on github [{title  date   path  sha}]
  currentPost: {
    title: undefined,
    path: undefined,
    content: undefined,
    sha: undefined,
  },
};
