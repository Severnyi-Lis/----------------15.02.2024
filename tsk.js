/*HTML + Js

В общественном транспорте действует система скидок.
Если Вы старше 50 лет или младше 14-ти - проезд
бесплатный. Если Вы студент (14-24 года),
проезд за полцены. Программа предлагает ввести год
рождения и тариф "час", "неделя", "месяц" или "год".
Час стоит 60 рублей, неделя 300 рублей, месяц 1000
рублей и год 10 тысяч для взрослого человека,
не попадающего в льготную категорию. Вычислить
стоимость проездного указанного тарифа для
рассматриваемого гражданина и вывести сообщение на экран.*/


var bir     = Number(document.querySelector('#birth'));
var cena    = document.querySelector('#cena');
var hour_1  = 60;
var week_2  = 300;
var month_3 = 1000;
var year_4  = 10000;
var result 

var dt= new Date().getFullYear();
var dat= dt-bir ;

function zzz(){
 if(dat<=14 || dat>=50){
  result == `Проезд бесплатный`;
 }else if(dat>= 14 && dat <= 24 && cena == 'hour'){
  result= hour_1/2;
 }else if(dat>= 14 && dat <= 24 && cena == 'week'){
  result= week_2/2;
 }else if(dat>= 14 && dat <= 24 && cena == 'month'){
  result= month_3/2;
 }else if(dat >= 14 && dat <= 24 && cena == 'year'){
  result= year_4/2;
 }else if(dat >= 25 && cena == 'hour'){
  result= hour_1;
 }else if(dat >= 25 && cena == 'week'){
  result= week_2;
 }else if(dat >= 25 && cena == 'month'){
  result= month_3;
 }else if(dat >= 25 && cena == 'year'){
  result= year_4;
 }
 f.innerHTML=result;
 return result
}