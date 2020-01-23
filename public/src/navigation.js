import routes from './routes.js';
console.log('routes: ', routes);

let path = '/';
const keys = Object.keys(routes);

const render = newPath => {
  const page = routes[newPath];
  console.log('new path ' + newPath)
  const container = document.querySelector('#content');
  path = newPath;
  
  container.innerHTML = page.getElements();
  if (page.afterRender) page.afterRender();
};
export default () => {
  render(path);
};
const toggleButton = (id, query) => {
  const button = document.querySelector(id);

  if (query) button.disabled = true;
  else button.disabled = false;
};

export const getNextPage = () => {
  $("#navigation").show();
  const index = keys.findIndex(key => key === path);
  console.log("next index " + index);
  if (routes[keys[index]].onNext) routes[keys[index]].onNext();

  console.log("this is the current key" + keys[index]);
  console.log("these are the keyes " + keys);
  console.log('NEXT routes[keys[index]]', routes[keys[index]]);
  
  toggleButton('#nextFct', index + 1 === keys.length - 1);
  toggleButton('#backFct', false);
  render(keys[index + 1]);
};
export const getPreviousPage = () => {
  const index = keys.findIndex(key => key === path);
  console.log("back index " + index);
 
  toggleButton('#backFct', index - 1 === 0);
  toggleButton('#nextFct', false);
  
  render(keys[index - 1]);
};

