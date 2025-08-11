function onReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

onReady(() => {
  const numbers = document.querySelectorAll('.numbers li');
  const labels = document.querySelectorAll('.labels li');
  const details = document.querySelectorAll('.details > div');
  if (!numbers.length || !labels.length || !details.length) return;

  let index = 0;
  function highlight(i) {
    numbers.forEach((el, k) => { el.style.color = k === i ? '#c5a028' : '#897437'; });
    labels.forEach((el, k) => { el.style.color = k === i ? '#f8f7f4' : '#585858'; });
    details.forEach((el, k) => { el.classList.toggle('active', k === i); });
  }
  highlight(index);
  setInterval(() => { index = (index + 1) % numbers.length; highlight(index); }, 3000);
});