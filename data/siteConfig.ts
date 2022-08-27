import type { SiteConfig } from "@/lib/types";

const siteConfig: SiteConfig = {
  avatar: "/avatar.jpeg",
  siteUrl: "https://kinda-silly-blog.vercel.app/",
  siteName: "KindaSloth Blog",
  siteDescription: "My blog to write about cool tech stuffs",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "Tags", href: "/tags" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/Guilherme775",
    twitter: "https://twitter.com/KindSloth",
  },
};

export default siteConfig;
