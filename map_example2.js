// Simple example of plucking values from objects using map

var paints = [{color:'red'},{color:'blue'},{color:'yellow'}];

function pluck(array, property) {
    let color = array.map((item) => item[property]);
    return color;
}

pluck(paints,'color');