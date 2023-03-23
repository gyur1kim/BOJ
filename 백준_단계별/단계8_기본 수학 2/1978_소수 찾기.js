var [count, ...nums] = `8
1 2 3 5 4 6 7 8`.split(/\s+/).map(Number);

nums.forEach((value)=>{
    if(value < 2){
        console.log(value)
        count--;
    }
    else{
        for(var i=2; i<=Math.floor(Math.sqrt(value)); i++){
            if(value%i===0){
                console.log(value)
                count--;
                break;
            }
        }
    }
});
console.log('count:', count);