let [n, ...commands] = `26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1`.split('\n');

let set = new Set();

for (let i=0; i<n; i++) {
  let [command, val] = commands[i].split(' ');
  switch (command) {
    case 'add':
      set.add(+val);
      break;
    case 'remove':
      set.delete(+val)
      break;
    case 'check':
      set.has(+val)? console.log(1) : console.log(0);
      break;
    case 'toggle':
      set.has(+val)? set.delete(+val) : set.add(+val);
      break;
    case 'all':
      for (let i=1; i<21; i++) set.add(i);
      break;
    case 'empty':
      set.clear();
      break;
  }
}