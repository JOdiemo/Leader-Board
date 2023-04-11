const data = [
  {
    name: 'first',
    score: '1',
  },
  {
    name: 'second',
    score: '3',
  },
  {
    name: 'bye',
    score: '10',
  },
  {
    name: 'winner',
    score: '4',
  },
  {
    name: 'oh yes',
    score: '2',
  },
];

const displayList = () => {
  const sortArray = data.sort((a, b) => a.score - b.score);
  const leaderboard = document.querySelector('.leaderboard');
  sortArray.forEach((el) => {
    const addUser = document.createElement('tr');
    addUser.innerHTML = `
      <tr class="cols">${el.name} :${el.score}</tr>
    `;
    leaderboard.appendChild(addUser);
  });
};

export default displayList;