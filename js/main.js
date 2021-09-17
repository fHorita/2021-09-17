'use strict'

{
  const menuBtn = document.querySelector('#menu-btn > div');
  const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      menu.classList.toggle('open');
  });

  const submit = document.getElementById('submit');
  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    
  })

}