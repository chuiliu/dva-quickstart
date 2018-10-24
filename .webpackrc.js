const path = require("path");

export default {
  "entry": "src/index.js",
  "theme": "src/config/theme.js",
  "extraBabelPlugins": [
    ["import", {"libraryName": "antd", "libraryDirectory": "es", "style": true}]
  ],
  "alias": {
    "@": path.resolve(__dirname, "./src"),
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie < 9"
  ],
  // "env": {
  //   "development": {
  //     "extraBabelPlugins": [
  //       // "dva-hmr",
  //       // "@babel/plugin-transform-runtime",
  //       ["import", { "libraryName": "antd", "style": true }]
  //     ]
  //   },
  //   "production": {
  //     "extraBabelPlugins": [
  //       // "@babel/plugin-transform-runtime",
  //       ["import", { "libraryName": "antd", "style": true }]
  //     ]
  //   }
  // },
  "hash": true,
  "html": {
    "template": "./src/index.ejs"
  }
  // "proxy": {
  //   "/api": {
  //     "target": "http://jsonplaceholder.typicode.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api" : "" }
  //   }
  // }
};
