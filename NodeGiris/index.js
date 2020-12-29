// 'fs.js' dosyasını aldı getirdi, fileSystem değişkenine eşitledi.
const fileSystem   = require('fs');
const superheroes  = require('superheroes');

fileSystem.copyFileSync("dosya1.txt", "dosya2.txt");
var rastgeleKahraman = superheroes.random();
console.log(rastgeleKahraman);
