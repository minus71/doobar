/*! Doobar - v0.1.0 - 2015-06-04
* https://github.com/minus/doobar
* Copyright (c) 2015 Mario Minutolo; Licensed MIT */
var doobar_classes = (function(){
  return "Hello";
}());

/* global doobar_classes */
 /* global console */

(function($) {

  var category = doobar_classes;

  // Collection method.
  $.fn.doobar = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      console.log(category);
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.doobar = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.doobar.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.doobar.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].doobar = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
