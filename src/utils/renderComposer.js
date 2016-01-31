/**
 * generate composer html
 *
 * @param  {Object} currentPost with propoties: filePath and fileContent
 * @return {String}             composer with content and title in it
 */
export default (filePath='', fileContent='') => {
  // path example: posts/2016-01-31-example-name.md
  const title = filePath.slice(17, -3).replace(/-/g, ' ');

  return `
    <form>
      <fieldset>
        <input type="text" placeholder="Title" id="titleField" value='${title}'>
        <textarea placeholder="markdown content" id="contentField" style="height:65vh;min-height:30rem">${fileContent}</textarea>
        <a href="#admin/finishCompose" class="button" >send</a>
      </fieldset>
    </form>
  `;
}


function onCommit () {
  console.log(document.getElementById('container'), document.getElementById('titleField'), document.getElementById('contentField'));
  const title = document.getElementById('titleField').value;
  const content = document.getElementById('contentField').value;
  console.log('title', title);
  console.log('content', content);
  if (currentPost.filePath) {
    commitEdit(authedAxios, currentPost.filePath, content);
  } else {
    commitNew(authedAxios, title, content);
  };
}
