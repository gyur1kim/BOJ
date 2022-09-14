// function foo(tmp){
//     if(tmp.length === M){
//         ans += `${tmp.join(' ')}\n`;
//         return
//     }
//
//     for(let j=1; j<=N; j++){
//         if(tmp.length !== 0){
//             if(tmp[tmp.length-1]<=j){
//                 tmp.push(j);
//             }
//             else{
//                 continue;
//             }
//         }
//         else{
//             tmp.push(j);
//         }
//         foo(tmp);
//         tmp.pop();
//     }
// }

let [N, M] = `3 3`.split(' ').map(Number);
// let ans = '';
// const tmp = [];
// foo(tmp);
// console.log(ans);


// 숏코딩에서 주워온 코드.... 똑똑해용
let output = "";
let pool = [];
function search(deps, s){
    if(deps === M){
        output += pool.join(' ') + '\n';
        return;
    }

    for(let i=s; i<=N; i++){
        pool.push(i);
        search(deps+1, i);
        pool.pop();
    }
}
search(0, 1);
console.log(output);


