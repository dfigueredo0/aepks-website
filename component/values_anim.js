const numbers = document.querySelectorAll('.numbers li');
const labels = document.querySelectorAll('.labels li');
const details = document.querySelectorAll('.details div');

let index = 0;

function highlight(index) {
  numbers.forEach((el, i) => {
    el.style.color = i === index ? '#c5a028' : '#897437';
  });
  labels.forEach((el, i) => {
    el.style.color = i === index ? '#f8f7f4' : '#585858';
  });
  details.forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

highlight(index);

setInterval(() => {
  index = (index + 1) % numbers.length;
  highlight(index);
}, 3000);
