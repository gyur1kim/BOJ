var [size, ...input] = `10 10
BBBBBBBBBB
BBWBWBWBWB
BWBWBWBWBB
BBWBWBWBWB
BWBWBWBWBB
BBWBWBWBWB
BWBWBWBWBB
BBWBWBWBWB
BWBWBWBWBB
BBBBBBBBBB`.split('\n');
var [height, width] = size.split(' ').map(Number);
input = input.map(x=>x.split(''));

/*
var chess = [];
chess.push(input[0].slice(0, 8));
chess.push(input[1].slice(0, 8));
console.log(chess);
 */

/*
1. 8*8필터 만들기
2. 시작이 W일 때, B일 때로 비교(반복문 이용) 다른 개수만큼 count(count의 최댓값은 32개). min에 넣음
3. min보다 count가 커지면 바로 반복문 종료(더 이상 볼 필요가 없음)
 */
var min = 32;
for(var i=0; i<=width-8; i++){          //너비
    for(var j=0; j<=height-8; j++){     //높이
        var chess = [];
        var cnt = 0;
        for(var k=0; k<8; k++){         //j부터 j+7까지 볼거양
            if(k%2)
            input[j+k][i+k]
            // chess.push(input[j+k].slice(i, i+8));
        }
        console.log(chess);
        // var chess = '';
        // for(var k=0; k<8; k++){
        //     chess+= input[j+k].slice(i, i+8).join('');
        // }
        // console.log(chess);

        // var count = 0;
        // var m = n = 0;
        // //시작을 B로 할 때와 시작을 W로 할 때 나누기
        // if(chess[0][0] === 'B'){            //B로 시작함
        //     console.log('B로 시작함');
        //     while(count < min){
        //
        //     }
        // }
        // else if(chess[0][0] === 'W'){       //W로 시작함
        //     console.log('W로 시작함')
        // }
        /*
        wbwb,랑 bwbw...로 비교하기
        다를때마다 cnt, cnt한 값이 min(초기값 32)보다 커지면 더 이상 세지 않음
         */
        // var cnt = 0;
        // for(var idx=0; idx<64; idx++){      //BWBWBW가 기준
        //     if(cnt > min) break;
        //     if(idx%2===0){
        //         if(chess[idx] === 'W') cnt++;
        //     }
        //     else{
        //         if(chess[idx] === 'B') cnt++;
        //     }
        // }
        // min = cnt<min? cnt:min;
        // cnt = 0;
        // for(idx=0; idx<64; idx++){      //WBWBWB가 기준
        //     if(cnt > min) break;
        //     if(idx%2===0){
        //         if(chess[idx] === 'B') cnt++;
        //     }
        //     else{
        //         if(chess[idx] === 'W') cnt++;
        //     }
        // }
        // min = cnt<min? cnt:min;
    }
}
console.log(min);

