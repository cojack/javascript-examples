const request = require('request');

console.log('before');
let bodyOutput;

// (async () => {
//     const body = await request.get('https://google.com');
//     console.log(body);
//     //
// })();

console.log('Make a request to google');
request.get('https://google.com', {}, (error, response, body) => handleResponse(error, response, body));

function handleResponse(error, response, body) {
    if (error) {
        return console.error(error);
    }
    bodyOutput = body;
    console.log('google fetched');
    console.log('make a request to avast');
    request.get('https://avast.com', {}, (err, resp, body2) => handleAvastResponse(err, resp, body2));
}

function handleAvastResponse(error, response, body) {
    if (error) {
        return console.error(error);
    }
    console.log('avast response, but google output');
    // console.log(bodyOutput);
}

console.log('after');

setTimeout(() =>
    console.log('do we have bodyOutput already?', bodyOutput), 100);

if (bodyOutput) {
    // save to db bodyOutput
}

const intervalPointer =  setInterval(() => {
    if (bodyOutput) {
        console.log('yeah we have a response from google');
        clearInterval(intervalPointer);
    } else {
        console.log('nope, not yest')
    }
}, 100);