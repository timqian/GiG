/**
 * render categories page given posts
 * @param  {Object} posts
 * @return {html}       html to fill into container
 */
export default (allPosts) => {  //posts: {life:[], tech:[], science:[]}
  const categores = Object.keys(allPosts).map(key => {
    const oneCatego = renderLinks( allPosts[key] );
    return `<h4 class="categoryHead">${key}</h4>${oneCatego}`;
  });
  return categores.join('');
}

function renderLinks(posts) {
  const links = posts
    .sort((a, b) => {             // 如果返回值大于0，则 a 在前(日期最近的放上面)
      return new Date(b.date) - new Date(a.date);
    })
    .map((post) => {
      /*const href = admin ? `admin/${post.path}` : post.path;*/
      return `
        <li>
          <a href="#${post.path}" ><b><big>${post.title}</big></b>&nbsp
          <small>${post.date}</small></a>
        </li>
      `;
    });

  return `<ul>${links.join('')}</ul>`;
}
