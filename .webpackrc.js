const path = require("path");

export default {
  // "entry": "src/pages/*.js",
  // "theme": "./config/theme.config.js",
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
  // "proxy": {
  //   "/api": {
  //     "target": "http://jsonplaceholder.typicode.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api" : "" }
  //   }
  // }
};
