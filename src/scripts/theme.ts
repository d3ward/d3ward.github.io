export function initTheme(): () => void {
  const html = document.documentElement;
  const controllers =
    document.querySelectorAll<HTMLInputElement>(".theme-controller");
  if (controllers.length === 0) return () => {};

  // For checkboxes: unchecked = "light" (DaisyUI convention — the "off" state is the default theme)
  // For radio inputs: value is always the explicit theme name
  function resolveTheme(el: HTMLInputElement): string {
    return el.type === "checkbox" && !el.checked ? "light" : el.value;
  }

  function setAll(theme: string): void {
    controllers.forEach((el) => {
      el.checked = el.value === theme;
    });
  }

  const initial = localStorage.getItem("theme") ?? "light";
  html.setAttribute("data-theme", initial);
  setAll(initial);

  function handleChange(e: Event): void {
    const theme = resolveTheme(e.target as HTMLInputElement);
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setAll(theme);
  }

  controllers.forEach((el) => el.addEventListener("change", handleChange));
  return () =>
    controllers.forEach((el) => el.removeEventListener("change", handleChange));
}
