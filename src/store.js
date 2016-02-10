/**
 * store state of the app
 */
export default {
  authedAxios: undefined,  // will be created when user login
  allPosts: [],            // [{title:**,  date:**,   path:**,  sha:**,}]  // {life:[], tech:[], science:[]}
  currentPost: {
    title: undefined,
    path: undefined,
    content: undefined,
    sha: undefined,        // will be assigned before commit
  },
};
