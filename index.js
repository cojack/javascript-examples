const foo = [1,2,3,4,5];

const sum = (a,b, cb ) => cb(a+b);

const result = foo.map(element => {
    return [element];
});

foo.forEach(element => console.log(element));

/// console.log(result);