// Simple example of generators

function* colors() { // can also be written as function *colors
    yield 'red';
    yield 'blue';
    yield 'black';
}

const gen = colors();
gen.next();

//  {value: "red", done: false}

gen.next();
//  {value: "blue", done: false}

gen.next();
//  {value: "black", done: false}

gen.next();
//  {value: undefined, done: true}