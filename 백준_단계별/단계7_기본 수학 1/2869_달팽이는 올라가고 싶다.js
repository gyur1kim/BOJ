var [go, down, height] = `2 1 5`.split(' ').map(Number);
var now = 0, day = 0;

//시간초과가 뜰 것이 분명하다..
while(now<height){
    day++;
    now += go;
    if(now>=height){
        console.log(day);
        break;
    }
    now-=down;
}

//아예 수학적으로 풀어버림, 통과(120ms)
day = Math.ceil((height-down)/(go-down));
console.log(day)