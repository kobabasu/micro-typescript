/// <reference path='./typings/jquery/jquery.d.ts' />
var $ = require('jquery');
var hello = require('./hello');
var rest = require('./rest');
$(document).ready(function () {
    new hello.Hello;
    new rest.Rest;
});
