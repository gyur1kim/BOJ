let [NM, ...input] = `16 4
noj.am IU
acmicpc.net UAENA
startlink.io THEKINGOD
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr`.split('\n');

let [N, M] = NM.split(' ').map(Number);
const passwordMap = new Map();
for (let i=0; i<N; i++) {
  [url, password] = input[i].split(' ');
  passwordMap.set(url, password);
}
// let findArr = input.slice(N, N+M);  => 쓸데없는 배열 없앰으로서 메모리도 덜 차지하고 시간도 빠르다.
let answer = '';
for (let i=N; i<N+M; i++) {
  answer += passwordMap.get(input[i]) + '\n';
}

console.log(answer);