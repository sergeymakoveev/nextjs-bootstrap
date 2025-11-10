import type { NextConfig } from 'next';
import BundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.NEXT_PUBLIC_BUNDLE_ANALYZE === 'true',
});

const NEXT_CONFIG: NextConfig = {
  // Enable Server Side Rendering
  reactStrictMode: true,
  // Enable React Server Components
  // serverExternalPackages: [
  //   "@mui/material",
  //   "@emotion/react",
  //   "@emotion/styled",
  // ],
  compiler: {
    styledComponents: true,
  },
  rewrites: () =>
    Promise.resolve([
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*',
      },
    ]),
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          // '@svgr/webpack',
          {
            loader: '@svgr/webpack',
            options: {
              // icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

export default withBundleAnalyzer(NEXT_CONFIG);
