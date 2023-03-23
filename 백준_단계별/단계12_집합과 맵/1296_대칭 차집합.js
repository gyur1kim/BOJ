let [n, arrA, setB] = `3 5
1 2 4
1 2 4 6 7`.split('\n');
let [aLength, bLength] = n.split(' ').map(Number);

arrA = arrA.split(' ').map(Number);
setB = new Set(setB.split(' ').map(Number));
let countInter = 0
for(let i=0; i<aLength; i++){
    if(setB.has(arrA[i])) {
        countInter++;
    }
}

console.log(aLength + bLength - (2*countInter));