module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        }],

        postLoaders: [{
            test: /^((?!\.spec\.ts).)*.ts$/,
            exclude: /node_modules/,
            loader: 'isparta-instrumenter'
        }]
    },
    devtool: 'inline-source-map'
}
