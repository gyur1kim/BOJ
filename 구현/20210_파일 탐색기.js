/**
 * 문자열은 알파벳 대소문자와 숫자로만 이루어져 있다.
 * 숫자열이 알파벳보다 앞에 오고, 알파벳끼리는 AaBbCc...XxYyZz의 순서를 따른다.
 * 문자열을 비교하는 중 숫자가 있을 경우 그 다음에 오는 숫자를 최대한 많이 묶어 한 단위로 비교한다.
 *   예를 들어 "a12bc345"는 "a", "12", "b", "c", "345"의 다섯 단위로 이루어져 있다.
 * 숫자열끼리는 십진법으로 읽어서 더 작은 것이 앞에 온다. 이때 예제 2에서와 같이 값이 2^63을 초과할 수 있다.
 * 같은 값을 가지는 숫자열일 경우 앞에 따라붙는 0의 개수가 적은 것이 앞에 온다.
 */

/**
 * 대문자 A가 65, 소문자 a가 97
 * 대문자 Z가 90, 소문자 z가 122
 * @param {string} val 문자가 들어옵니다.
 * @returns 소문자이면 true, 대문자이면 false를 리턴합니다.
 */
const isLowerCase = val => {
  const code = val.charCodeAt(0);
  return 97 <= code && code <= 122;
};

/**
 * @param {string} val 문자열
 * @returns
 */
const isNumber = val => {
  const code = val.charCodeAt(0);
  return 48 <= code && code <= 57;
};

/**
 * 문자열을 하나하나 비교합니다.
 * @param {string} a 문자열 1 (짧은거)
 * @param {string} b 문자열 2 (긴거)
 */
const compareAlphabetic = (a, b) => {
  // 만약 b가 숫자면 b가 더 앞에 옴
  if (isNumber(b)) return 1;

  const LENS = Math.max(a.length, b.length);

  // 글자를 하나하나 쪼개서 비교
  for (let i = 0; i < LENS; i++) {
    if (a[i] === undefined) return -1; // a가 더 짧으면 a가 더 작은거임
    if (b[i] === undefined) return 1; // b가 더 짧으면 b가 더 작은거임

    // 같은 글자면 건너뜁니다.
    if (a[i] === b[i]) continue;

    // 소문자로 변환하여 유니코드를 봅니다.
    const aLower = a[i].toLowerCase().charCodeAt(0);
    const bLower = b[i].toLowerCase().charCodeAt(0);

    // 소문자로 변환했는데 값이 같으면, 둘 중 하나는 소문자이고 하나는 대문자입니다.
    // 만약 a가 소문자면, a가 더 큰 수가 됩니다.
    if (aLower === bLower) return isLowerCase(a[i]) ? 1 : -1;

    // 숫자가 큰 쪽이 뒤에 오는 문자입니다.
    return aLower - bLower;
  }

  // 비교했는데 글자가 똑같으면 그냥 그 순서 그대로
  return 0;
};

const compareNumber = (a, b) => {
  // b가 숫자가 아니면 a가 숫자이므로 더 앞에 옴.
  if (!isNumber(b)) return -1;

  let countZeroA = 0;
  let countZeroB = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== "0") break;
    countZeroA += 1;
  }

  for (let i = 0; i < b.length; i++) {
    if (b[i] !== "0") break;
    countZeroB += 1;
  }

  const bigIntA = BigInt(a);
  const bigIntB = BigInt(b);

  if (bigIntA === bigIntB) return countZeroA - countZeroB;
  return bigIntA < bigIntB ? -1 : 1;
};

const compareFunction = (a, b) => {
  const splitA = a.split(/(\d+)/).filter(x => x !== "");
  const splitB = b.split(/(\d+)/).filter(x => x !== "");
  const LENS = Math.max(splitA.length, splitB.length);

  let result = 0;
  for (let i = 0; i < LENS; i++) {
    if (splitA[i] === undefined) return -1;
    if (splitB[i] === undefined) return 1;

    // 숫자면
    if (isNumber(splitA[i])) result = compareNumber(splitA[i], splitB[i]);
    // 문자면
    else result = compareAlphabetic(splitA[i], splitB[i]);

    if (result !== 0) return result;
  }

  return 0;
};

const [N, ...input] = `2
a12bc345
a12bc345a`.split("\n");
input.sort(compareFunction);
console.log(input.join("\n"));
