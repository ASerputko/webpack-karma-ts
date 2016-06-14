var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon-chai'],
        files: [
            'spec-bundle.js'
        ],
        exclude: [],
        preprocessors: {
            'spec-bundle.js': ['webpack', 'sourcemap']
        },
        coverageReporter: {
            dir : 'reports/coverage',
            reporters: [
                {type: 'html', subdir: '/html'},
                {type: 'lcov', subdir: '/lcov'},
                {type: 'cobertura', subdir: '/cobertura'},
                {type: 'text-summary'}
            ]
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        reporters: ['spec', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    })
}
