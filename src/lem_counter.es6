/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/lem_counter
 */

'use strict';

(function ($) {

    class LemCounter {

        constructor(element, options) {

            let self = this;

            self.settings = $.extend({

            }, options);

            self.$element = $(element);

        }
    }


    $.fn.lemCounter = function() {
        let $this = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            length = $this.length,
            i,
            ret;
        for (i = 0; i < length; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                $this[i].lem_counter = new LemCounter($this[i], opt);
            else
                ret = $this[i].lem_counter[opt].apply($this[i].lem_counter, args);
            if (typeof ret != 'undefined') return ret;
        }
        return $this;
    };

})(jQuery);