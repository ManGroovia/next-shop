/** @type {import('next').NextConfig} */
const nextConfig = {
 swcMinify:true,
 optimizeFonts:true,
 images:{
  remotePatterns:[
    {
      protocol: "https",
      hostname: "object.pscloud.io"
    },
  ],
  minimumCacheTTL:1500000
 }
};

module.exports = nextConfig;
