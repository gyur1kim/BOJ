let [N, r, c] = `10 512 512`.split(" ").map(Number);
let answer = 0;

while (N) {
  const next = 2 ** (N - 1);

  // 2
  if (r < next && c >= next) {
    answer += next ** 2;
    c -= next;
  }
  // 3이나 4
  else if (r >= next) {
    // 3
    if (c < next) {
      answer += next ** 2 * 2;
      r -= next;
    }
    // 4
    else {
      answer += next ** 2 * 3;
      r -= next;
      c -= next;
    }
  }

  N--;
}

console.log(answer);
