/**
 * AOS (Animate On Scroll) - Lightweight scroll animation system
 *
 * Usage:
 * Add classes to elements: _aos-left, _aos-right, _aos-top, _aos-bottom
 * When elements enter viewport, _aos-done class is added for animation
 *
 * Example:
 * <div class="_aos-left">Content</div>
 */

export function initAOS(): () => void {
  const items = document.querySelectorAll('[class*="_aos"]');

  if (!IntersectionObserver || !items.length) {
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("_aos-done")) {
          entry.target.classList.add("_aos-done");
        } else if (!entry.isIntersecting && entry.target.classList.contains("_aos-done")) {
          entry.target.classList.remove("_aos-done");
        }
      });
    },
    { root: null, threshold: 0.1, rootMargin: "0px" },
  );

  items.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
}
