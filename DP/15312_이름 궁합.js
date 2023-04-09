const AlphabetStroke = {
  A: 3,
  B: 2,
  C: 1,
  D: 2,
  E: 3,
  F: 3,
  G: 2,
  H: 3,
  I: 3,
  J: 2,
  K: 2,
  L: 1,
  M: 2,
  N: 2,
  O: 1,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 2,
  U: 1,
  V:1,
  W: 1,
  X: 2,
  Y: 2,
  Z: 1
}
let [nameA, nameB] = `PSH
KGR`.split('\n').map((name) => name.split(''));
let listName = nameA.reduce((acc, cur, idx) => acc.concat([AlphabetStroke[cur], AlphabetStroke[nameB[idx]]]), []);
while (true) {
  const newListName = []
  for(let i=0; i<listName.length-1; i++) {
    newListName.push((listName[i] + listName[i+1]) % 10);
  }
  listName = newListName;
  if (listName.length === 2) break;
}
// console.log(listName)
console.log(listName.join(''));