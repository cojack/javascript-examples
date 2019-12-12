const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (i) => {
    console.log(`event ${i}`);
    setTimeout(() => console.log('an event occurred! the i: ', i), i*1000);
});

myEmitter.once('event', () => console.log('only once'));

for (let i = 0; i < 5; ++i) {
    myEmitter.emit('event', i);
}


const myEmitter2 = new MyEmitter();

myEmitter2.on('event2', () => console.log('event2'));
