function solution(n, m, books) {
  books.sort((a, b) => a - b);

  const minusBooks = [];
  const plusBooks = [];

  for (const book of books) {
    if (book >= 0) plusBooks.push(book);
    else minusBooks.push(book);
  }

  let move = 0;

  let leftIndex = 0;
  while (leftIndex < minusBooks.length) {
    const leftValue = Math.abs(minusBooks[leftIndex]);
    leftIndex += m;
    move += leftValue * 2;
  }

  let rightIndex = plusBooks.length - 1;
  while (rightIndex >= 0) {
    const rightValue = plusBooks[rightIndex];
    rightIndex -= m;
    move += rightValue * 2;
  }

  if (Math.abs(books[0]) > Math.abs(books[n - 1])) move -= Math.abs(books[0]);
  else move -= Math.abs(books[n - 1]);

  return move;
}

const [n, m, ...books] = `9 49
2517 -4530 6994 -8058 1776 6667 -4288 4798 5945`
  .split(/\s/g)
  .map(Number);

const result = solution(n, m, books);
console.log(result);
