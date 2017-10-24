exports.config = {
  publicPath: 'build',
  bundles: [
    { components: ['paint-container', 'paint-canvas'] },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
