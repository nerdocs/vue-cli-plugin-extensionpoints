const fs = require('fs')

module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      'vue-extensionpoints': '^0.1.4',
    },
  })
  api.render('./template');

  // add import
  api.injectImports(api.entryFile,
    `import Extensionpoints from 'vue-extensionpoints'`)
  api.injectImports(api.entryFile,
    `import plugins from '@/plugins'`)
}

module.exports.hooks = (api) => {
  api.afterInvoke(() => {
    const { EOL } = require('os')
    const fs = require('fs')
    const contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g)

    // if not already found, add Vue.use to file
    if(lines.findIndex(line => line.match(/Vue.use\(Extensionpoints/)) < 0) {
      const renderIndex = lines.findIndex(line => line.match(/new Vue/))
      lines[renderIndex] = `Vue.use(Extensionpoints, plugins)${EOL}${EOL}` + lines[renderIndex]
      fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
    }

    const appPath = api.resolve('src/App.vue')
    if (fs.existsSync(appPath)) {
      let content = fs.readFileSync(appPath, { encoding: 'utf8' })
      content = content.replace(/HelloWorld/gi, 'ExtensionpointExample')
      fs.writeFileSync(appPath, content)
    }
  })
}
