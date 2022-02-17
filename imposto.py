

def calc():
  p =  20000
  i = 1903.98
  if (p<i) :
    return 0
  elif( (p>i) and (p<=2826.65)):
    return round(p-i, 2)
  elif( p>2826.65 and p<= 3751.05 ):
    return round(p-i-922.67, 2) 
  elif (p>3751.05 and p<= 4664.68) :
    return round(p-i-922.67-924.40, 2) 
  if(p>4664.68 ):
    return round(p-i-922.67-924.40-913.63,2)

print(calc())