var input = `100`;

var lastIdx = 1;
var line = 1;
while(lastIdx<input){
    line++;
    lastIdx += line;
}
if(line%2===0){
    console.log(`${line-(lastIdx-input)}/${1+(lastIdx-input)}`);
}
else{
    console.log(`${1+(lastIdx-input)}/${line-(lastIdx-input)}`);
}
