import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";


const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src' , 'index.ts'),
    module: {
        // Поле для конфигурации обработчиков не JS файлов (лоадеров)
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // Что бы не указывать расширение файлов при импорте
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ]
}

export default config