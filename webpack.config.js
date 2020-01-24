const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
    "entry": {
        "src": "./client/src/index.js"
    },
    "output": {
        "path": "/",
        path: path.resolve(__dirname, 'client'),
        filename: "bundle.js"
    },
    "plugins": [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ],
    "module": {
        "rules": [{
                test: /\.(js|jxs)$/,
                exclude: /node_modules/,
                "use": "babel-loader"
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    "target": "node"
};