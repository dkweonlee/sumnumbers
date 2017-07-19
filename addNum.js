
function sumAll(arr) {
  arr = arr.sort();
  var together = []; 
  for(i=arr[0];i<=arr[1];i++){
    together.push(i);
}
var answer = together.reduce((a,b) => a + b);
  return console.log(answer);
}

// var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
// console.log(sum); // 6
sumAll([1, 4]);

