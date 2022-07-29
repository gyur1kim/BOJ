let input = `ababc`;

outputSet = new Set();
for(let i=0; i<input.length; i++){
    for(let j=i; j<input.length; j++){
        outputSet.add(input.slice(i, j+1));
    }
}
console.log(outputSet.size)