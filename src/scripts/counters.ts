export function initCounters(): () => void {
  const counters = document.querySelectorAll<HTMLElement>("[data-count-target]");
  if (!counters.length) return () => {};

  const timers: ReturnType<typeof setInterval>[] = [];

  counters.forEach((el) => {
    const target = parseInt(el.getAttribute("data-count-target") || "0");
    if (!target) return;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      el.textContent = current.toString();
      if (current === target) clearInterval(timer);
    }, 2000 / target);
    timers.push(timer);
  });

  return () => timers.forEach(clearInterval);
}
