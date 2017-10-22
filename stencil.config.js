exports.config = {
  publicPath: 'build',
  bundles: [
    { components: ['paint-container', 'paint-canvas', 'app-toast'] },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
