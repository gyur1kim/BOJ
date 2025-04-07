let [NK, ...students] = `6 3
CYNTHIA
LLOYD
STEVIE
KEVIN
MALCOLM
DABNEY`.split("\n");
let [N, K] = NK.split(" ").map(Number);
let answer = 0;

const friendsNameMap = new Map();

for (let i = 0; i < K; i++) {
  const len = students[i].length;
  friendsNameMap.set(len, (friendsNameMap.get(len) || 0) + 1);
}

for (let i = 0; i < N - 1; i++) {
  const myName = students[i];
  const newFriendName = students[i + K];

  friendsNameMap.set(myName.length, friendsNameMap.get(myName.length) - 1);
  if (newFriendName) friendsNameMap.set(newFriendName.length, (friendsNameMap.get(newFriendName.length) || 0) + 1);

  answer += friendsNameMap.get(myName.length);
}

console.log(answer);
