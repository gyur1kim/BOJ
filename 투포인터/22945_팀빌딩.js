const [N, ...inputs] = `4
1 4 2 5`
  .split(/\s+/)
  .map(Number);

let answer = 0;
let left = 0;
let right = N - 1;

while (left < right) {
  // 오른쪽 값이 더 작으면 오른쪽을 줄여보아용
  // 오른쪽이 더 작은데 왼쪽을 늘리면,,, 그냥 개발자 수만 작아지니깐
  if (inputs[right] < inputs[left]) {
    answer = Math.max(answer, inputs[right] * (right - left - 1));
    right--;
  }
  // 왼쪽 값이 더 작으면 왼쪽을 늘려보아용
  // 왼쪽이 더 작은데 오른쪽을 줄이면,, 개발자 수만 적어지잖아
  else {
    answer = Math.max(answer, inputs[left] * (right - left - 1));
    left++;
  }
}

console.log(answer);
