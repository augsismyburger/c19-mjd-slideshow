"use strict";

//
let addFunctionality = () => {

        // CAROUSEL
        $('.card').first().fadeIn('slow').delay(4000);
        function runCarousel() {
            console.log("shit is happening");
            let card = $('.card');
            for (let i = 0; i < card.length; i++) {
                    // console.log(card[j]);
                    var j = 1 + i;
                    console.log(i, j);
                    if (j == card.length) {
                        i = 0;
                        $(card[j - 1]).fadeOut('slow');
                        // console.log(card[j])
                        $(card[i]).delay(600).fadeIn('slow');
                        break;
                    } else if ($(card[i]).css("display") == "block") {
                        $(card[i]).fadeOut('slow');
                        // console.log(card[j])
                        $(card[j]).delay(600).fadeIn('slow');
                        break;
                    }
                }
        }
        setInterval(runCarousel, 4000);

        // CLICK EVENTS
        $('#forward-arrow').click((e) => {
            let card = $('.card');
            for (let i = 0; i < card.length; i++) {
                // console.log(card[j]);
                var j = 1 + i;
                // console.log(i, j);
                if (j == card.length) {
                    i = 0;
                    $(card[j - 1]).fadeOut('slow');
                    console.log(card[j])
                    $(card[i]).delay(600).fadeIn('slow');
                    break;
                } else if ($(card[i]).css("display") == "block") {
                    $(card[i]).fadeOut('slow');
                    console.log(card[j])
                    $(card[j]).delay(600).fadeIn('slow');
                    break;
                }
            }

        });
        $('#back-arrow').click((e) => {
            let card = $('.card');
            // console.log(card.length - 1)
            for (let i = 3; i >= 0; i--) {
                // console.log(card[i]);
                var j = i - 1;
                if ($(card[i]).css("display") == "block") {
                    console.log("fuck yeah", i, j);
                    $(card[i]).fadeOut('slow');
                    $(card[j]).delay(600).fadeIn('slow');
                    break;
                } else if (j == 0 ) {
                    console.log(i, j);
                    $(card[i - 1]).fadeOut('slow');
                    j = 3;
                    $(card[j]).delay(600).fadeIn('slow');
                    break;
                }
            }

        });
        // HOVER ABILITY
        $('.space-img').mouseover((event) => {
            $(event.target).next().show();
        });

        $('.space-img').mouseout((event) => {
            $(event.target).next().hide();
        });
        //
}
