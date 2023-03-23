let [input, scores] = `5 2
100 76 85 93 98`.split('\n');
const [students, cutline] = input.split(' ').map(Number);
// scores = scores.split(' ').map(Number);
// scores.sort((a, b)=>a-b);
scores = scores.split(' ').map(Number).sort((a, b)=>a-b);
console.log(scores[students-cutline]);