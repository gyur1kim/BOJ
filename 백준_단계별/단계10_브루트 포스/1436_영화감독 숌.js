var input = +`500`;

var cnt = 0;
var num = 666;
while(cnt <input){
    if((num+'').includes('666')){
        cnt++;
    }
    if(cnt === input) break;
    num++;
}
console.log(num);
// var strnum = 16666+'';
// if(strnum.includes('666')){
//     console.log('666이 들어있어용');
// }