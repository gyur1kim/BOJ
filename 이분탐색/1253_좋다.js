function solution(N, numbers) {
  numbers.sort((a, b) => a - b);
  console.log(numbers);
  let answer = 0;

  for (let i = 0; i < N; i++) {
    const target = numbers[i];

    let start = 0;
    let end = N - 1;

    while (true) {
      // 다른 수여야 하므로 start나 end가 현재 보는 숫자랑 같으면 NO~
      if (i === start) start += 1;
      else if (i === end) end -= 1;

      // start가 end랑 같아지거나 넘어가면 노우노우~
      if (start >= end) break;

      const tmp = numbers[start] + numbers[end];

      if (tmp < target) {
        start += 1;
      } else if (tmp > target) {
        end -= 1;
      } else {
        answer += 1;
        break;
      }
    }
  }

  console.log(answer);
}

const [N, ...numbers] = `5
0 1 0 1 0`
  .split(/\s/)
  .map(Number);

solution(N, numbers);
