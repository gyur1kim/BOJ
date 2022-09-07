let [N, K] = `100 5`.split(' ').map(Number);

/*
검색해보니, 나머지 분배법칙이라는 개념이 필요하다고 한다.
덧셈 : (x+y)%m = ((x%m)+(y%m))%m
곱셈 : (x*y)%m = ((x%m)*(y%m))%m
뺄셈 : (x-y)%m = ((x%m)-(y%m)+m)%m, 빼는 과정에서 음수가 나오는 것을 방지하기 위해 m을 더함
나눗셈 : 적용되지 않음..... 페르마의 소정리로 된다고 하긴 함
 */

// 일반적으로 생각하는 풀이!!
/*
let ans = 1;
for(let i=N; i>N-K; i--){    // i는 5, 4
    ans = (ans*i)/(N-i+1);
}
console.log(ans%10007);
 */

// 진짜 도저히 모르겠어서 검색한 인터넷 풀이!
// 파스칼의 이항계수 삼각형으로 풀었슴다... 그냥 더하기로 밀고가보자구~
let triangle = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
K = Math.min(K, N-K);
for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= i; j++) {
        if (j > K) break;
        if (i === j || j === 0) triangle[i][j] = 1;
        // 여기서 사용된 나머지 분배법칙!
        else triangle[i][j] = (triangle[i - 1][j - 1] + triangle[i - 1][j]) % 10007;
    }
}
console.log(triangle[N][K]);

// 아니면 BigInt로 푸는 방법도 있다~!!
// BigInt는 정수의 리터럴 뒤에 n을 붙이면 된다!!
// 단, bigint는 bigint끼리 계산하자!
let ans = BigInt(1);
N = BigInt(N);
K = BigInt(K);
for(let i=N; i>N-K; i--){    // i는 5, 4
    i = BigInt(i);
    ans = (ans*i)/(N-i+1n);
}
console.log((ans%10007n).toString());