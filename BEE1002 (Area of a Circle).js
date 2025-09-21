var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

const n = 3.14159;
const R = parseFloat(lines[0]);
const A = (n * R * R).toFixed(4);
console.log(`A=${A}`);

