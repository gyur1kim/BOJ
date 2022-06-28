var [m, list] = `3 20
1 4 7`.split('\n').map(x=>x.split(' ').map(Number));

var n = list.length;
m = m[1];

//brute force는 '무식한 힘' 이라는 뜻, 완전 탐색을 뜻한다.
var f = 0, s = 1, t = 2;
var max = 0;
/*
1. 첫번째, 두번째, 세번째를 더한다.
2. 세번째가 배열의 길이를 넘어서면(t === n이 되면)
   두 번째를 하나 키우고, 세 번째는 두 번째보다 하나 키운다.
3. 두 번째가 마지막까지 다다르면 (s === n-1 되면)
   첫번째를 하나 키우고, 두 번째는 첫 번째보다 하나 크고, 세 번째는 두 번째보다 하나 크다.
4. 첫 번째가 마지막에 다다르면(f === n-2가 되면)
   반복문을 종료하고 max를 출력한다.
 */

while(true){
    if(t === n){
        s++;
        t = s+1;
    }
    if(s === n-1){
        f++;
        s = f+1;
        t = s+1;
        if(f >= n-2) break;
    }
    if(f === n-2) break;

    var sum = list[f]+list[s]+list[t];
    if(sum > max && sum <= m){
        max = sum;
    }
    t++;
}
console.log(max);
//사실 3중 for문으로 써도 됨...