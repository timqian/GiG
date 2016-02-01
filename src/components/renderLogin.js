import { username } from "../config";

/**
 * generate composer html
 *
 * @param  {Object} currentPost with propoties: filePath and fileContent
 * @return {String}             composer with content and title in it
 */
export default () => {
  return `
    <form onsubmit="event.preventDefault();location.hash='#admin/login/checkLogin'">
      <fieldset>
        <label for="loginUsername">Github username</label>
        <input type="text" name="username" value="${username}" id="loginUsername" readonly>
        <label for="loginPasswordInput">Password</label>
        <input type="password"  name="password" id="loginPasswordInput" required>
        <button type="submit">Login</button>
      </fieldset>
    </form>
  `;
}
