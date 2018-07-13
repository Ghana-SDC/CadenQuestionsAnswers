const path = require("path");

const common = {
  context: path.join(__dirname, "/client"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      }
    ]
  }
};

const client = {
  entry: "./client.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "app.js"
  }
};

const server = {
  entry: "./server.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "app-server.js",
    libraryTarget: "commonjs-module"
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];

// module.exports = {
//   entry: path.resolve(SRC_DIR, 'index.jsx'),
//   output: {
//     filename: 'bundle.js',
//     path: BUILD_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: [/node_modules/],
//         use: [{
//           loader: 'babel-loader',
//           options: { presets: ['env', 'react'] }
//         }],
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ]
//   }
// }
