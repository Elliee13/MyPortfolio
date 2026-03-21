import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/features/blog/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = getAllPosts();

  const posts = allPosts.map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const products = [
    {
      url: `${SITE_INFO.url}/products/shopflow`,
      lastModified: dayjs().toISOString(),
    },
  ];

  const routes = ["", "/products", ...(allPosts.length > 0 ? ["/blog"] : [])].map(
    (route) => ({
      url: `${SITE_INFO.url}${route}`,
      lastModified: dayjs().toISOString(),
    })
  );

  return [...routes, ...posts, ...products];
}
