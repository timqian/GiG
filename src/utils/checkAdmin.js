import store from "../store";

/**
 * if logged in, show compose, edit, delete link according to hash
 */
export default () => {
  if (store.authedAxios === undefined) {     // means user has not logged in
    document.getElementById('composeLink').style.display = 'none';
    document.getElementById('editLink').style.display = 'none';
    document.getElementById('deleteLink').style.display = 'none';

    if ( location.hash.includes('admin') ) {
      location.hash = 'admin/login';
    }
  } else {                                   // means user logged in
    document.getElementById('composeLink').style.display = '';

    if ( location.hash.includes('posts') ) {
      document.getElementById('editLink').style.display = '';
      document.getElementById('deleteLink').style.display = '';
    } else {
      document.getElementById('editLink').style.display = 'none';
      document.getElementById('deleteLink').style.display = 'none';
    }
  }
};
