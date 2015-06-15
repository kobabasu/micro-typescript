/// <reference path='../vendor/typings/jquery/jquery.d.ts' />
import $ = require('jquery');

export class Rest {
  host: string = 'http://localhost:8080/api/'

  constructor() {
    this.getIndex();
  }

  private getIndex(): void {
    $.ajax({
      url: this.host + 'users',
      type: 'GET',
      error: function() {
        console.log('error');
      },
      success: function(json) {
        $.each(JSON.parse(json), function(i, item) {
          $('body').prepend(item.name + '<br>');
        });
      }
    });
  }
}
