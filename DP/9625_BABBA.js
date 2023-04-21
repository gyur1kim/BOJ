let K = Number(`2`);


/*
 * A => B   (A 개수가 줄고 B 개수 증가)
 * B => BA  (A 개수가 증가 B 개수 유지)
 * 로 변화하는 규칙이 있다.
 * 1일 : A     1 0
 * 2일 : BA    1 1
 * 3일 : BA B  1 2
 * 4일 : BA B BA   2 3
 * 5일 : BA B BA BA B   3 5
 * 6일 : BA B BA BA B B BA B BA   5 8
 * => k일일 때, A갯수는 K-1일의 B만큼, B는 k-1일의 A+B만큼이다...
 * ....
 */

const memo = [1, 1];
if ( K === 1 ) {
  console.log('0 1')
}
else {
  while ( memo.length < K ) {
    memo.push(memo[memo.length-1] + memo[memo.length-2]);
  }
  console.log(`${memo[K-2]} ${memo[K-1]}`);
}