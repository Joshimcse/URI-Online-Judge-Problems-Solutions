let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

console.log(parseInt(lines.shift()) - 2);