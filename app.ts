/// <reference path='./typings/jquery/jquery.d.ts' />
import $ = require('jquery');
import hello = require('./hello');
import rest = require('./rest');

$(document).ready(function() {
  new hello.Hello;
  new rest.Rest;
});
