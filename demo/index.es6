require("./sass/style.scss");

require ("jquery");

require("../build/lem_counter");

import {TweenLite} from "gsap";

// if (NODE_ENV == 'development') {
//     console.log('NODE_ENV == dev');
// }


$(document).ready(function () {

    $('.counter').lemCounter({
        reverse: false
    });

    $('.counter').on('complete.lc', function(){
        console.log('complete');
    })


});