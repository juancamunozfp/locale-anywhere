let mix = require('laravel-mix')
let path = require('path')

require('./nova.mix.js');

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .vue({ version: 3 })
    .sass('resources/sass/tool.scss', 'css')
    .nova('sloveniangooner/locale-anywhere');
