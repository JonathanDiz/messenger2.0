/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "photos.app.goo.gl"],
  },
  experimental:{
    appDir: process.cwd(),
  }
}
