function GCD(big, small){
    let s = small;
    let GCD = 1;
    while(true){
        let n = big%s;
        if(n===0){
            GCD = s;
            break;
        }
        else{
            s = n;
        }
    }
    return (small*big)/GCD;
}

let [tc, ...input] = `3
1 45000
6 10
13 17`.split('\n');

for(let i=0; i<Number(tc); i++){
    let [A, B] = input[i].split(' ').map(Number);
    if(B > A){
        console.log(GCD(B, A));
    }
    else{
        console.log(GCD(A, B));
    }
}