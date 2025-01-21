function solution(target, m, n, pizzaA, pizzaB) {
  let answer = 0;

  const pizzaAMap = new Map([
    [0, 1],
    [pizzaA.reduce((acc, cur) => acc + cur, 0), 1],
  ]);
  const pizzaBMap = new Map([
    [0, 1],
    [pizzaB.reduce((acc, cur) => acc + cur, 0), 1],
  ]);

  prefixSum(m, pizzaA, pizzaAMap, target);
  prefixSum(n, pizzaB, pizzaBMap, target);

  // a피자와 b피자의 조합으로 가능?
  pizzaAMap.forEach((cnt, value) => {
    if (pizzaBMap.has(target - value)) {
      answer += cnt * pizzaBMap.get(target - value);
    }
  });

  console.log(answer);
}

function prefixSum(n, pizza, pizzaMap, target) {
  // 시작점을 바꾸는거야...
  for (let i = 0; i < n; i++) {
    if (pizza[i] > target) continue;

    const prefixList = [pizza[i]];
    setMap(pizzaMap, pizza[i]);

    // prefixList의 인덱스에 접근하는거야...
    for (let j = 1; j < n - 1; j++) {
      const prefixPizza = prefixList[j - 1] + pizza[(j + i) % n];

      if (prefixPizza > target) break;

      prefixList.push(prefixPizza);
      setMap(pizzaMap, prefixPizza);
    }
  }
}

function setMap(pizzaMap, value) {
  pizzaMap.set(value, (pizzaMap.get(value) || 0) + 1);
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

const pizzaA = pizzas.slice(0, m);
const pizzaB = pizzas.slice(m);

solution(target, m, n, pizzaA, pizzaB);
