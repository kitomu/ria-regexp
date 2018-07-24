//получаем массивы данных
const data = require('./data');
//Деструктуризация обекта данных
const { lang , obl , city , coast , obj_type , obj_class , room_amount } = data; 


//Сам парсер
function URLparse(url){
  return new RegExp(`/(${lang.join('|')})/`
                  +`novostroyki-`
                  +`(?:(${obl.join('(?=-oblast)|')}(?=-oblast))-oblast)?-?`
                  +`(${city.join('|')})?-?`
                 +`(?:rayon-([a-z]+))?-?`
                 +`(?:metro-([a-z]+))?-?`
                 +`(${coast.join('|')})?-?`
                 +`(vozle-metro)?-?`
                 +`(?:ulitsa-([a-z]+))?-?`
                 +`(sdannyye)?-?`
                 +`(stroyashchiyesya)?-?`
                 +`(${obj_type.join('|')})?-?`
                 +`(${obj_class.join('|')})?-?`
                 +`(${room_amount.join('|')})?-?`
                 +`(rassrochka)?-?`
                 +`(s-remontom)?` , 'gmi').exec(url)
}

//если есть родитель тогда експортим функцию
if (module.parent)
      module.exports = URLparse;