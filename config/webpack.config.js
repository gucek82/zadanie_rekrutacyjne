const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
},
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build')
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../', 'public'),
            },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|mp4)$/,
                use: [
                    {loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'inc',
                }
            },
        ]
    },

  
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: [
                ["@babel/preset-env", {useBuiltIns: 'usage'}]
            ],
            plugins: [
                "@babel/plugin-proposal-class-properties"
            ]
        }
      }
    ]},
    
  
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "Zadanie rekrutacyjne",
            template: "src/page.html"
        }),
       
    ]
}