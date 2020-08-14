const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=41198ed35d9e945313c799e772fd5beb&query=' + latitude+','+longitude

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+". Currently it is "+body.current.temperature+" degrees out. It feels like "+ body.current.feelslike+ " degrees out."
            + "The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast