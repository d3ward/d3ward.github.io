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

export function initAOS() {
  // Get and observe all the items with _aos class
  const items = document.querySelectorAll('[class*="_aos"]');

  // Only use IntersectionObserver if supported and _aos elements exist
  if (!IntersectionObserver || !items.length) {
    return;
  }

  // When the element is visible on the viewport,
  // add the _aos-done class so it creates the animation
  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      // If the element is visible, add the _aos-done class
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("_aos-done")
      ) {
        entry.target.classList.add("_aos-done");
      } else if (
        !entry.isIntersecting &&
        entry.target.classList.contains("_aos-done")
      ) {
        // Else the element does reverse animation only if it was already done
        entry.target.classList.remove("_aos-done");
      }
    });
  };

  // Create the observer
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: "0px", // No margin - trigger immediately when entering viewport
  });

  // Add each _aos element to the observer
  items.forEach((item) => {
    observer.observe(item);
  });
}

// Note: Auto-initialization is handled in Layout.astro
// This allows the script to be loaded as a module in Astro
