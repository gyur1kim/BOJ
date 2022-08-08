let [ground, ...players] = `24 100 -62 71 8
-63 109
-26 164
-9 91
-113 80
-124 75
-95 140
-89 116
-55 113`.split('\n');

const [w, h, x, y, p] = ground.split(' ').map(Number);
const r = h/2;
let playerNum = 0

/*
플레이어가 돌아다닐 수 있는 영역은,
1. 사각형, x~x+w, y~y+h
다음, 양쪽 원이 있는데 원의 r은 h/2이다.
2. 왼쪽 원, x-r~x, 중점은 x, y+(h/2)
3. 오른족 원, x+w~x+w+r, 중점은 x+w, y+(h/2)
 */

for(let i=0; i<p; i++){
    const [playerX, playerY] = players[i].split(' ').map(Number);

    if((playerX-x)**2 + (playerY-(y+r))**2 <= r**2 || (playerX-(x+w))**2 + (playerY-(y+r))**2 <= r**2 ){
        playerNum++;
    }
    else if((playerX >= x && playerX <=x+w) && (playerY>=y && playerY<=y+h)){
        playerNum++;
    }
}
console.log(playerNum);