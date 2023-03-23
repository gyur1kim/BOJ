var [testcase, ...apart] = `2
1
3
2
3`.split('\n').map(Number);

for(var i=0; i<testcase*2; i+=2){
    var apartment = [];
    var floor = apart[i], room = apart[i+1];
    for(var f=0; f<=floor; f++){
        apartment.push([1]);
        for(var r=1; r<room; r++){
            if(f===0){
                apartment[f].push(r+1);
            }
            else{
                apartment[f].push(apartment[f][r-1] + apartment[f-1][r]);
            }
        }
    }
    console.log(apartment[floor][room-1]);
}