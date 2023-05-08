/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://marprez.vercel.app",
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://marprez-dev.vercel.app"}/sitemap.xml`,
      `${process.env.SITE_URL || "https://marprez-dev.vercel.app"}/server-sitemap.xml`,
    ],
  },
};
