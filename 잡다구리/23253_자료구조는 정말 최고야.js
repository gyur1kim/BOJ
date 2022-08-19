let [info, ...dummies] = `5 2
3
3 5 1
2
4 2`.split('\n');

function checkDummies(M, dummies){
    for(let i=0; i<M; i++){
        const n = +(dummies[i*2]);
        let bookStack = dummies[(i*2)+1].split(' ').map(Number);
        for(let j=0; j<n-1; j++){
            if(bookStack[j] < bookStack[j+1]){
                return 'No';
            }
        }
    }
    return 'Yes';
}

let [booksN, dummiesM] = info.split(' ').map(Number);
console.log(checkDummies(dummiesM, dummies));