import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "http://localhost:1408",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
];

export const GITHUB_USERNAME = "Elliee13";
export const SOURCE_CODE_GITHUB_REPO = "MyPortfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Elliee13/MyPortfolio";

export const UTM_PARAMS = {
  utm_source: process.env.APP_URL || "http://localhost:1408",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
