const handler = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const screenWatcher = () => {
  handler();
  window.addEventListener('resize', handler);
  window.addEventListener('orientationchange', handler);
};
