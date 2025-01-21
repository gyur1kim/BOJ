function solution(target, m, n, pizzasA, pizzasB) {
  let answer = 0;

  const pizzasAMap = new Map([[pizzasA.reduce((acc, cur) => acc + cur, 0), 1]]);
  const pizzasBMap = new Map([[pizzasB.reduce((acc, cur) => acc + cur, 0), 1]]);

  prefixSum(m, pizzasA, pizzasAMap, target);
  prefixSum(n, pizzasB, pizzasBMap, target);

  pizzasAMap.has(target) ? (answer += pizzasAMap.get(target)) : 0; // a피자만으로 생성 가능?
  pizzasBMap.has(target) ? (answer += pizzasBMap.get(target)) : 0; // b피자만으로 생성 가능?
  // a피자와 b피자의 조합으로 가능?
  pizzasAMap.forEach((cnt, value) => {
    if (pizzasBMap.has(target - value)) {
      answer += cnt * pizzasBMap.get(target - value);
    }
  });

  console.log(answer);
}

function prefixSum(n, pizzas, pizzasMap, target) {
  const pizzasList = [...pizzas, ...pizzas];
  let prefixList = [];

  // 시작점을 바꾸는거야...
  for (let i = 0; i < n; i++) {
    // prefixList의 인덱스에 접근하는거야...
    for (let j = 0; j < n - 1; j++) {
      if (j === 0) {
        if (pizzasList[i] > target) break;
        prefixList.push(pizzasList[i]);
        setMap(pizzasMap, prefixList[j]);
        continue;
      }

      if (prefixList[j - 1] + pizzas[j + i] > target) break;
      prefixList.push(prefixList[j - 1] + pizzasList[j + i]);
      setMap(pizzasMap, prefixList[j]);
    }

    prefixList = [];
  }
}

function setMap(pizzasMap, value) {
  pizzasMap.set(value, (pizzasMap.get(value) || 0) + 1);
}

const [target, m, n, ...pizzas] = `7
5 3
2
2
1
7
2
6
8
3`
  .split(/\s/)
  .map(Number);

const pizzasA = pizzas.slice(0, m);
const pizzasB = pizzas.slice(m);

solution(target, m, n, pizzasA, pizzasB);
