let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

console.log(a + b);