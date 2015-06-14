/// <reference path='../vendor/typings/jquery/jquery.d.ts' />

import $ = require('jquery');

export class Hello {
  variable: string = 'hello';

  constructor() {
    this.sayHello();
  }

  private sayHello(): void {
    $('body').append(this.variable);
  }
}
