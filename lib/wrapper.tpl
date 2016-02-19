(function (window, init) {
    if (typeof define === 'function' && define.amd) {
        define(init);
    } else if (module && typeof exports === 'object') {
        module.exports = init.call({});
    } else {
        init.call(window);
    }
}(this, function () {
    this.createjs = this.createjs || {};
    var createjs = this.createjs;
    {{source}}
}));