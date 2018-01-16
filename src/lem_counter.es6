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
                reverse: false
            }, options);

            self.$element = $(element);

            self.counter_obj = {val: 0}

            self.to_fixed_digits = 0;

            //get data val from data attr
            self.counter_data_val = self.$element.data('lem-counter');


            //check if data undefined
            if (self.counter_data_val == undefined){
                self.counter_data_val = self.$element.text();
            }

            if (self.settings.reverse) {
                self.counter_obj.val = self.counter_data_val;
                self.counter_val_to = 0;
            }

            else {
                self.counter_val_to = self.counter_data_val;
                self.counter_val_from = 0;
            }

            self.init();

        }

        init() {

            let self = this;
            
            self.counter_val_to = Number.parseFloat(self.counter_val_to.replace(/,/g, ''));


            //check if number is float
            if (!Number.isInteger(self.counter_val_to)) {
                let string_counter_val_to = self.counter_val_to.toString();

                self.to_fixed_digits = string_counter_val_to.substr(string_counter_val_to.indexOf('.') + 1).length;
            }


            TweenLite.to(self.counter_obj, 2, {
                val: self.counter_val_to,
                onUpdate: updateHandler,
                ease: Linear.easeNone,
                onComplete: function(){
                    self.$element.trigger('complete.lc');
                }
            });


            function updateHandler() {
                let value = self.counter_obj.val;

                let num = value.toFixed(self.to_fixed_digits);

                let num_locale = 0;


                if (self.to_fixed_digits == 0) {
                    num_locale = parseInt(num).toLocaleString();
                }

                else {
                    num_locale = parseFloat(num).toLocaleString();
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