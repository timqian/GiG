import milligram from '!style!css!milligram';
import axios from "axios";

const github = axios.create({
  baseURL: 'https://raw.githubusercontent.com',
  timeout: 2000,
  /*auth: {
    username: 'timqian',
    password: 'lily1985'
  }*/
})

github.get(`/timqian/star-history/master/README.md`)
  .then((res) => {console.log('res')})

const container = document.getElementById('container');

const handleHashChange = async function() {
  switch(location.hash) {
    case '':
      container.innerHTML = `<h1> Hi, I am Tim Qian</h1>`;
      break;
  }
};

handleHashChange();
window.onhashchange = handleHashChange;
