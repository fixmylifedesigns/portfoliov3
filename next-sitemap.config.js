/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yourdomain.com', // 🔁 Replace with your actual domain
  generateRobotsTxt: true,           // ✅ Generate robots.txt automatically
  // Optional
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/private-page', '/secret'],
};
