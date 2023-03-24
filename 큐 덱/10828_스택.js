let [tc, ...commands] = `7
pop
top
push 123
top
pop
top
pop`.split('\n');

let stack = [];
let output = '';
for(let i=0; i<+tc; i++){
    let command = commands[i].split(' ');
    switch(command[0]){
        case 'push':
            stack.push(command[1])
            break
        case 'pop':
            output += stack.length? `${stack.pop()}\n`: '-1\n'
            break
        case 'size':
            output += `${stack.length}\n`;
            break
        case 'empty':
            output += stack.length? '0\n': '1\n'
            break
        case 'top':
            output += stack.length? `${stack[stack.length-1]}\n`: '-1\n'
            break
    }
}
console.log(output);