import ajax from './ajax.js';

export function postPoll(route, answers) {
  return ajax('POST', route, JSON.stringify(answers));
}
export function getPoll(route) {
  console.log("poll route " + route);
  //return ajax('GET', route);
}
