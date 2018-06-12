export const scrollDown = (el, duration) => {
  const diff = el.scrollHeight - el.scrollTop;
  const scrollStep = duration ? (diff / (duration / 15)) : diff;
  const scrollInterval = setInterval(() => {
    if (
      el.scrollHeight !== el.clientHeight &&
      (el.scrollHeight - el.clientHeight) > el.scrollTop
    ) {
      el.scrollTop += scrollStep;
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
};

export function throttle(callback, limit) {
  let wait = false;
  return function wrapper() {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
}
