var input = `WA`
var time = 0;
// for(var i=0; i<input.length; i++){                          //switch문은 너무 코드길이가 길다!ㅜㅜ
//     var n = input[i];
//     var num = 0;
//     switch (n){
//         case'A': case'B': case'C': num = 3; break;
//         case'D': case'E': case'F': num = 4; break;
//         case'G': case'H': case'I': num = 5; break;
//         case'J': case'K': case'L': num = 6; break;
//         case'M': case'N': case'O': num = 7; break;
//         case'P': case'Q': case'R': case'S': num = 8; break;
//         case'T': case'U': case'V': num = 9; break;
//         case'W': case'X': case'Y': case'Z': num = 10; break;
//     }
//     time += num;
// }

var dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];      //시간은 절약됐다
var total = 0;
for(var i=0; i<input.length; i++){
    for(var j=0; j<dial.length; j++){
        if(dial[j].split('').includes(input[i])){
            total += j+3;
            break;
        }
    }
}
console.log(total);

// console.log(time);