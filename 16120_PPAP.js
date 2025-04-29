const input = `P`;

function checkPPAP(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    const w = input[i];

    if (w === "P") {
      result.push(w);
    }
    // A
    else {
      const nextW = input[i + 1];

      if (!nextW || nextW === "A") return false; // A가 마지막 글자면 안돼, 다음 글자가 A면 안돼

      // 현재까지 결과에서 마지막 2개가 PP이면, PPAP -> P로 변환
      if (result[result.length - 1] === "P" && result[result.length - 2] === "P") {
        result.pop();
        i += 1; // 현재 'A'고, 다음게 'P'인 경우를 다 처리한거니까.. i+1해서 PPA'P'를 건너뜀
      } else return false;
    }
  }

  return result;
}

const result = checkPPAP(input);
result.length === 1 && result[0] === "P" ? console.log("PPAP") : console.log("NP");
