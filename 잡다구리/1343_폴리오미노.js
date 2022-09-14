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

