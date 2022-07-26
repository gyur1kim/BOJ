let [n, arrA, setB] = `3 5
1 2 4
1 2 4 6 7`.split('\n');
let [aLength, bLength] = n.split(' ').map(Number);

arrA = arrA.split(' ').map(Number);
setB = new Set(setB.split(' ').map(Number));
console.log(arrA);
console.log(setB);
let countInter = 0
for(let i=0; i<aLength; i++){
    if(setB.has(arrA[i])) {
        console.log(`${arrA[i]}가 집합B 안에 들어있어요`)
        countInter++;
    }
}

console.log(aLength + bLength - (2*countInter));