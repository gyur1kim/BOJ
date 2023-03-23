var input=`39
40
41
42
43
44
82
83
84
85`;
input = input.split('\n');
var remainder = input.map(x=>x%42);
console.log(remainder);

var set = new Set(remainder);
console.log(set);
console.log(set.size);
//trim()안했다고 틀렸다...하