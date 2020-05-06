// Remove duplicate values from an array

var numbers = [1,1,2,2,3,4];
function unique(array) {
    return array.reduce(function(value,num) {
        if(!value.find( n => n === num)) {
            value.push(num);
        }
        return value;
    },[]);
}

unique(numbers);