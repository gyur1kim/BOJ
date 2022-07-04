//버블 정렬, 선택 정렬, 삽입 정렬

var [n, ...input] = `2
100
1`.split('\n');
input=input.map(Number);
console.log(input);
//버블 정렬(최악)
/*
3 7 8 1 5
0 1번 비교한다.
앞에게 더 작으면 넘어간다.
1 2번 비교한다.
앞에게 더 작으면 넘어간다.
2 3번 비교한다.
앞에게 더 크므로 자리를 바꾼다.(3 7 1 8 5)
3 4번 비교한다.
앞에게 더 크므로 자리를 바꾼다.(3 7 1 8 5)
그다음은 0~3번까지 비교
그 다음은 0~2, 0 1번 비교하면 땡.
 */
/*
for(var i=1; i<n; i++){
    for(var j=0; j<n-i; j++){
        console.log(j, j+1);
        var num = input[j];
        var compare = input[j+1];
        if(num>compare){
            input[j+1]=num;
            input[j]=compare;
        }
    }
}
console.log(input.join('\n'));
 */

//선택 정렬
//가장 작은 값을 찾아서 맨 앞에 넣는다!

for(var i=0; i<n-1; i++){
    var min = tmp = input[i]
    var idx = i;
    for(var j=i+1; j<n; j++){
        if(input[j] < min){
            min = input[j];
            idx = j;
        }
    }
    input[i] = min;
    input[idx] = tmp;
}
console.log(input.join('\n'));
