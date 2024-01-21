import _ from 'lodash';
const form = document.querySelector('.feedback-form');
let formState = {
  email: '',
  message: '',
};
form.addEventListener(
  'input',
  _.throttle(e => {
    formState.email =
      e.target.name === 'email' ? e.target.value : formState.email;
    formState.message =
      e.target.name === 'message' ? e.target.value : formState.message;
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500)
);
window.addEventListener('load', () => {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedState) {
    document.querySelector('input[name="email"]').value = savedState.email;
    document.querySelector('textarea[name="message"]').value =
      savedState.message;
  }
});
form.addEventListener('submit', event => {
  localStorage.removeItem('feedback-form-state');
  console.log(formState);
  event.preventDefault();
});
