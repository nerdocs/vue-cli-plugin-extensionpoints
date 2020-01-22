// extensions.js

// this file should be generated automatically by your plugin system
// It should export a default object which contains  plugins.
// A plugin is a named index of "hooks" pointing to a list of Vue components
// implementing that hook.

import MyExtension from '@/extensions/myextension'
//
// or, directly here:
//
// var FooExtension = {
//   hooks: {
//     "app-plugins": [FooComponent]
//   }
// }

export default {
  MyExtension,
  // FooExtension
}
