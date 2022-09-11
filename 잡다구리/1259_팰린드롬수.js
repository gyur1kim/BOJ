let [...nums] = `121
1231
12421
0`.split('\n');

// 싸피에서 하도 메소드 못쓰게 해서..........reverse도 이용하자!
// let i = 0;
// let res = '';
// while(nums[i] !== '0'){
//     let str = nums[i];
//     let isPalindrome = true;
//     for(let j=0; j<~~((str.length)/2); j++){
//         if(str[j] !== str[str.length-1-j]){
//             res += `no\n`;
//             isPalindrome = false;
//             break
//         }
//     }
//     if(isPalindrome){
//         res += `yes\n`;
//     }
//     i++;
// }
// console.log(res);

let i = 0;
let res = '';
while(nums[i] !== '0'){
    let str = nums[i];
    let front = str.substring(0, str.length/2);
    let rear = str.substring(Math.ceil(str.length/2));
    res += front === rear.split('').reverse().join('')? `yes\n` :`no\n`;
    i++;
}
console.log(res);