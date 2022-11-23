const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let TimerX;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl 1669237200000
const createTimerAnimator = () => {
  return (seconds) => {
    let endTimer = new Date().getTime() + ((seconds + 2) * 1000);
    TimerX = setInterval(function() {
      let startTimer = new Date().getTime(); 
      let difference = endTimer - startTimer;

      let hour = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor(difference / 60000);
      let second = Math.floor((difference % 60000)/1000);

      document.getElementById('timer').innerHTML = hour + ':' + minutes + ':' + second;

      if (difference < 0) {
        clearInterval(TimerX);
        document.getElementById('timer').innerHTML = 0 + ':' + 0 + ':' + 0;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', changeHandler = e => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const value = e.value;
  e.value = value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  clearInterval(TimerX);


  animateTimer(seconds);

  inputEl.value = '';
});


