import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const button = document.querySelector('#open-modal');

window.reactFakeState = {
  modal: {
    isOpened: false,
  },
};

button.addEventListener('click', function (event) {
  window.reactFakeState.modal.isOpened = true;

  renderOrUpdateModal();
});

function renderOrUpdateModal () {
  ReactDOM.render(
    <App {...window.reactFakeState.modal} />,
    document.getElementById('root')
  );
}

renderOrUpdateModal();
