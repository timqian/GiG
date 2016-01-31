import marked from "marked";

/**
 * transform markdown to html
 * @param  {string} md markdown
 * @return {string}    html
 */
export default (md) => {
  return marked(md)
}
