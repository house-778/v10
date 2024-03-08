document.addEventListener('DOMContentLoaded', function () {
  const buttonCount = 500;
  for (let i = 1; i <= buttonCount; i++) {
      const style = document.createElement('style');
      style.textContent = `.game_button:nth-child(${i}) { animation: fadeInUp 1s ease-in-out ${0.1 * i}s forwards; }`;
      document.head.appendChild(style);
  }
  const buttons = document.querySelectorAll('.game_button');
  buttons.forEach((button, index) => {
      button.style.animationDelay = `${0.02 * (index + 1)}s`;
  });
});
