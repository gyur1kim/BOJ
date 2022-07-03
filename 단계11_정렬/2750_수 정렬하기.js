var [n, ...input] = `5
5
2
3
4
1`.split('\n');

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
for(var i=1; i<n; i++){
    for(var j=0; j<n-i; j++){
        var num = input[j];
        var compare = input[j+1];
        if(num>compare){
            input[j+1]=num;
            input[j]=compare;
        }
    }
}
console.log(input);
