var fs = require('fs'),
    path = require('path');

var replaceMarker = '{{source}}';

module.exports = function (source) {
    var wrapperPath = path.resolve(path.join(__dirname, './wrapper.tpl')),
        content = fs.readFileSync(wrapperPath, {
            encoding: 'utf8'
        });
    this.cacheable();
    return content.replace(replaceMarker, source);
};