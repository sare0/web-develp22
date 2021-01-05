const bodyParser=require("body-parser");

const express = require("express");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');



//app.get('/' , function(req, res){
//res.send("Hoşgeldin Sare");});

app.get('/' , function(req, res){
res.sendFile(__dirname + "/index.html");

});


app.get('/iletisim' , function(req, res){
res.sendFile(__dirname +"/iletisim.html");
});

app.get('/giris' , function(req, res){
res.sendFile(__dirname +"/giris.html");

});

app.get("/profil" , function(req,res){
  res.send("Profilime hoşgeldin.Buraya normalde gelemezsin get ile geldiğin için izin verdim.");

});

app.post("/profil" , function(req,res){
if (req.body.kullaniciadi=="hamza" && req.body.sifre=="1234"){
  res.send("Hoşgeldiniz :" +req.body.kullaniciadi);
}else{
  res.send("böyle bir kullanıcı yok");
}

});

app.get ("/yazi", function(req,res){

  var gonderilecekler={
    baslik : 'Almanya Hükümetinden Açıklama' ,
    yorumsayisi : '30',
    yazar :'Recep Bey'
  };
  res.render('yazi' , gonderilecekler );
});
// urun sayfasi için bir tane istek oluşturun. urun sayfasina bağlanmak isteyen kişi için
// urun.ejs dosyasını render edin ve urun sayfasında da ürünün başlığı ve yorumsayisi olsun.

app.get ("/urun" , function(req,res){
var gonderilen ={
baslik1 : '5 Litre Yağ',
fiyat : '80tl',
yorum :'1125'
};
res.render('urun', gonderilen);
});
// kitap sayfasi için bir tane istek oluşturun. kitap sayfasına bağlanmak isteyn kişi için
// kitap.ejs dosyasını rnder edin ve kitap sayfasında kitap ismi, kitap yazarı, kitap açıklaması ve fiyatı olsun
app.get ("/kitap" , function(req,res){
var gonder={
  kitapİsmi : 'ŞEKER PORTAKALI',
  kitapYazari :'José Mauro De Vasconcelos',
  kitapAciklamasi :'..',
  kitapFiyati :'13.90 tl'
};
res.render('kitap' , gonder);

});


app.get("*" , function(req , res){
  res.send("Hataaa! Yanlış sayfadasınız, Lütfen tarayıcınızın ayarlarıyla oynayınız.");
});

app.listen(8000);
