import marked from "marked";

export default (title, mdContent) => {
  const md = `# ${title}\n\n${mdContent}`;
  return marked(md);
}
