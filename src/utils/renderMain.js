/**
 * render main page giben posts
 * @param  {Object} posts
 * @return {html}       html to fill into container
 */
export default (posts) => {
  const html = posts
    .sort((a, b) => {             // 如果返回值大于0，则 a 在前(日期最近的放上面)
      return new Date(b.date) - new Date(a.date);
    })
    .map((post) => {
      return `
        <li>
          <a href="/${post.path}"><b><big>${post.title}</big></b></a> &nbsp
          <small>${post.date}</small>
        </li>
      `;
    });

  return `<ul>${html.join('')}</ul>`;
}
