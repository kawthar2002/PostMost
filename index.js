const hide = document.querySelector('.hide');
const show = document.querySelector('.show');
const passwordInput = document.querySelector('.password-input');
console.log(passwordInput);
hide.addEventListener('click', (event) => {
  event.preventDefault();
  show.classList.add('displayed');
  hide.classList.add('hidden');
  passwordInput.setAttribute('type', 'text');
});
show.addEventListener('click', (event) => {
  event.preventDefault();
  hide.classList.remove('hidden');
  show.classList.remove('displayed');
  passwordInput.setAttribute('type', 'password');
});

const inputs = document.querySelectorAll('.modal-from__input');
inputs.forEach((item) => {
  item.oninput = (event) => {
    const value = event.target?.value;
    const label = item.querySelector('.modal-form__label');
    label.style.display = !!value ? 'none' : 'inline';
  };
});
