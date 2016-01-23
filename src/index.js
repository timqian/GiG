import milligram from '!style!css!milligram';
import generateMain from "./generateMain";
import generatePost from "./generatePost";

const container = document.getElementById('container');

const handleHashChange = async () => {
  console.log(location.hash);
  if (location.hash === '') {
    container.innerHTML = await generateMain();
  } else {
    const fileLocation = location.hash.slice(1);
    container.innerHTML = await generatePost(fileLocation);
  }
};

handleHashChange();
window.onhashchange = handleHashChange;
