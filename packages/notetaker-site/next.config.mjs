export default function() {
  let cfg = {
    output: 'export',
    eslint: {
      ignoreDuringBuilds: true, // We already lint at commit time.
    },
    // https://github.com/vercel/next.js/issues/41961
    webpack: (wcfg) => {
      wcfg.resolve.extensionAlias = {
        '.js': ['.js', '.jsx', '.ts', '.tsx'],
        '.mjs': ['.mts', '.mjs'],
        '.cjs': ['.cts', '.cjs'],
      };
      return wcfg;
    },
  };
  if (process.env.ANALYZE === 'true') {
    cfg = require('@next/bundle-analyzer')()(cfg);
  }
  return cfg;
}
