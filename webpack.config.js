const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 分离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            // },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            // {
            //     test: /\.css$/,
            //     use: [
            //       'vue-style-loader',
            //       'css-loader'
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'style.css',
            // chunkFilename: "[id].css"
        })
    ]
}