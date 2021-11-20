const path = require('path')

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "index.bundle.js",
        clean: true
    },
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port:3010,
        open: true,
        hot: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'scss-loader'
                ]
            }
        ]
    }
}