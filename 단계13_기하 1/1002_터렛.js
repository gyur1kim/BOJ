let [testcases, ...coordinates] = `3
0 0 13 0 0 37
0 0 3 0 7 4
1 1 1 1 1 5`.split('\n');

coordinates = coordinates.map(x=>x.split(' ').map(Number));
console.log(coordinates);
for(let i=0; i<testcases; i++){
    let [x1, y1, r1, x2, y2, r2] = coordinates[i];
    if(x1===x2 && y1===y2){
        r1===r2? console.log(-1): console.log(0);
        continue;
    }

    let centerD = Math.sqrt((x1-x2)**2 + (y1-y2)**2);

    //작은원이 안에서 만나는지 밖에서 만나는지 체크
    if(centerD < Math.max(r1, r2)){   //원의 중점이 다른 원 내부에 위치
        let radiusD = Math.abs(r1 - r2);
        if(radiusD > centerD){
            console.log(0)
        }
        else if(radiusD === centerD){
            console.log(1);
        }
        else{
            console.log(2);
        }
    }
    else{
        let radiusD = r1 + r2;
        if(radiusD > centerD){
            console.log(2);
        }
        else if(radiusD === centerD){
            console.log(1);
        }
        else{
            console.log(0);
        }
    }
}
