/**
 * generate composer html
 *
 * @param  {Object} currentPost with propoties: filePath and fileContent
 * @return {String}             composer with content and title in it
 */
export default ({filePath='', fileContent=''}) => {
  // path example: posts/2016-01-31-example-name.md
  const title = filePath.slice(17, -3).replace(/-/g, ' ');
  return `
    <form>
      <fieldset>
        <input type="text" placeholder="Title  hint: don't use '-' in title)"
          id="titleField" value='${title}'>
        <textarea placeholder="markdown content" id="contentField">${fileContent}</textarea>
        <button onclick="location.hash = '#finishCompose'">send</button>
      </fieldset>
    </form>`;
}
