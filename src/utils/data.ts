import type { Project, GitHubStats, GitHubRepo, EsaeItem } from "@/types";
import { assertValidGroups, PROJECT_FILTER_IDS, ESAE_FILTER_IDS } from "@data/filters";
import projectsRaw    from "@data/projects.json";
import githubRaw      from "@data/github-stats.json";
import appsRaw        from "@data/apps.json";
import servicesRaw    from "@data/services.json";
import extensionsRaw  from "@data/extensions.json";

// ── ESAE ──────────────────────────────────────────────────────────────────────

export function getEsaeItems(): EsaeItem[] {
  const apps: EsaeItem[] = (appsRaw.apps as any[]).map((app) => {
    assertValidGroups(app.filters ?? [], ESAE_FILTER_IDS, app.name);
    return {
      ...app,
      groups:    "app"  as const,
      filters:   app.filters  ?? [],
      platforms: app.platforms ?? [],
      tags:      app.tags     ?? [],
    };
  });

  const services: EsaeItem[] = (servicesRaw.services as any[]).map((svc) => ({
    ...svc,
    groups:    "service" as const,
    filters:   [],
    platforms: [],
    tags:      svc.tags ?? [],
  }));

  const extensions: EsaeItem[] = (extensionsRaw.extensions as any[]).map((ext) => {
    const platform: string[] = ext.platform ?? [];
    const filters: string[] = [];
    if (platform.some((p: string) => ["macos", "windows"].includes(p.toLowerCase()))) {
      filters.push("desktop");
    }
    if (platform.some((p: string) => ["android", "ios"].includes(p.toLowerCase()))) {
      filters.push("mobile");
    }
    return {
      ...ext,
      groups:    "extension" as const,
      filters,
      platforms: platform,
      tags:      ext.tags ?? [],
    };
  });

  return [...apps, ...services, ...extensions];
}

// ── Projects + GitHub ─────────────────────────────────────────────────────────

export interface EnrichedProject extends Project {
  githubData: GitHubRepo | undefined;
}

export function getGitHubStats(): GitHubStats {
  return githubRaw as GitHubStats;
}

/** Returns projects with their GitHub repo data pre-joined. */
export function getProjectGridData(): {
  projects: EnrichedProject[];
  stats: GitHubStats["d3ward"];
} {
  const { d3ward } = getGitHubStats();
  const projects: EnrichedProject[] = (projectsRaw as Project[]).map((p) => {
    assertValidGroups(p.groups, PROJECT_FILTER_IDS, p.id);
    return { ...p, githubData: d3ward.repos[p.id] };
  });
  return { projects, stats: d3ward };
}
