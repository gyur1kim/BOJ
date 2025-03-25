// 2: {1, },
// 3: {7},
// 4: {4}
// 5: {2, 3, 5, },
// 6: {6, 9, 0}
// 7: {8}
function makeSmallest() {
  const DP = Array(101).fill(Infinity);
  DP[2] = 1;
  DP[3] = 7;
  DP[4] = 4;
  DP[5] = 2;
  DP[6] = 6;
  DP[7] = 8;
  const minArray = [Infinity, Infinity, 1, 7, 4, 2, 0, 8];
  for (let i = 8; i <= 101; i++) {
    const tmpList = [];
    for (let j = 2; j < 8; j++) {
      if (i - j < 2) break;

      let newNumber = (DP[i - j].toString() + minArray[j].toString()).split("");
      newNumber = newNumber.sort();

      if (newNumber[0] === "0") {
        for (let i = 1; i < newNumber.length; i++) {
          if (newNumber[i] !== "0") {
            newNumber[0] = newNumber[i];
            newNumber[i] = "0";
            break;
          }
        }
      }
      tmpList.push(parseInt(newNumber.join("")));
    }

    DP[i] = Math.min(...tmpList);
  }

  return DP;
}

// 가장 큰 숫자를 만드는건 쉬움.
// 계속 2를 뺌.. => 1
// 3이 남으면 그때 7을 붙임.
// 나머지가 0이 되면 그냥 1111111...
// 1의 개수 : x % 2 === 1? 7 한 개랑 Math.floor(x/2) - 1 : Math.floor(x/2)
// ex) 16개로 뭘 만드려면
function makeBiggest(num) {
  if (num % 2 === 1) {
    return `7${"1".repeat(Math.floor(num / 2) - 1)}`;
  }
  return "1".repeat(Math.floor(num / 2));
}

const [TC, ...inputs] = `4
3
6
7
15`
  .split("\n")
  .map(Number);

const DP = makeSmallest();
let answer = "";
for (let tc = 0; tc < TC; tc++) {
  const num = inputs[tc];

  answer += `${DP[num]} `;
  answer += `${makeBiggest(num)}\n`;
}
console.log(answer);
