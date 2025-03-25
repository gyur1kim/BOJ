let [N, ...inputs] = `4
baba
aa
aabbb
aa`.split("\n");

const words = [];
inputs.forEach((word, idx) => {
  words.push({
    word,
    idx,
  });
});
words.sort((a, b) => a.idx - b.idx);

const answer = {
  length: -1,
  words: [
    { word: "", idx: 1000 },
    { word: "", idx: 1000 },
  ],
};

for (let i = 0; i < Number(N) - 1; i++) {
  for (let j = i + 1; j < Number(N); j++) {
    const word1 = words[i];
    const word2 = words[j];
    const WORD_LENGTH = Math.min(word1.word.length, word2.word.length);

    console.log("word1, word2 =>", word1, word2);
    if (word1.word === word2.word && WORD_LENGTH >= answer.length) {
      updateAnswer(word1, word2, WORD_LENGTH, answer);
      continue;
    }

    let allSameFlag = true;
    for (let k = 0; k < WORD_LENGTH; k++) {
      if (word1.word[k] === word2.word[k]) continue;

      if (answer.length <= k) updateAnswer(word1, word2, k, answer);
      allSameFlag = false;
      break;
    }

    if (allSameFlag && answer.length <= WORD_LENGTH) updateAnswer(word1, word2, WORD_LENGTH, answer);
  }
}

console.log(answer.words[0].word);
console.log(answer.words[1].word);

function getSortedIndex(words) {
  const indexArr = [];
  for (const word of words) {
    indexArr.push(wordsIndex.get(word));
  }

  return indexArr.sort((a, b) => a - b);
}

function updateAnswer(word1, word2, newLength, answer) {
  //접두사의 길이가 기존의 접두사 길이와 같다
  // -> 기존의 정답 단어의 index와 새로 찾은 단어와의 index를 비교하여 더 앞의 index로 갱신.
  const [frontIndex, backIndex] = [Math.min(word1.idx, word2.idx), Math.max(word1.idx, word2.idx)];
  if (answer.length === newLength) {
    const answerWord1Idx = answer.words[0].idx;
    const answerWord2Idx = answer.words[1].idx;

    if (frontIndex < answerWord1Idx || (frontIndex === answerWord1Idx && backIndex < answerWord2Idx)) {
      answer.words = [word1, word2];
    }
  }
  //접두사의 길이가 기존의 접두사 길이보다 길다 -> 접두사 길이, 단어 2개 갱신
  else answer.words = [word1, word2];

  answer.length = newLength;

  console.log(answer);
}
