let mix = require('laravel-mix')
const path = require('path')

mix.setPublicPath('dist')
    .js('resources/js/tool.js', 'js').vue({ version: 3 })
    .sass('resources/sass/tool.scss', 'css')
    .alias({
        'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
    })
    .webpackConfig({
        externals: {
            vue: 'Vue',
        },
        output: {
            uniqueName: 'sloveniangooner/locale-anywhere',
        },
    })
