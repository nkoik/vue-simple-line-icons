const iconFiles = require.context('.', false, /\.js$/)
const modules = {}
iconFiles.keys().forEach(fileName => {
  if (fileName === './index.js') return

  const moduleName = fileName.replace(/(\.\/|\.js)/g, '')

  modules[moduleName] = {
    ...iconFiles(fileName)[moduleName]
  }
})

export default modules
