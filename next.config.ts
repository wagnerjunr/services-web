
const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "localhost",
      // "d2ztuoaa1dml2v.cloudfront.net",
      // "d4vcect07m6di.cloudfront.net",
    ],
  },
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
