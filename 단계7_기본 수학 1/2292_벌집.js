// var room = [1];
var input = `1`;

//이 코드는 배열에 넣는거라서 메모리를 많이 잡아먹는당...(10156KB, 180ms)
// for(var i=1; i<=+input; i++){
//     room.push(room[i-1] + 6*i);
//     console.log(room);
//     if(+input === 1){
//         console.log(1);
//         break;
//     }
//     if(room[i-1]<+input && room[i]>=+input){
//         console.log(i+1);
//         break;
//     }
// }

var input = `58`;
//나름?숏코딩 메모리 면에서 더 효율적임(9580KB, 148ms)
var room = 1;
var i = 1;
while(room<input){      //방 개수가 input보다 작을 때 실행
    room = room + 6*i;  //방 개수가 늘어나는 규칙
    i++
}
console.log(i);