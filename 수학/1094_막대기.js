let X = +`48`;
let b = new Array(...X.toString(2));
console.log(b.reduce((a, c)=> a+ +c, 0));