import './styles.css';
import { playerList, clearInputs, clearList } from './modules/applications.js';
import { savetoURL, getfromURL } from './modules/functions.js';

const submitButton = document.getElementById('submitting');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearList();
  savetoURL();
  getfromURL();
  clearInputs();
  playerList();
});

document.addEventListener('DOMContentLoaded', playerList);
