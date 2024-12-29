function solution(n, k, students) {
  const differenceList = [];

  // 학생들의 키 차이를 저장하는 배열
  for (let i = 0; i < n - 1; i++) {
    differenceList.push(students[i + 1] - students[i]);
  }

  // 이 키 차이 배열을 정렬해 (반대로 정렬해서 slice 편하게 함)
  differenceList.sort((a, b) => b - a);

  // 여기서 조 그룹 - 1 만큼 뒤에꺼 빼고 더해 (3조를 만드는거면 2번 자르니까.. k-1)
  const slicedList = differenceList.slice(k - 1);

  return slicedList.reduce((acc, cur) => acc + cur, 0);
}

const [N, K, ...inputs] = `5 3
1 3 5 6 10`
  .split(/\s/g)
  .map(Number);

const result = solution(N, K, inputs);
console.log(result);
