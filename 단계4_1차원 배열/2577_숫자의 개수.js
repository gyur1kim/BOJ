var input =`150
266
427`
input = input.split('\n');
var answer = (input[0] * input[1] * input[2])+'';
var output = new Array(10).fill(0);
// for(var n of answer){
//     switch (+n) {
//         case 0: output[0] += 1; break;
//         case 1: output[1] += 1; break;
//         case 2: output[2] += 1; break;
//         case 3: output[3] += 1; break;
//         case 4: output[4] += 1; break;
//         case 5: output[5] += 1; break;
//         case 6: output[6] += 1; break;
//         case 7: output[7] += 1; break;
//         case 8: output[8] += 1; break;
//         case 9: output[9] += 1; break;
//     }
// }
for(var n of answer){
    output[n]++;
}
console.log(output.join('\n'));