const request = require('request');


const forecast = (geocode, callback) => {
    const apiKey = "b048c95891f9af0ad71bae88d759dc8d";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='
        + encodeURIComponent(geocode.lat)
        + '&lon='
        + encodeURIComponent(geocode.lon)
        + '&appid='
        + apiKey
        + '&units=metric';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to Connect to the Weather Service. Please Check your Network Connection!", undefined);
        } else if (response.body.message) {
            callback("City not Found, Please try again with other words!", undefined);
        } else {
            callback( undefined, {
                description: response.body.weather[0].description,
                temperature: response.body.main.temp,
                location: response.body.name
            } )
        }
    });
}

module.exports = forecast;