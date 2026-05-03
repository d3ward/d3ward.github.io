export function withLifecycle(init: () => (() => void) | void): void {
  let cleanup: (() => void) | null = null;

  function run() {
    cleanup?.();
    cleanup = init() ?? null;
  }

  run();
  document.addEventListener("astro:page-load", run);
  document.addEventListener("astro:before-preparation", () => {
    cleanup?.();
    cleanup = null;
  });
}
