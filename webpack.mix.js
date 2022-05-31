let mix = require('laravel-mix')
const path = require('path')

require('./nova.mix.js');

mix
    .setPublicPath('dist')
    .js('resources/js/tool.js', 'js')
    .vue({ version: 3 })
    .sass('resources/sass/tool.scss', 'css')
    .nova('sloveniangooner/locale-anywhere');
