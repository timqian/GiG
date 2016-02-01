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
        <input type="password" id="loginPasswordInput" name="password">
        <button type="button" onclick="location.hash='#admin/login/checkLogin'">Login</button>
      </fieldset>
    </form>
  `;
}
