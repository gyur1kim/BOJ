let [...cases] = `8 16
32 4
17 5
0 0`.split('\n').map(x=>x.split(' ').map(Number));
// cases = cases.slice(0, cases.length-1);
cases.splice(cases.length-1, 1);
// for(let c of cases){
//     // let res = c[0]>c[1]? c[0]/c[1]: c[1]/c[0];
//     // if(Number.isInteger(res)){
//     //     console.log(c[0]>c[1]? 'multiple': 'factor');
//     // }
//     // else{
//     //     console.log('neither');
//     // }
//     if(c[0]>c[1]){
//         if(Number.isInteger(c[0]/c[1])){
//             console.log('multiple');
//             continue
//         }
//     }
//     else{
//         if(Number.isInteger(c[1]/c[0])){
//             console.log('factor');
//             continue
//         }
//     }
//     console.log('neither');
// }

//사실 케이스를 나눌 필요도 없었다..! 한 번씩 나누면 된다ㅜ
for(let c of cases){
    if(Number.isInteger(c[0]/c[1])){ console.log('multiple'); }
    else if(Number.isInteger(c[1]/c[0])){ console.log('factor'); }
    else{ console.log('neither'); }
}