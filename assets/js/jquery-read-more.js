/*!
  Read more / read less jQuery plugin.
  https://github.com/AndreF010203/jQuery-Read-More.git
  version 1.0.0 (Nov, 2020)

  Copyright (c) 2020 Andrea Facchini
  Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
(function($) {
  /**
   *  
   * @param {*} options Options object: 
   *    lines           int     number of lines to show
   *    readMoreLabel   string  Label for the expand action default Read more
   *    readLessLabel   string  Label for the collapse action default Read less
   *    ellipsis        string  Label for the separator, default ...
   *    splitOn         string/regex  split on the defined character/regex
   */
  $.fn.readMore = function(options) {
    if(options === 'destroy') {
      $(this).each(function (_j, element) {
        $($(element).data().controller).off('click');
        $(element).html($(element).children().last().html());
      });
      return;
    }

    var maxLines = parseInt(options.lines),
      readMoreLabel = options.readMoreLabel || "Read more",
      readLessLabel = options.readLessLabel || "Read less",
      ellipsis = options.ellipsis || "...",
      splitOn = options.splitOn || ' ';

    if(!maxLines || isNaN(maxLines)) {
      console.error("lines must be an integer");
      return;
    }
  
    $(this).each(function (_j, element) {
      var originalText = $(element).html(),
        textArr = originalText.split(splitOn),
        $newDiv = $("<div/>"),
        $fullDiv = $("<div/>"),
        $readMore = $($(element).data().controller),
        hPrev = 0, 
        lines = 0, 
        overflow = false, 
        l = textArr.length, 
        i;
  
      $fullDiv.html(originalText);
      $(element).html($newDiv).append($fullDiv);
      
      for(i=0; i < l; i++) {
        $newDiv.append(textArr[i] + ' ');
        var h = $newDiv.height();
        if(h > hPrev) {
          hPrev = h;
          lines++;
          if(lines > maxLines) {
            overflow = true;
            $newDiv.html(textArr.slice(0, i).join(' '))
            break;
          }
        }
      }
  
      if(overflow) {
        $readMore.text(readMoreLabel).css('display', 'block');
        $newDiv.append(ellipsis);
        var minH = $newDiv.height();
        var realH =  $fullDiv.height();
        var display = $newDiv.css('display');
  
        function callback() {
          if($(element).data().expanded) {
            $fullDiv.animate({height: minH + 'px'}, 1000, function() {
              $newDiv.css('display', display);
              $fullDiv.css('display', 'none');
            });
            $readMore.animate({opacity: 0}, 500, function() {
              $readMore.text(readMoreLabel);
            }).animate({opacity: 1}, 500);
            $(element).data('expanded', false);
          } else {
            $newDiv.css('display', 'none');
            $fullDiv.css('display', display);
            $fullDiv.css('height', minH + 'px')
            $fullDiv.animate({height: realH + 'px'}, 1000);
            $readMore.animate({opacity: 0}, 500, function() {
              $readMore.text(readLessLabel);
            }).animate({opacity: 1}, 500);
            $(element).data('expanded', true);
          }
        }

        $readMore.on('click', callback);
      } else {
        $readMore.css('display', 'none');
      }
      $fullDiv.css('display', 'none');
    });
  }
})(jQuery);
