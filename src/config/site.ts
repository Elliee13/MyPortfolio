import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

function normalizeSiteUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function getSiteUrl() {
  const appUrl = process.env.APP_URL;
  if (appUrl) {
    return normalizeSiteUrl(appUrl);
  }

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProductionUrl) {
    return normalizeSiteUrl(vercelProductionUrl);
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return normalizeSiteUrl(vercelUrl);
  }

  return "http://localhost:1408";
}

export const SITE_INFO = {
  name: USER.displayName,
  url: getSiteUrl(),
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
export const SOURCE_CODE_GITHUB_REPO = "Elliee13/MyPortfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Elliee13/MyPortfolio";

export const UTM_PARAMS = {
  utm_source: SITE_INFO.url,
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
