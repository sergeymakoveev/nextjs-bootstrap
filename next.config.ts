import type { NextConfig } from 'next';
import BundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.NEXTJS_BUNDLE_ANALYZE === 'true',
});

const nextConfig: NextConfig = {
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
  eslint: {
    dirs: ['src'],
  },
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

export default withBundleAnalyzer(nextConfig);
