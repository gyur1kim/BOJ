var input =`3
happy
new
year`

var [n, ...words] = input.split('\n');
// var wordCount = 0;

// for(var i=0; i<n; i++){
//     var arr = [];
//     var word = words[i];
//     console.log(word);
//     for(var j=0; j<word.length; j++){
//         var w = word[j];
//         console.log(w);
//         console.log(arr);
//         if(arr.includes(w) && arr[j-1]!==w){
//             break;
//         }
//         else{
//             arr.push(w);
//         }
//         if(j === word.length-1){
//             console.log('그룹 단어 체크!');
//             wordCount++;
//         }
//     }
// }
// console.log(wordCount);


// var word = 'aabbaa';
// var arr = []
// for(var i=0; i<word.length; i++){
//     var n = word[i];
//     if(arr.includes(n) && arr[i-1]!==n){
//         console.log(`${n}은 나왔던거입니다`);
//         return;
//     }
//     else{
//         arr.push(n);
//     }
//     console.log(arr);
// }

//set의 has메소드를 이용한 방식이 있다!
var wordCount = n;
for(var i=0; i<n; i++){
    var word = words[i];
    var set = new Set(word[0]);
    for(var j=1; j<word.length; j++){
        if((set.has(word[j])) && word[j-1]!==word[j]){
            wordCount--;
            break;
        }
        set.add(word[j]);
    }
}
console.log(wordCount);