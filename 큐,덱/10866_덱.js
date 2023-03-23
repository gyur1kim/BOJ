let [tc, ...commands] = `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`.split('\n');

let deque = [];
let output = '';
for(let i=0; i<+tc; i++){
    let command = commands[i].split(' ');
    switch(command[0]){
        case 'push_front':
            deque.splice(0, 0, command[1])
            break
        case 'push_back':
            deque.push(command[1])
            break
        case 'pop_front':
            output += deque.length? `${deque.shift()}\n`: '-1\n'
            break
        case 'pop_back':
            output += deque.length? `${deque.pop()}\n`: '-1\n'
            break
        case 'size':
            output += `${deque.length}\n`;
            break
        case 'empty':
            output += deque.length? '0\n': '1\n'
            break
        case 'front':
            output += deque.length? `${deque[0]}\n`: '-1\n'
            break
        case 'back':
            output += deque.length? `${deque[deque.length-1]}\n`: '-1\n'
            break
    }
}
console.log(output);