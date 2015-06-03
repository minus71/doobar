/*
 * doobar
 * https://github.com/minus/doobar
 *
 * Copyright (c) 2015 Mario Minutolo
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.doobar = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
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
