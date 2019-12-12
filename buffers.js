const Buffer = require('buffer').Buffer;

function createBuffers() {
// Creates a zero-filled Buffer of length 10.
    const buf1 = Buffer.alloc(10);

// Creates a Buffer of length 10, filled with 0x1.
    const buf2 = Buffer.alloc(10, 1);


// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
    const buf3 = Buffer.allocUnsafe(10);

// Creates a Buffer containing [0x1, 0x2, 0x3].
    const buf4 = Buffer.from([1, 2, 3]);

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
    const buf5 = Buffer.from('tést');

// Creates a Buffer containing Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
    const buf6 = Buffer.from('tést', 'latin1');
}

function writeExample() {
    const buf = Buffer.alloc(1234);

    console.log(buf.length);
    // Prints: 1234

    const s1 = 'some string';
    buf.write(s1, 0, 'ascii');
    buf.write('Hi Man', s1.length + 1, 'ascii');

    console.log(buf.toString());

    console.log(buf.length);
}

// writeExample();

function writeExample2() {

    const buf = Buffer.alloc(11);

    const len = buf.write('\u00bd + \u00bc = \u00be', 0);

    console.log(`${len} bytes: ${buf.toString('utf8', 0, len)}`);
// Prints: 12 bytes: ½ + ¼ = ¾

}

// writeExample2();

function concat() {
    const buffer1 = Buffer.from('TutorialsPoint ÓĄŚ', 'utf8');
    const buffer2 = Buffer.from('TutorialsPoint ÓĄŚ', 'ascii');
    const buffer3 = Buffer.concat([buffer1,buffer2]);

    console.log(buffer1.length);
    console.log(buffer2.length);
    console.log("buffer3 content: " + buffer3.toString());
}

//concat();

function alloc() {
    const buffer1 = Buffer.from('ABC', 'ascii');

//copy a buffer
    const buffer2 = Buffer.alloc(2);
    buffer1.copy(buffer2);
    console.log("buffer2 content: " + buffer2.toString());
}

//alloc();

function iterate() {
    const buf = Buffer.from([1, 2, 3]);

    for (const b of buf) {
        console.log(b);
    }

}

iterate();
