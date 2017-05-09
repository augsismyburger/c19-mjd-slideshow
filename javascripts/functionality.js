"use strict";


let addFunctionality = (data) => {
        console.log($('.card'));

        // HOVER ABILITY
        $('.card').mouseover((event) => {
            $(event.target).next().show();
        });

        $('.card')[0].mouseout((event) => {
            $(event.target).next().hide();
        });


        // CAROUSEL
        $('#forward-arrow').click((e) => {
            console.log($('.card'));
            let counter = 0;
            $('.card').addClass('hidden-card').next().addClass('visible').removeClass('hidden-card');
        });
        $('#back-arrow').click((e) => {
            $('.card').addClass('hidden-card').prev().addClass('visible').removeClass('hidden-card');
        });
}
// WRITE TO DOM
let writeToDom = (data) => {
    $('.my-target').append(`<div class="card"<h3>${data.title}</h3><img class="space-img" src=${data.hdurl} alt=${data.title}><p class="hidden">${data.explanation}</p></div>`);
}
