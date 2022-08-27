export type SiteConfig = {
  avatar?: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  nav: Array<{ label: string; href: string }>;
  social?: {
    github?: string;
    twitter?: string;
  };
};

export type MDXFrontMatter = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
};
