// plugins.js

// this file should be generated automatically by your plugin system
// It should export a default object which contains  plugins.
// A plugin is a named index of "hooks" pointing to a list of Vue components
// implementing that hook.

import MyPlugin from '@/plugins/myplugin'
//
// or, directly here:
//
// var FooPlugin = {
//   hooks: {
//     "plugins": [FooComponent]
//   }
// }

export default {
  MyPlugin,
  // FooPlugin
}
