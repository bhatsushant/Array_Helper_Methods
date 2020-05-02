// Simple example of filter() function

let products = [
    {name: 'banana', type: 'fruit'},
    {name: 'parsley', type: 'vegetable'},
    {name: 'mint', type: 'vegetable'},
    {name: 'mango', type: 'fruit'}
];

let filteredProducts = products.filter((product) => product.type === 'fruit');
// product.type === 'fruit'. This returns a truthy value and filters values based on those truthy values.

filteredProducts; // Will filter only the objects having type as 'fruit'