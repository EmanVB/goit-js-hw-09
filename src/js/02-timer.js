import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateTimePicker = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onclose(selectedDates) {
    const selectedDate = selectedDates[0];
    const startDate = Date.now();

    if (selectedDate < startDate) {
      Notify.failure('Please choose a future date!');
    }
  },
};

flatpickr(dateTimePicker, options);
