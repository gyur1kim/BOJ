let [...board] = `XXXXXX`.split('');
board.push('.');
let cnt = 0
let isDone = true;
for(let i=0; i<board.length; i++){
    if(board[i]==='X'){
        cnt++;
        if(cnt===4){
            board.splice(i-3, 4, 'A', 'A', 'A', 'A');
            cnt = 0;
        }
    }
    else{
        if(cnt === 2){
            board.splice(i-2, 2, 'B', 'B');
            cnt = 0;
        }
        else if(cnt!==0){
            isDone = false;
            console.log(-1);
            break;
        }
    }
}
if(isDone) console.log(board.slice(0, board.length-1).join(''));


// 정규표현식을 알면 풀 수 있는 방안도 있다.
let board2 = `XXXXXX`;
// 글로벌하게 바꾸겠다는 뜻이다. 그냥 문자열은 1개만 바뀌므로 정규표현식을 이용해 모든 글자를 바꾼다.
// replace는 문자열을 바꾸는 메서드
board2 = board2.replace(/XXXX/g, 'AAAA');
board2 = board2.replace(/XX/g, 'BB');
console.log(board2.split('').includes('X')? -1: board2);