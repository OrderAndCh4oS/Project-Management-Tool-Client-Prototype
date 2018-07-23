const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const process = require('process');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const inProduction = process.env.NODE_ENV === 'production';
const inDevelopment = process.env.NODE_ENV === 'development';

let cleanOptions = {
    root: __dirname,
    verbose: false,
    dry: false
};

let srcDir = './src';
let distDir = './dist';
let pathsToClean = [distDir];

module.exports = {
    entry: {
        app: srcDir + '/index.js'
    },
    output: {
        path: path.resolve(__dirname, distDir),
        filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        publicPath: '/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[hash].[ext]'
                        }
                    },
                    'img-loader'
                ]
            }
        ]
    },
    plugins:
        [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new ExtractTextPlugin('[name].[hash].css'),
            new webpack.LoaderOptionsPlugin({
                minimize: inProduction
            }),
            new HtmlWebpackPlugin({
                template: srcDir + '/index.html'
            }),
            function () {
                this.plugin('done', stats => {
                    require('fs').writeFileSync(
                        path.join(__dirname, distDir + '/manifest.json'),
                        JSON.stringify(stats.toJson().assetsByChunkName)
                    );
                });
            }
        ]
};

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
    module.exports.plugins.push(
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, './' + srcDir + '**/*' + mainExt)),
            minimize: inProduction,
            purifyOptions: {
                whitelist: ['']
            }
        })
    );
    module.exports.plugins.push(
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    );
}
