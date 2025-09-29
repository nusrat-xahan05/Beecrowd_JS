var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]) * 2
const B = parseFloat(lines[1]) * 3
const C = parseFloat(lines[2]) * 5

const MEDIA = ((A + B + C) / 10).toFixed(1)
console.log(`MEDIA = ${MEDIA}`);