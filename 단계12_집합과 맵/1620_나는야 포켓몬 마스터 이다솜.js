let [n, m, ...input] = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`.split(/\s+/);
const pokemons = input.splice(0, Number(n));
const pokemons_obj = {};    //포켓몬: 번호


//파이썬의 enumerate랑 비슷한 메서드가 entries가 있음(혹은 map함수에서 val, idx를 인자로 넣을 수도 있다)
for([idx, val] of pokemons.entries()){
    pokemons_obj[val] = idx+1;
}
let answer = '';
for(let pokemon of input){
    //answer += isNaN(+pokemon)? pokemons_obj_name[pokemon]+'\n' : pokemons_obj_idx[pokemon]+'\n';
    answer += (pokemons_obj[pokemon] || pokemons[pokemon-1]) + '\n';
}
console.log(answer);