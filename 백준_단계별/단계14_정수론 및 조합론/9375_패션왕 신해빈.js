let [tc, ...input] = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`.split('\n');

let ans = ''
for(let i=0; i<+tc; i++){
    let n = Number(input.splice(0, 1));
    let clothes = input.splice(0, n);
    let clothesMap = new Map();
    for(let j=0; j<n; j++){
        let [_, type] = clothes[j].split(' ');
        clothesMap.set(type, (clothesMap.get(type)+1||1));
    }
    let nums = 1
    for(let types of clothesMap.values()){
        nums *= (types+1)
    }
    ans += `${nums-1}\n`;
}
console.log(ans);