export interface FilterMeta {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
}

// Private const-tuples for deriving union types
const _projectFilters = [
  { id: "all",         label: "All",           icon: "tabler:layout-grid"    },
  { id: "contributor", label: "Contributions", icon: "tabler:book-upload"    },
  { id: "kiwi",        label: "Kiwi Browser",  icon: "local:kiwi"            },
  { id: "extension",   label: "Extension",     icon: "tabler:puzzle"         },
  { id: "game",        label: "Games",         icon: "tabler:device-gamepad" },
  { id: "script",      label: "Userscript",    icon: "tabler:script"         },
  { id: "rmskin",      label: "Rainmeter",     icon: "tabler:droplet"        },
  { id: "website",     label: "Web Projects",  icon: "tabler:browser"        },
] as const satisfies FilterMeta[];

const _esaeFilters = [
  { id: "all",         label: "All",         icon: "tabler:layout-grid"         },
  { id: "app",         label: "Apps",        icon: "tabler:apps"                },
  { id: "extension",   label: "Extensions",  icon: "tabler:puzzle"              },
  { id: "service",     label: "Services",    icon: "tabler:cloud"               },
  { id: "desktop",     label: "Desktop",     icon: "tabler:device-desktop"      },
  { id: "mobile",      label: "Mobile",      icon: "tabler:device-mobile"       },
  { id: "open-source", label: "Open Source", icon: "tabler:brand-open-source"   },
] as const satisfies FilterMeta[];

// Exported as mutable FilterMeta[] so components can pass them directly to Filter.astro
export const PROJECT_FILTERS: FilterMeta[] = [..._projectFilters];
export const ESAE_FILTERS: FilterMeta[] = [..._esaeFilters];

// Valid IDs excluding "all" — use these with assertValidGroups
export const PROJECT_FILTER_IDS: readonly string[] = _projectFilters
  .filter((f) => f.id !== "all")
  .map((f) => f.id);

export const ESAE_FILTER_IDS: readonly string[] = _esaeFilters
  .filter((f) => f.id !== "all")
  .map((f) => f.id);

// Union types derived from the const tuples — adding an entry above widens these automatically
export type ProjectGroupId = Exclude<(typeof _projectFilters)[number]["id"], "all">;
export type EsaeGroupId = Exclude<(typeof _esaeFilters)[number]["id"], "all">;

export function assertValidGroups(
  groups: string | string[],
  validIds: readonly string[],
  itemId: string,
): void {
  const parsed = Array.isArray(groups)
    ? groups
    : groups.split(/[\s,]+/).filter(Boolean);
  for (const g of parsed) {
    if (!validIds.includes(g)) {
      throw new Error(
        `[filters] "${g}" in "${itemId}" is not a known filter id.\n` +
          `  Valid ids: ${validIds.join(", ")}`,
      );
    }
  }
}
