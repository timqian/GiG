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
        <a href="#admin/login/checkLogin" class="button" >Login</a>
      </fieldset>
    </form>
  `;
}
