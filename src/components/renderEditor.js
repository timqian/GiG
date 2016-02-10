/**
 * render post editor(invoke only when the route is `post/***.md`, when currentPost state is not empty)
 * @return {[type]} [description]
 */
export default (content) => {

  return `
    <form>
      <fieldset>
        <textarea placeholder="markdown content" class="contentField" id="editedContent" required>${content}</textarea>
        <a href="#admin/finishEdit" class="button" >send</a>
      </fieldset>
    </form>
  `;
}
