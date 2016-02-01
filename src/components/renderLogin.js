/**
 * generate composer html
 *
 * @param  {Object} currentPost with propoties: filePath and fileContent
 * @return {String}             composer with content and title in it
 */
export default () => {
  return `
    <form>
      <fieldset>
        <input type="password" id="loginPasswordInput">
        <button onclick="location.hash='#admin/login/checkLogin'">Login</button>
      </fieldset>
    </form>
  `;
}
