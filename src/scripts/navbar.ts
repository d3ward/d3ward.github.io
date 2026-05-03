export function initScrollHeader(): () => void {
  const header = document.getElementById("main-header");

  function handleScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.pageYOffset > 50);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}

export function initDrawer(): () => void {
  const toggle = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer-card");
  const iconSwap = document.getElementById("menu-icon-swap");

  function open() {
    drawer?.setAttribute("aria-hidden", "false");
    drawer?.removeAttribute("inert");
    toggle?.setAttribute("aria-expanded", "true");
    iconSwap?.classList.add("swap-active");
  }

  function close() {
    drawer?.setAttribute("aria-hidden", "true");
    drawer?.setAttribute("inert", "");
    toggle?.setAttribute("aria-expanded", "false");
    iconSwap?.classList.remove("swap-active");
  }

  function handleToggleClick() {
    drawer?.getAttribute("aria-hidden") === "true" ? open() : close();
  }

  function handleOutsideClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      drawer &&
      toggle &&
      !drawer.contains(target) &&
      !toggle.contains(target)
    ) {
      close();
    }
  }

  toggle?.addEventListener("click", handleToggleClick);
  document.addEventListener("click", handleOutsideClick);

  return () => {
    toggle?.removeEventListener("click", handleToggleClick);
    document.removeEventListener("click", handleOutsideClick);
    close();
  };
}

export function initNavbar(): () => void {
  const cleanupScroll = initScrollHeader();
  const cleanupDrawer = initDrawer();
  return () => {
    cleanupScroll();
    cleanupDrawer();
  };
}
