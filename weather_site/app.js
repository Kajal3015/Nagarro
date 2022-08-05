const http = require("http");
const apiCallFromRequest = require('./request')
var url = "https://api.openweathermap.org/data/2.5/weather?q=delhi,07,+91&appid=810d3ebeb8877b06b676daeac39c4c0a";

http.createServer((req, res) => {
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
}).listen(3000);

console.log("service running on 3000 port....");