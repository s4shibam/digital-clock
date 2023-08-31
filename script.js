setInterval(() => {
  const clockDisplay = document.querySelector('#clock');
  const periodDisplay = document.querySelector('#period');
  const dateDisplay = document.querySelector('#date');
  const dayDisplay = document.querySelector('#day');
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let period = 'AM';

  if (hour > 12) {
    period = 'PM';
    hour -= 12;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  clockDisplay.textContent = `${hour}:${minute}:${second}`;
  periodDisplay.textContent = period;

  // Display today's date and day
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  dateDisplay.textContent = `${month} ${day}, ${year}`;
  dayDisplay.textContent = dayOfWeek;
}, 1000);

// Developed with love by Shibam Saha
