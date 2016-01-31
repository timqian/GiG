import axios from "axios";
import { username } from "../config";

/**
 * create an instance of axios with auth
 *
 * @param  {String} password for github account
 * @return {Object}          axios instance
 */
const authAxios = function(password) {
  return axios.create({
    baseURL: 'https://api.github.com',
    auth: { username, password, }
  });
}

export default authAxios;
