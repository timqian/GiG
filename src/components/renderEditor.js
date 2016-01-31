/**
 * render post editor(invoke only when the route is `post/***.md`, when currentPost state is not empty)
 * @return {[type]} [description]
 */
export default (content) => {

  return `
    <form>
      <fieldset>
        <textarea placeholder="markdown content" id="editedContent" style="height:65vh;min-height:30rem">${content}</textarea>
        <a href="#admin/finishEdit" class="button" >send</a>
      </fieldset>
    </form>
  `;
}
