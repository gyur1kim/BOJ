var input =`5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;
var [n, ...ox] = input.split('\n');

/*
처음 짠건데 더 짧게 될듯?
for(var test of ox){
    var sumScore = 0;
    var score = 0;
    var total = 0;
    for(var idx in test){
        if(test[idx] === 'O'){
            score++;
            sumScore += score;
            if(idx == test.length-1){
                total += sumScore;
            }
        }
        else if(test[idx] === 'X'){
            if(test[idx-1]==='O'){
                total += sumScore;
                sumScore = 0;
                score = 0;
            }
        }
    }
    console.log(total);
}
 */

//X로 잘라서 O만 남겼다
for(var test of ox){
    var splitted = test.split('X');
    var sum = 0;
    splitted.map(o=>{
        var len = o.length;
        sum += len*(len+1)/2;
    })
    console.log(sum);
}