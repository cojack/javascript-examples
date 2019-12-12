/*function async(callback) {
    //callback(new Error("Something went wrong"), {a:1});
    callback(null, {a:1});
}


// Call the async function
async(function(error, data) {
    if(error) {
        console.error(error);
        return;
    }

    //Do the callback work here
    console.log("It worked!", data);
});


function async(callback) {
    throw new Error("Something went wrong");
    setImmediate(function(){
        callback();
    });
}

try {
    async(function(){
        console.log("It worked!");
    });
} catch(error) {
    console.log("This is never printed.");
}

const

async function getUserFromDBByEmailAndPassword(email, password) {
    const user = await db.getCollection('users').findOne({email, password});
    if (!user) {
        throw new Error('User does not exists');
    }
}
 */
const EVENT_ERROR_NAME = 'error';

function async() {
    const emitter = new (require('events').EventEmitter)();
    process.nextTick(function(){
        // This emits the "error" event
        emitter.emit(EVENT_ERROR_NAME, new Error("Something went wrong"));
    });
    return emitter;
}
const event = async();
event.on(EVENT_ERROR_NAME, function(error) {
    // When the "error" event is emitted, this is called
    console.error(error);
});
