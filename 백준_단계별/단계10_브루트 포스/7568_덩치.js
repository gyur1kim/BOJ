var [n, ...size] = `4
6 10
4 2
6 4
10 6`.split('\n');
size = size.map(x=>x.split(' ').map(Number));

//문제 이해를 못해서 틀렸다!!!
//내가 생각한 것을 구현하긴 했지만.. 내 생각이 틀렸음!!
/*
1. 몸무게에서 max를 찾는다.
2. 키에서도 max를 찾는다.
3. 둘 다 max의 idx가 동일하면 그 친구가 1등이다.
4. max가 몸무게 , 키 다르면 걔네 둘 다 같은 등수...
 */
/*
var gradeArr = new Array(n);
var grade = 1;
var cnt = 0;
var weight = size.map(x=>+x[0]);
var height = size.map(x=>+x[1]);

for(var i=1; i<=n; i++){
    cnt++
    var heavy = weight.indexOf(Math.max(...weight));
    var tall = height.indexOf(Math.max(...height));
    if(heavy === tall){
        gradeArr[heavy] = grade;
        weight[heavy] = height[heavy] = 0;
        grade += cnt;
        cnt = 0;
    }
    else{
        gradeArr[heavy] = grade[tall] = grade;
        weight[heavy] = height[heavy] = 0;
    }
}
console.log(gradeArr.join(' '));
 */

console.log(size);
var gradeArr = new Array(n);
/*
0번부터 n-1번째까지 돌려본다.
0번일 때, 나보다 키도 크고 몸무게도 많이 나가는 사람 수를 센다.
그럼 gradeArr[0]에는 나보다 무거웠던 사람 수 +1을 작성한다.
 */
for(var i=0; i<n; i++){
    var cnt = 0;
    for(var j=0; j<n; j++){
        if(size[i][0] < size[j][0] && size[i][1] < size[j][1]) cnt++;
    }
    gradeArr[i] = ++cnt;
}
console.log(gradeArr.join(' '));