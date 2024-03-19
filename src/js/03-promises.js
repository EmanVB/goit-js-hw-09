import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

form.addEventListener('submit', generatePromise);

function generatePromise(e) {
  e.preventDefault();
  let delayValue = Number(delay.value);

  for (let posValue = 1; posValue <= amount.value; posValue++) {
    createPromise(posValue, delayValue)
      .then(({ promiseAlert }) => {
        Notify.success(promiseAlert);
      })
      .catch(({ promiseAlert }) => {
        Notify.failure(promiseAlert);
      });
    delayValue += Number(step.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({
          promiseAlert: `Fullfilled promise ${position} in ${delay}ms.`,
        });
      } else {
        // Reject
        reject({
          promiseAlert: `Rejected promise ${position} in ${delay}ms.`,
        });
      }
    }, delay);
  });
}
