"use strict";

let getPic2 = () => {

    return new Promise((resolve, reject) => {

    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=17jcSFNrB9AljIucmkbNZVcYS8uWpHw17lx98Ey0&date=2017-05-07",
        success: (data) => {
            // console.log(data);
            pushToArray(data);
            resolve();
            }
        }).fail(() => {
            reject(new Error("error", request.statusText))
        });
    });
}
