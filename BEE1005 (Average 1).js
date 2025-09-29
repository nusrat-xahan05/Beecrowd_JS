var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]) * 3.5
const B = parseFloat(lines[1]) * 7.5

const MEDIA = ((A + B) / 11).toFixed(5)
console.log(`MEDIA = ${MEDIA}`);
