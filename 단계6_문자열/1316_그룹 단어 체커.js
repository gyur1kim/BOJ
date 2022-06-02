var input =`5
ab
aa
aca
ba
bb`

var [n, ...words] = input.split('\n');
var alphabet = new Array(26).fill(true);

for(var i=0; i<n; i++){
    var word = words[i];
    var wordLen = word.length;
    var now = words[i];
    var next = words[i+1];

}