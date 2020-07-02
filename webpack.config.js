const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = (env) => {

    const isProduction = env === 'production'

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }]
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            port: 3000,
            inline: true,
            historyApiFallback: true,
            publicPath: '/dist/'
        },
        plugins: [new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '../index.html'
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/index.html'
        // }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
        ]
    }
}




