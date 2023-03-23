//버블 정렬, 선택 정렬, 삽입 정렬

var [n, ...input] = `5
5
8
4
2
9`.split('\n');
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
//가장 작은 값을 찾아서 맨 앞에 넣는다! 자리바꾸기
/*
for(var i=0; i<n-1; i++){
    var min = tmp = input[i]; //나중에 바꿔칠 값이라 tmp에 미리 저장함
    var idx = i;
    for(var j=i+1; j<n; j++){
        if(input[j] < min){ //현재 min보다 작은 것을 찾으면
            min = input[j]; //그것의 값을 min에 넣고
            idx = j;        //idx를 기억한다.
        }
    }
    input[i] = min;         //값 바꿔치기!, 앞자리에는 최소값
    input[idx] = tmp;       //원래 앞에 있던건 뒷자리로 값 바꿈
}
console.log(input.join('\n'));
 */

//삽입 정렬
//자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘
/*
5 8 2 4 3
idx 1부터 4까지 돌려볼거임, 각각 하나씩 비교할 때, 앞에꺼가 더 크면 뒤로 밀고, 다음것도 비교하고 그런당.
 */
for(var i=1; i<n; i++){
    var now = input[i];     //현재 볼 것
    for(var j=i-1; j>=0; j--){  //현재 볼 것 앞에서부터 0까지 돌려봐야지
        var compare = input[j];
        if(compare>now){
            input[j] = now;
            input[j+1] = compare;
        }
        else{
            break;
        }
    }
}
console.log(input.join('\n'));