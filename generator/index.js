module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      'vue-extensionpoints': '^0.1.0',
    },
  })
  const appPath = api.resolve('src/App.vue')
  if (fs.existsSync(appPath)) {
    let content = fs.readFileSync(appPath, { encoding: 'utf8' })
    content = content.replace(/HelloWorld/gi, 'ExtensionpointExample')
    fs.writeFileSync(appPath, content, { encoding: 'utf8' })
  }
  api.render('./template')

  // add import
  api.injectImports(api.entryFile,
    `import VueExtensionpoints from 'vue-extensionpoints'`)
}

// module.exports.hooks = (api) => {
//   api.afterInvoke(() => {
//     const fs = require('fs')
//     const contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
//     const lines = contentMain.split(/\r?\n/g)
//   })
// }
