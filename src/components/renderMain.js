import flattenPosts from "../utils/flattenPosts";

/**
 * render main page given posts
 * @param  {Object} posts
 * @return {html}       html to fill into container
 */
export default (posts) => {  //posts: {life:[], tech:[], science:[]}

  let postsList = flattenPosts(posts);
  const html = postsList
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

  return `<ul>${html.join('')}</ul>`;
}
