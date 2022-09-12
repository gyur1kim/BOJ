let [tc, ...commands] = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`.split('\n');

let queue = [];
let output = '';
for(let i=0; i<+tc; i++){
    let command = commands[i].split(' ');
    switch(command[0]){
        case 'push':
            queue.push(command[1])
            break
        case 'pop':
            output += queue.length? `${queue.shift()}\n`: '-1\n'
            break
        case 'size':
            output += `${queue.length}\n`;
            break
        case 'empty':
            output += queue.length? '0\n': '1\n'
            break
        case 'back':
            output += queue.length? `${queue[queue.length-1]}\n`: '-1\n'
            break
        case 'front':
            output += queue.length? `${queue[0]}\n`: '-1\n'
            break
    }
}
console.log(output);