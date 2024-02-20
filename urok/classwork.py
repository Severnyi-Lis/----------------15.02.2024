weather = input('Какая погода?')
t = int(input('А сколько градусов?'))
decision = ''
if weather == 'sun'and  t < 10:
        decision = 'оденемся потеплее и ' 
        decision += 'пойдём гулять'
if weather == 'rain' and t < 0:
        decision = 'Возьмём зонтик' 
        decision = 'Наденем кроссовки с шипами'
print(decision)
