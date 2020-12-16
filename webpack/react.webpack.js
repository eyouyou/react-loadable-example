const path = require('path')
const rootPath = path.resolve(__dirname, '..')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin')

const development =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

module.exports = {
    mode: development ? 'development' : 'production',
    entry: path.resolve(rootPath, 'src', 'App.tsx'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        mainFields: ['main', 'module', 'browser']
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ]
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ favicon: 'public/favicon.ico' }),
    ]
}