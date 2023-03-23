var [...num] = `999998999`.split('').map(Number);
console.log(num);
num = num.sort((a, b)=> b-a);
console.log(num.join(''));