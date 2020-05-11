const fs = require('fs-extra');

const from = '../styles/scss';
const to = './styles/import';

console.log('Styles copying has been started');
if(fs.existsSync(to)) {
  fs.removeSync(to);
  console.log('Old styles has been removed');
}

if(fs.existsSync(from)) {
  fs.copySync(from, to);
  console.log('Styles has been copied');
}
console.log('Styles copying has been finished');