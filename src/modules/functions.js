const userName = document.querySelector('.name');
const userScore = document.querySelector('.score');
const myURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MLSDnVmlT7WTDEzHpL5v/scores/';

const savetoURL = async () => {
  const response = await fetch(myURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user: userName.value,
      score: userScore.value,
    }),
  });
  const userlist = await response.json();
  return userlist;
};

const getfromURL = async () => {
  const response = await fetch(myURL);
  const userlist = await response.json();
  return userlist;
};

export { savetoURL, getfromURL };