let n = +`100`;

for(let num=n; num>0; num--){
    num = num + '';
    let isGuemminsu = true
    for(n of num){
        if(n!=='4' && n!=='7'){
            isGuemminsu = false
            break
        }
    }
    if(isGuemminsu){
        console.log(num);
        break;
    }
}