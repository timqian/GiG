import milligram from '!style!css!milligram';

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
