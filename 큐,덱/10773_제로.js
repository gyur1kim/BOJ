let [N, ...nums] = `10
1
3
5
4
0
0
7
0
0
6`.split('\n').map(Number);

const rightNums = [];
for(let i=0; i<N; i++){
    if(nums[i]){
        rightNums.push(nums[i]);
    }
    else{
        rightNums.pop();
    }
}
console.log(rightNums.reduce((acc, cur)=> acc + cur, 0))