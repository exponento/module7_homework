 function Electro (name)  {
    this.name = name,
    this.pitanie = '220V'
 };

 Electro.prototype.onElectro = function (name){
     console.log(`${name} включен`)
 };

 Electro.prototype.offElectro = function(name){
     console.log(`${name} выключен`)
 };


 function Utug (name, mosch){
    this.name = name,
    this.mosch = mosch
 };

 Utug.prototype.nagret = function (name){
     console.log(`${name} нагрет`)
 };


 function Tv (name, os) {
     this.name = name,
     this.os = os
     this.volume = function(name){
         console.log(`${name} громкость 50%`)
     }
 };


 Utug.prototype = new Electro();
 Tv.prototype = new Electro();

 const tefal = new Utug('Tefal', '2kW');
 const xiaomi = new Tv('Xiaomi', 'android');
 const lg = new Utug('LG', '1.5kW');
 const samsung = new Tv('Samsung', 'android');

//  tefal.onElectro('tefal');
 tefal.offElectro('tefal');
 lg.onElectro('LG');


//  xiaomi.onElectro('xiaomi');
xiaomi.volume ('xiaomi');
//  samsung.volume ('samsung');

//  console.log(tefal)
//  console.log(lg)
//  console.log(xiaomi)
 console.log(samsung)