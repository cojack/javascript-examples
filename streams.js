const fs = require('fs');
const util = require('util');
const stream = require('stream');

function readableStream() {
    const readable = getReadableStreamSomehow();
    readable.on('data', (chunk) => {
        console.log(`Received ${chunk.length} bytes of data.`);
    });
    readable.on('end', () => {
        console.log('There will be no more data.');
    });
}

function writableStream() {
    const myStream = getWritableStreamSomehow();
    myStream.write('some data');
    myStream.write('some more data');
    myStream.end('done writing data');
}

function writeableStream() {
    const file = fs.createWriteStream('./big2.file');

    for(let i=0; i<= 4e6; i++) {
        file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
    }

    file.end();
}

// writeableStream();

function readAll() {
    const server = require('http').createServer();
    server.on('request', (req, res) => {

        const data = fs.readFileSync('./big2.file');
        res.end(data);
    });

    server.listen(8000);
}

readAll();
