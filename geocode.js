const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoia3Jpc2huYXNoYXJtYXJzIiwiYSI6ImNrYWlsY21wNzAxdXgyeG13MHVzcmo1MHkifQ.i6ALVlsEiSul3s2XXLQFxA"

    request({ url, json: true }, (error, { body: { features } }) => {
        if (error) {
            const message = "Unable to connect to Location Services, Please check your Network Connection!";
            callback(message, undefined);
        } else if (features.length === 0) {
            const message = "Unable to find Location, Try other Search Keywords!";
            callback(message, undefined);
        } else {
            callback(undefined, {
                longitude: features[0].center[0],
                latitude: features[0].center[1]
            })
        }
    })
}

module.exports = geocode;