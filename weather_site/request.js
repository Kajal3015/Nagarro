const request = require('request');
 
_EXTERNAL_URL = 'https://api.openweathermap.org/data/2.5/weather?q=delhi,07,+91&appid=810d3ebeb8877b06b676daeac39c4c0a';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;