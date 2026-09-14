import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://facingmyshadow.com",
      lastModified: new Date(),
    },
    {
      url: "https://facingmyshadow.com/journal",
      lastModified: new Date(),
    },
    {
      url: "https://facingmyshadow.com/topics",
      lastModified: new Date(),
    },
    {
      url: "https://facingmyshadow.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://facingmyshadow.com/contact",
      lastModified: new Date(),
    },
  ];
}