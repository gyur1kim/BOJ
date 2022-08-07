/*
그림이 어려워서 이해하기 어려웠지만, 간단하다!
두 점 중 하나만 원 안에 있으면 진입/이탈
두 점 모두 원 안에 있거나 원 안에 없으면 진입/이탈 안함
xor 문제인 것같다.

원 안에 있는지 없는지는 어떻게 아냐? 원의 중점과 출발/도착 지점의 거리를 재서 반지름보다 짧으면 안에 있는거고
반지름 이상이면 원 밖에 있는 것이다.(경계는 세지 않기로 했음)
input을 다루는 것이 좀 까다로운 듯하다.
 */
let [testcases, ...inputs] = `3
-5 1 5 1
3
0 0 2
-6 1 2
6 2 2
2 3 13 2
8
-3 -1 1
2 2 3
2 3 1
0 1 7
-4 5 1
12 1 1
12 1 2
12 1 3
102 16 19 -108
12
-107 175 135
-38 -115 42
140 23 70
148 -2 39
-198 -49 89
172 -151 39
-179 -52 43
148 42 150
176 0 10
153 68 120
-56 109 16
-187 -174 8`.split('\n');

let answer = ''
for(let i=0; i<testcases; i++) {
    let testcase = inputs.splice(0, Number(inputs[1]) +2);
    testcase = testcase.map(x=>x.split(' ').map(Number));

    let [startX, startY, finishX, finishY] = testcase[0];
    let crush = 0;
    for(let j=0; j<testcase[1]; j++){
        const [circleX, circleY, radius] = testcase[j+2];

        if(Math.sqrt((circleX-startX)**2 + (circleY-startY)**2)<radius ^ Math.sqrt((circleX-finishX)**2 + (circleY-finishY)**2)<radius){
            crush++;
        }
    }
    answer += crush+'\n';
}
console.log(answer);
/*
2
5
3
 */