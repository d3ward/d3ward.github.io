import Shuffle from "shufflejs";

let instances: Shuffle[] = [];

export function initEngine(): void {
  instances.forEach((i) => i.destroy());
  instances = [];

  document.querySelectorAll<HTMLElement>("[data-filter-grid]").forEach((grid) => {
    if (grid.querySelectorAll("[data-groups], [data-filters]").length === 0) return;
    instances.push(
      new Shuffle(grid, {
        itemSelector: "[data-groups], [data-filters]",
        delimiter: ",",
        speed: 250,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      }),
    );
  });
}

export function destroyEngine(): void {
  instances.forEach((i) => i.destroy());
  instances = [];
}

export function applyFilter(value: string): void {
  instances.forEach((instance) => {
    if (value === "all") {
      instance.filter(Shuffle.ALL_ITEMS);
    } else {
      instance.filter((el: Element) => {
        const groups = el.getAttribute("data-groups") ?? "";
        const filters = el.getAttribute("data-filters") ?? "";
        return (
          groups.split(/[\s,]+/).includes(value) ||
          filters.split(/[\s,]+/).includes(value)
        );
      });
    }
  });
}
