let [...testcases] = `6 8 10
25 52 60
5 12 13
0 0 0`.split('\n').map(x=>x.split(' '));

for(let i=0; i<testcases.length-1; i++){
    let testcase = testcases[i]
    let j = 0;
    while (j < 3){
        if (testcase[j]**2 === testcase[(j+1)%3]**2 + testcase[(j+2)%3]**2){
            console.log('right');
            break
        }
        j++;
    }
    if( j == 3){
        console.log('wrong');
    }
}

//아예 정렬을 하면, 맨 뒤에 값이 가장 큰 값이 된다. 이것을 이용하면 더 빠름
for(let i=0; i<testcases.length-1; i++){
    let test = testcases[i]
    test.sort((a, b)=> a-b);
    result = test[2]**2 === test[0]**2 + test[1]**2? 'right': 'wrong';
    console.log(result);
}