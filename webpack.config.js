const path = require('path');
const bootstrapEntryPoints = require('./webpack.bootstrap.config');

const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })

const cssConfig = isProd ? cssProd : cssDev;

const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev; 

module.exports = {
    entry: {
        app: './src/index.js',
        bootstrap: bootstrapConfig
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssConfig 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                use: [
                    //if output and public path is same
                    'file-loader?name=images/[name].[ext]',
                    // 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',                    
                    'image-webpack-loader'

                ]
            },
            //for bootstrap-loader
            {
                test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/, loader: 'file-loader?name=/fonts/[name].[ext]'
            },
            { 
                test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, 
                loader: 'imports-loader?jQuery=jquery' 
            },
            { 
                test: /vendor\/.+\.(jsx|js)$/,
                loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 9000,
        hot: true,
        stats: 'errors-only',
        open: true,
        openPage: '',
        historyApiFallback: true,
        watchContentBase: true,
        publicPath: '/'
    },
    plugins: [
        new ManifestPlugin({
            fileName:'manifest.json',
        }),
        new HtmlWebpackPlugin({
            title: 'title template',
            favicon: 'public/favicon.ico',
            // minify: {
            //     collapseWhitespace: true,
            // },
            hash: true,
            //location to save the generated html file
            filename: 'index.html', 
            template: './public/index.html'
        }),
        new ExtractTextPlugin({
            filename: '/css/[name].css',
            //Extract Text Plugin doesn't work with HotModuleReplacePlugin
            // disable: true,
            disable: !isProd,            
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // Make sure this is after ExtractTextPlugin! 
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute! 
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        })
    ]
}