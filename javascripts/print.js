"use strict";

// GRAB OBJECTS
let pushToArray = (data) => {
    // console.log("the dat", data);
    $('.my-target').append(`<div class="card"<h2>${data.title}</h2><img class="space-img" src=${data.url} alt=${data.title}><p class="hidden para">${data.explanation}</p></div>`);
    $('.card').hide();
}

