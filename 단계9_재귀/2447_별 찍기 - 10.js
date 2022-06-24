var num = +`27`;
var lines = [];
/*
//함수
function printStars(num) {
    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            star(i, j, num);        //i행 j열에 별을 그리는 함수
        }
        lines.push("\n");           //한 행이 끝나면 줄바꿈
    }
}

//별을 그리는 함수
function star(i, j, num) {          //행과 열을 각각 3으로 나누었을 때 나머지가 1이면
    if(i%3 === 1 && j%3 === 1) {
        // (1,1), (1,4), (1,7)...=>9등분 했을 때 가운데
        lines.push(" ");        //빈 칸
    }
    else {
        if(num === 1) {             //num이 1이다 == 나눌 만큼 나눴는데 가운데 부분에 해당되지 않음
            lines.push("*");        //별을 찍는다.
        }
        else {                      //num이 1이 아니다 = 더 나눌 수 있다. => 이때 floor을 사용해서 가운데 크게 빈 부분은 다 스페이스로 나오게..
            star(Math.floor(i/3), Math.floor(j/3), Math.floor(num/3));
        }
    }
}
printStars(num);
console.log(lines.join(""));
 */

//인데 이거보다 짧게 가능하다.
function solve(n) {
    if (n === 1) {
        return ["*"];
    }
    const smaller = solve(n / 3);
    console.log(smaller);
    const a = smaller.map((x) => x.repeat(3));
    const b = smaller.map((x) => x + " ".repeat(x.length) + x);

    return [...a, ...b, ...a];
}

console.log(solve(num).join("\n"));
//천재 아닐까