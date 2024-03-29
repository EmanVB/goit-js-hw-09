import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateTimePicker = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const dayText = document.querySelector('span[data-days]');
const hourText = document.querySelector('span[data-hours]');
const minuteText = document.querySelector('span[data-minutes]');
const secondText = document.querySelector('span[data-seconds]');

const clk = document.querySelector('.timer');
clk.style.display = 'flex';
clk.style.gap = '30px';

const body = document.querySelector('body');
body.style.textTransform = 'uppercase';
body.style.fontWeight = 'bold';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const startDate = Date.now();

    if (selectedDate < startDate) {
      Notify.failure('Please choose a future date!');
      startButton.disabled = true;
      return;
    }

    startButton.disabled = false;
    let intervalId = null;

    startButton.addEventListener('click', startCountdown);

    function startCountdown() {
      startButton.disabled = true;
      dateTimePicker.disabled = true;

      intervalId = setInterval(() => {
        const currentDate = Date.now();

        if (selectedDate < currentDate) {
          clearInterval(intervalId);
          dateTimePicker.disabled = false;
          return;
        }
        const timeDifference = selectedDate - currentDate;
        const { days, hours, minutes, seconds } = convertMs(timeDifference);

        dayText.textContent = addLeadingZero(days);
        hourText.textContent = addLeadingZero(hours);
        minuteText.textContent = addLeadingZero(minutes);
        secondText.textContent = addLeadingZero(seconds);
      });
    }
  },
};

flatpickr(dateTimePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
