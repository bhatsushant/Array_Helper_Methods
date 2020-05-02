// Simple find() function example

var ladder = [
  {id: 1 , height: '20 feet'},
  {id: 2 , height: '30 feet'},
  {id: 3 , height: '40 feet'},
  {id: 4 , height: '50 feet'},
];

function findWhere(array, searchCriteria) {
    var found = array.find(item => item.height === Object.values(searchCriteria)[0]);
    return found;
}

findWhere(ladder,{ladder: '30 feet'});