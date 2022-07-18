// 내꺼에선 넘 잘돌아가는데.. 계속 에러난다 스트레스~~!
/*
var words = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.trim().split('\n').slice(1).map(x=>x.trim());
var sortedWords = new Array(51).fill(0).map(()=>new Array(0));
words = new Set(words);
words.forEach((v)=>{
    sortedWords[v.length].push(v);
    sortedWords[v.length].sort();
});
// sortedWords = sortedWords.filter(x=>x.length>0);
console.log(sortedWords.filter(x=>x.length>0).map(x=>x.join('\n')).join('\n'));
 */

var [n, ...words] = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours
`.trim().split('\n');
var unsortedWords = new Set(words.map(x=>x.trim()));
var sortedWords = Array.from(Array(51), ()=> new Array(0));
unsortedWords.forEach((v)=>{
    sortedWords[v.length].push(v);
    sortedWords[v.length].sort();
});
console.log(sortedWords);
console.log(sortedWords.filter(x=>x.length>0).map(x=>x.join('\n')).join('\n'));