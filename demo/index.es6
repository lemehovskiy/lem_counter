require("./sass/style.scss");

require ("jquery");

require("../build/lem_counter");

import {TweenLite} from "gsap";

// if (NODE_ENV == 'development') {
//     console.log('NODE_ENV == dev');
// }


$(document).ready(function () {

    $('.counter').lemCounter({
        // locale: false,
        value_to_from_content: true,
        value_to: 50,
        value_from: 100
    });

    $('.counter').on('complete.lc', function(){
        console.log('complete');
    })


});