/**
 * generate composer html
 *
 * @param  {Object} currentPost with propoties: filePath and fileContent
 * @return {String}             composer with content and title in it
 */
export default (categories=[]) => {
  const options = categories.map(category => `<option value="${category}">${category}</option>`).concat('');
  return `
    <form>
      <fieldset>
      <div class="container">
        <div class="row">
          <input class="column" type="text" placeholder="Title" id="titleField">
          <select class="column column-25" name="category" id="categoriesSelector">
            ${options}
          </select>
        </div>
      </div>

        <textarea placeholder="markdown content" class="contentField" id="contentField"></textarea>
        <a href="#admin/finishCompose" class="button" >send</a>
      </fieldset>
    </form>
  `;
}
