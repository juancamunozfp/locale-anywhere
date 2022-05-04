let mix = require('laravel-mix')
const path = require('path')

mix.alias({
    'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
})

mix.setPublicPath('dist')
    .js('resources/js/tool.js', 'js').vue()
    .sass('resources/sass/tool.scss', 'css')
