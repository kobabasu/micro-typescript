/// <reference path='./typings/jquery/jquery.d.ts' />
var $ = require('jquery');
var Rest = (function () {
    function Rest() {
        this.host = 'http://localhost:8080/api/';
        this.getIndex();
    }
    Rest.prototype.getIndex = function () {
        $.ajax({
            url: this.host + 'users',
            type: 'GET',
            error: function () {
                console.log('error');
            },
            success: function (json) {
                $.each(json.data, function (i, item) {
                    $('body').prepend(item.name + '<br>');
                });
            }
        });
    };
    return Rest;
})();
exports.Rest = Rest;
