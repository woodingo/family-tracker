const handler = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const screenWatcher = () => {
  handler();
  window.addEventListener('resize', handler);
  window.addEventListener('orientationchange', handler);
};

export default screenWatcher;
