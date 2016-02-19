var webpack = require('webpack');

module.exports = {
    entry: {
        "entry": './examples/dev/entry.js'
    },
    output: {
        path: "./build",
        filename: "[name].js",
        publicPath: "/build"
    }
};