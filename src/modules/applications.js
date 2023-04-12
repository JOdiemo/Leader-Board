import { getfromURL } from './functions.js';

let adduser;
const playerList = async () => {
  const users = await getfromURL();
  users.result.sort((a, b) => a.score - b.score);
  const list = document.querySelector('.leaderboard');
  users.result.forEach((el) => {
    adduser = document.createElement('tr');
    adduser.innerHTML = '';
    adduser.innerHTML = `
      <td class="cols">🏆  ${el.user}: ${el.score}</td>
      `;
    list.appendChild(adduser);
  });
};

const clearInputs = () => {
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

const clearList = () => {
  const parent = document.querySelector('.leaderboard');
  parent.innerHTML = '';
};

export { playerList, clearInputs, clearList };