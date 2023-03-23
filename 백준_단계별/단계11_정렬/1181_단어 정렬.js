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

//더 짤막하고 간결하게 완성,,!
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
var unsortedWords = Array.from(new Set(words.map(x=>x.trim())));
sortedWords = unsortedWords.sort().sort((a, b)=> a.length-b.length);
console.log(sortedWords.join('\n'));
