var input =`5
1 2 4 8 16`;
var [n, ...score] = input.split(/\s+/).map(Number);

var high = Math.max(...score);
var sum = 0;
for(var i in score){
    sum += (score[i]/high)*100;
}
console.log(sum/n);
