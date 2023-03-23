let [fruit, ...grounds] = `7        
2 160     
3 30      
1 60      
3 20     
1 100       
  4 50    
`.trim().split('\n');
grounds = grounds.map(x=>x.trim().split(' ').map(Number));
console.log(grounds);
/*
한 번만 등장하는 것이 긴 변이다.
이 사각형을 반시계 방향으로 조사하므로,
긴거->긴거->짧은거(여기선 안꺾임)->짧은거(꺾이는 부분)->짧은거(꺾이는 부분)
그래서 젤 긴거를 찾으면 된당,
이므로 긴거*긴거 - 짧은거(꺾)*짧은거(꺾) = 밭넓이..가 나온다.
 */

let longest = 0;
let longestIdx = 0;
for(let i=0; i<6; i++){
    let ground = grounds[i];
    if(longest < ground[1]){
        longest = ground[1];
        longestIdx = i;
    }
}

let area = 0;
console.log(grounds[(6+longestIdx-1)%6][1]);  //6을 더하는 이유는, 만약 idx가 0이면 0-1은 -1이므로 없는 인덱스가 되거든..
console.log(grounds[(longestIdx+1)%6][1]);
if(grounds[(6+longestIdx-1)%6][1] > grounds[(longestIdx+1)%6][1]){
    area = longest*grounds[(6+longestIdx-1)%6][1] - grounds[(longestIdx+2)%6][1]*grounds[(longestIdx+3)%6][1];
}
else{
    area = longest*grounds[(longestIdx+1)%6][1] - grounds[(longestIdx+3)%6][1]*grounds[(longestIdx+4)%6][1];
}
console.log(area*fruit);