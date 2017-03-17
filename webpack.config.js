const path = require('path');

module.exports = {
    entry: './public/assets/js/app.js',
    output: { filename: 'bundle.js', path: './public/assets/dist' },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015', 'stage-0'
                    ]
                }
            }
        ]
    },
    watch: true
};