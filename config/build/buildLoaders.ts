import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // Что бы css файлы обрабатывались как обычно
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // В режиме разработки название классов будет состоять из пути и имени
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:4]'
                            : '[hash:base64:8]',
                    },
                }
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    }

    // Если используем jsx нужно добавить babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}