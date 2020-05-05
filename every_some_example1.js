// every() function

let computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 8},
    {name:'Acer',ram: 32}
];

var allCanRun = true;
var fewCanRun = false;

for(let i=0; i<computers.length; i++) {
    let computer = computers[i];
    if(computer.ram < 16) {
        allCanRun = false;
    }
    else {
        fewCanRun = true;
    }
}

/* The above program when run will return 'true', But as you see using the for loop is a tedious process. This is where the every() and some() array helper methods come handy. The same above program can be rewritten as follows */


computers.every(function(computer) {
    return computer.ram > 16;
});

/* The above method will return 'true' only if all the values meet the specified condition */

computers.some(function(comouter) {
    return computer.ram > 16;
});

/* The above function will return 'true' even if some of the values meet the specified condition */