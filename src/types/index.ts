// Project data types
export interface Project {
    id: string;
    name: string;
    logo: string;
    url: string | null;
    githuburl: string;
    tags: string;
    groups: string;
}

// GitHub data types
export interface GitHubProfile {
    username: string;
    realName: string;
    bio: string | null;
    avatar: string;
    location: string;
    repos: number;
    repos_url: string;
    followers: number;
    following: number;
    url: string;
    notFound: null;
    public_gists: number;
    blog: string;
    company: string | null;
}

export interface GitHubRepo {
    full_name?: string;
    name: string;
    stars: number;
    forks: number;
    description: string | null;
    fork?: boolean;
    open_issues?: number;
    url: string;
    language: string | null;
}

export interface GitHubStats {
    d3ward: {
        stars_count: number;
        pulls_count: number;
        issues_count: number;
        commits: number;
        profile: GitHubProfile;
        repos: Record<string, GitHubRepo>;
    };
}

// Extension data types
export interface Extension {
    name: string;
    description: string;
    url: string;
    icon?: string;
}

// Service data types
export interface Service {
    name: string;
    description: string;
    url: string;
    icon?: string;
}

// SEO metadata types
export interface SEOMetadata {
    title: string;
    description: string;
    url: string;
    keywords?: string;
    image?: string;
    type?: string;
}
