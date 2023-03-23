let [tc, ...nums] =`2
6
22`.split('\n').map(Number);

let memo = [1, 1];
let ans = '';
for(let i=0; i<tc; i++){
    let num = nums[i];
    if(memo.length < num){
        let j = (memo.length)-1;
        while(memo.length < num){
            memo.push(memo[j]+memo[j-1]);
            j++;
        }
    }
    if(num===0){
        ans += `1 0\n`;
    }
    else if(num===1){
        ans += `0 1\n`;
    }
    else{
        ans += `${memo[num-2]} ${memo[num-1]}\n`;
    }
}
console.log(ans);