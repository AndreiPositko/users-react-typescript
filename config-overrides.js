const { override, addBabelPlugin } = require('customize-cra');

const overrideConfig = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
      rootPathPrefix: '~',
    },
  ])
);

module.exports = {
  webpack: function (config, env) {
    return overrideConfig(config);
  },
  paths: function (paths, env) {
    return paths;
  },
};
