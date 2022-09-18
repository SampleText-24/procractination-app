import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {

    return {
        // Что бы не указывать расширение файлов при импорте
        extensions: ['.tsx', '.ts', '.js'],
    }
}