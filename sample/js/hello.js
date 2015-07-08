/// <reference path='./typings/jquery/jquery.d.ts' />
var $ = require('jquery');
var Hello = (function () {
    function Hello() {
        this.variable = 'hello';
        this.sayHello();
    }
    Hello.prototype.sayHello = function () {
        $('body').append(this.variable);
    };
    return Hello;
})();
exports.Hello = Hello;
