import store from "../store";

/**
 * check if location.hash == '#admin'
 */
export default () => {
  if (location.hash === '#admin' && store.authedAxios === undefined) {
    location.pathname = '/login';
  }
  return;
};
