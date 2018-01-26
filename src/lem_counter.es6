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

            //extend by function call
            self.settings = $.extend(true, {
                value_from: 0,
                value_to: 0,
                locale: false,
                value_to_from_content: false,
                animate_duration: 2
            }, options);

            self.$element = $(element);

            self.to_fixed_digits = 0;

            //extend by data options
            self.data_options = self.$element.data('lem-counter');
            self.settings = $.extend(true, self.settings, self.data_options);


            //value to from content
            if (self.settings.value_to_from_content) {
                //check if number and remove commas
                if (!isNaN(self.$element.text().replace(/,/g, ''))) {
                    self.settings = $.extend(true, self.settings, {
                        value_to: Number(self.$element.text().replace(/,/g, ''))
                    });
                }
            }

            //set start value
            self.counter_helper = {val: self.settings.value_from};

            self.init();

        }

        init() {

            let self = this;

            let counter_to = self.settings.value_to;

            //check if number is float
            if (isFloat(counter_to)) {
                let string_counter_val_to = counter_to.toString();

                self.to_fixed_digits = string_counter_val_to.substr(string_counter_val_to.indexOf('.') + 1).length;
            }

            TweenLite.to(self.counter_helper, self.settings.animate_duration, {
                val: counter_to,
                onUpdate: updateHandler,
                ease: Linear.easeNone,
                onComplete: function () {
                    self.$element.trigger('onComplete.lc');
                }
            });

            function isFloat(n) {
                return Number(n) === n && n % 1 !== 0;
            }


            function updateHandler() {
                let value = self.counter_helper.val;

                let num = value.toFixed(self.to_fixed_digits);

                let num_locale = 0;


                if (self.to_fixed_digits == 0) {
                    num_locale = parseInt(num);
                }

                else {
                    num_locale = parseFloat(num);
                }

                if (self.settings.locale) {
                    num_locale = num_locale.toLocaleString(self.settings.locale, {maximumFractionDigits: self.to_fixed_digits});
                }

                self.$element.text(num_locale);
            }

        }

    }


    $.fn.lemCounter = function () {
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