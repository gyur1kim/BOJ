let [price, things, ...receipts] = `250000
4
20000 5
30000 2
10000 6
5000 8`.split('\n');

receipts = receipts.map(x=>x.split(' ').map(Number));
console.log(receipts);
const ans = receipts.reduce((sum, thing)=> sum + (thing[0]*thing[1]), 0);
// ans === +price? console.log('Yes'): console.log('No');
console.log(ans === +price? 'Yes': 'No');