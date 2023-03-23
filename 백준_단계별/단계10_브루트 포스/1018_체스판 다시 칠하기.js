var [height, width, ...input] = `9 23
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBW`.split(/\s/);
input = input.map(x=>x.split(''));

/*
1. 8*8씩 뽑아내기
2. 시작이 W일 때, B일 때로 비교(반복문 이용) 다른 개수만큼 count(count의 최댓값은 32개). min에 넣음
3. min보다 count가 커지면 바로 반복문 종료(더 이상 볼 필요가 없음)
 */
//정답입니다! 메모리는 13176KB, 시간은 212ms 더 줄일 수 있을 것 같다.
// var min = 32;  //결과적으로 얻어야 하는 최소 변경값. default=32
//
// for(var i=0; i<=width-8; i++){          //너비
//     for(var j=0; j<=height-8; j++){     //높이
//         var answer = [];
//         for(var k=0; k<8; k++){
//             answer.push(input[j+k].slice(i, i+8).join(''));
//         }
//         /*
//         짝수 행이면 WBWBWBWB(cnt1) or BWBWBWBW(cnt2)
//         홀수 행이면 BWBWBWBW(cnt1) or WBWBWBWB(cnt2) => 이거는 어차피 B아니면 W여서 하나만 구해도 다른 하나가 자동으로 나온다!!
//         우선 짝수 행인지 홀수 행인지부터 구해야 한다....!
//          */
//         var cnt = 0;
//         var str = '';
//         for(var col=0; col<8; col++){
//             if(col%2===0){      //홀수 행일 때
//                 for(var row=0; row<8; row++){
//                     str = 'WBWBWBWB'
//                     if(str[row] !== answer[col][row]) cnt++;
//                 }
//             }
//             else{               //짝수 행일 때
//                 for(var row=0; row<8; row++){
//                     str = 'BWBWBWBW'
//                     if(str[row] !== answer[col][row]) cnt++;
//                 }
//             }
//         }
//         var thisMin = cnt>32? 64-cnt:cnt;
//         min = thisMin>min? min:thisMin;
//     }
// }
// console.log(min);

/*
1. 8*8만큼 뽑아낸다.
2. 행이 홀수일 때, 짝수일 때 나눠서 비교한다 BWBWBWBW(홀수 행) WBWBWBWB(짝수 행)
3. 다르면 cnt를 올린다.
4. 여기서 가장 중요한 것! cnt는 절대 32를 넘길 수 없다. 왜냐면 B아니면 W이기 때문에...
   그래서 홀수 행에서 WBWBWBWB도 따져봐야 하는 거 아닌가? 싶지만 어쨌든 전체 cnt의 수는 64(8*8)로 동일하다.
   BWBWBWBW여기서 바뀐다는 말은 WBWBWBWB에서는 안바뀐다는 뜻이기 때문이다.
5. cnt>32? 64-cnt:cnt로 구한다.
6. 현재까지 나온 min값과 비교한다.
 */
var min = 32;  //결과적으로 얻어야 하는 최소 변경값. default=32
var rowOdd = 'WBWBWBWB';
var rowEven = 'BWBWBWBW';
for(var i=0; i<=+width-8; i++){          //너비
    for(var j=0; j<=+height-8; j++){     //높이
        var cnt = 0;
        for(var k=0; k<8; k++){
            var chess = input[j+k].slice(i, i+8).join('');
            for(var l=0; l<8; l++){
                if(k%2===0){    //홀수 번째 행과 비교
                    if(chess[l]!==rowOdd[l]) cnt++;
                }
                else{
                    if(chess[l]!==rowEven[l]) cnt++;
                }
            }
        }
        cnt = cnt>32? 64-cnt: cnt;
        min = min>cnt? cnt:min;
    }
}
console.log(min);
