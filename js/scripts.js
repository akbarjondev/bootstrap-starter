const foo = {name: 'Ali', age: 45}
const bar = {name: 'Vali', age: 35}
const soo = {name: 'Salim', age: 40}

// console.log('%c My friends', 'color: orangered; font-weight: bold;') // consoleda CSS yozish
// console.log({foo, bar, soo}); // yaxshi


// console.log('%c My friends on the table', 'color: blue; font-weight: bold;') // consoleda CSS yozish
// console.table([foo, bar, soo]);


// console.log('%c Is work?', 'color: green; font-weight: bold;') // consoleda CSS yozish
// console.log('Yes it works!')

//**Benchmarking perfomance**//
console.time('loop');

for(let i = 0; i < 2000000; i++) {

}

console.timeEnd('loop');

console.time('while');
let i = 0;
while(i < 500000) {i++}
console.timeEnd('while');