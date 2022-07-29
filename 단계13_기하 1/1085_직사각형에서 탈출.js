const [x, y, w, h] = `653 375 1000 1000`.split(' ').map(Number);

const halfW = w/2;
const halfH = h/2;

xGo = x>halfW? w-x: x;
yGo = y>halfH? h-y: y;
output = xGo>yGo? yGo: xGo;
console.log(output);

// 나의 이 과정을 Math를 이용해 한번에 구할 수 있었다...
// Math.min(x, y, w-x, h-y)라는 아름다운 메서드가 존재했다.
// 생각해보니까 Math.max() 자주 사용한 것 같은데 왜 생각을 못했지?