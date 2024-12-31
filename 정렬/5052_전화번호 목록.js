function solution(n, phoneNumbers) {
  // 문자열을 사전순으로 정렬해야 함
  // '1', '11111', '22'...
  // 따라서 sort((a, b) => a - b) 로 하면 안됨
  phoneNumbers.sort();

  console.log(phoneNumbers);

  for (let i = 1; i < n; i++) {
    // 시간초과
    // const number = phoneNumbers[i];
    // for (let j = i + 1; j < n; j++) {
    //   const compareNumber = phoneNumbers[j];
    //   const numberLength = number.length;
    //   const compare = compareNumber.slice(0, numberLength);
    //   if (number === compare) return "NO";
    // }

    if (phoneNumbers[i].startsWith(phoneNumbers[i - 1])) return "NO";
  }

  return "YES";
}

const [tc, ...input] = `1
3
811
81125
2563`.split("\n");

let idx = 0;
for (let t = 0; t < tc; t++) {
  const nextIdx = Number(input[idx]) + 1;
  const [n, ...phoneNumbers] = input.slice(idx, idx + nextIdx);

  const result = solution(Number(n), phoneNumbers);
  console.log(result);

  idx += nextIdx; // 누적
}
