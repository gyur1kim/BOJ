let [tc, ...nums] = `5
1 6
3 7
6 2
7 100
9 635`.split('\n');

let ans = ''
for(let i = 0; i<+tc; i++){
    let [a, b] = nums[i].split(' ').map(Number);
    let aUnit = a%10;
    console.log(aUnit);

    let units = [];
    // if(units[aUnit].length === 0){
    //     units[aUnit].push(aUnit);
    //     while(units[aUnit][units[aUnit].length-1] !== aUnit**2){
    //         units[aUnit].push((aUnit**2)%10);
    //     }
    //     console.log(units);
    // }

    units.push(aUnit);
    while(units[units.length-1] !== (units[units.length-1]*aUnit)%10){
        units.push((units[units.length-1]*aUnit)%10);
    }
    console.log(units);

    let idx = b%(units.length);
    idx = (idx===0? units.length-1 : idx-1);
    ans += units[idx] + '\n';
}
console.log(ans);