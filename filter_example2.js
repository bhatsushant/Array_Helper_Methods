// Simple example of filter() function

let products = [
    {name: 'banana', type: 'fruit', quantity : 0, price : 10},
    {name: 'parsley', type: 'vegetable', quantity : 10, price : 9},
    {name: 'mint', type: 'vegetable', quantity : 10, price : 11},
    {name: 'mango', type: 'fruit', quantity : 5, price : 30}
];

let filteredProducts = products.filter((product) => product.type === 'fruit'
                        && product.quantity > 0 && product.price > 20);

filteredProducts;