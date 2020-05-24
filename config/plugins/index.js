const plugins = ["helmet", "posts", "images", "manifest", "analytics"]

module.exports = plugins
  .map(plugin => require(`./${plugin}`))
  .reduce((acc, plugin) => [...acc, ...plugin], [])
