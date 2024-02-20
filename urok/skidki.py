birth = input('Год рождения')
birth = int(birth)
age   = 2024-birth
hour  = 60
week  = 300
month = 1000
year  = 10000
price=''
if age<=14 or age>=50:
 print('Проезд бесплатный')
else:
 tarif=input('Введите тариф')
 if age >= 14 and age <=24 and tarif =='час':
  price = hour/2
 if age >= 14 and age<=24 and tarif  =='неделя':
  price = week/2
 if age >=14 and age <= 24 and tarif =='месяц':
  price  = month/2
 if age >= 14 and age<=24 and tarif  =='год':
  price  = year/2
 if age >= 25 and tarif =='час':
  price = hour
 if age >= 25 and tarif =='неделя':
  price = week
 if age >= 25 and tarif =='месяц':
  price = month
 if age >= 25 and tarif =='год':
  price = year
  print('Цена билета',price)