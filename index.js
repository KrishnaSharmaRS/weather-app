const geocode = require('./geocode');
const forecast = require('./forecast');

const address = process.argv[2];

if (!address) {
    console.log("Please provide the Address!");
} else {
    geocode(address, (error, { latitude, longitude } = {}) => {
        if (error) {
            return console.log("Error:", error);
        }

        forecast({ lat: latitude, lon: longitude }, (error, { location, description, temperature } = {}) => {
            if (error) {
                return console.log(error);
            }

            // console.log(latitude, longitude);

            console.log("Location: '" + location + "', Currently: '"
                + description
                + "', Temprature: '"
                + temperature
                + "-Degree C'");
        });
    });
}