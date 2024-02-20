var bir     = Number(document.querySelector('#birth'));
var cena    = document.querySelector('#cena');
var hour_1  = 60;
var week_2  = 300;
var month_3 = 1000;
var year_4  = 10000;
var result  = document.querySelector('#f')

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
}