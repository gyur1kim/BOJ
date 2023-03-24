let [tc, ...input] = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`.split('\n');

let ans = '';
for(let t = 0; t<tc; t++) {
    let [N, M] = input[2 * t].split(' ');
    let prints = input[2 * t + 1].split(' ').map(Number);
    let orderedPrints = [...prints].sort((a, b) => b - a);
    let q = prints[M];
    prints[M] = -1;
    let cnt = 0;
    for (const importance of orderedPrints) {
        if (importance === q) {     //내가 뽑아야하는 것의 중요도
            let idx = 0;
            while (prints[idx] !== -1) {
                if (prints[idx] === q) {
                    cnt++;
                }
                idx++;
            }
            cnt++;
            break
        } else {
            let idx = prints.indexOf(importance);
            prints = [...prints.slice(idx + 1), ...prints.slice(0, idx)];
            cnt++;
        }
    }
    ans += cnt + '\n';
}
console.log(ans);