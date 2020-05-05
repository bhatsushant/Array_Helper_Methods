// Add object properties to an array

let primaryColors = [
    {color : 'red'},
    {color : 'blue'},
    {color : 'purple'},
    {color : 'black'}
];

primaryColors.reduce(function(previous,primaryColor) {
    previous.push(primaryColor.color);
    return previous;
},[]);