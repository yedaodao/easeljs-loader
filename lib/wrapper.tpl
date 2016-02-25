(function (window, init) {
    if (module && typeof exports === 'object') {
        module.exports = init.call(window);
    } else {
        init.call(window);
    }
}(window, function () {
    this.createjs = this.createjs || {};
    var createjs = this.createjs;
    {{source}}
    return createjs;
}));