// Example of destructuring

const points = [
    [4,10],
    [5,7],
    [6,8]
];

points.map(([x,y]) => {
    return {x,y}
});

/* Output - {x: 4, y: 10}
            {x: 5, y: 7}
            {x: 6, y: 8} */