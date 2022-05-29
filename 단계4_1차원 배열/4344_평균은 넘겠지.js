var input =`5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91` ;
var [num, ...test] = input.split('\n');
test = test.map(x => x.split(' ').map(Number).slice(1));
test.map(c=>{
    var sum = c.reduce((acc, cur)=>acc+cur);
    var avg = sum/(c.length);
    var overAvg = c.filter(student => student>avg);
    var overPercent = overAvg.length / c.length;
    overPercent = (overPercent*100).toFixed(3)
    console.log(`${overPercent}%`);
})
// for(var score in test)