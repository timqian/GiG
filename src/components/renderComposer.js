/**
 * generate composer html
 *
 * @param  {Object} currentPost with propoties: filePath and fileContent
 * @return {String}             composer with content and title in it
 */
export default (categories=[]) => {
  return `
    <form>
      <fieldset>
      <div class="container">
        <div class="row">
          <input class="column" type="text" placeholder="Title" id="titleField">
          <select class="column column-25">
            <option value="volvo">Volvo</option>
            <option value="saab" selected>Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>

        <textarea placeholder="markdown content" id="contentField" style="height:65vh;min-height:30rem"></textarea>
        <a href="#admin/finishCompose" class="button" >send</a>
      </fieldset>
    </form>
  `;
}
