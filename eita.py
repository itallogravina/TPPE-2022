import numpy as np

vi=1000.00
j=8.50/100
n=60.00/365
ir=22.50/100
def calc(vi,j,n,ir):
  vb=vi*(1+j)**n
  vr=(vb-vi)*ir
  vl=vb-vr
  vf=((vl/vi)*100)-100

def jinc(x):
    if x == 0.0:
        return 1
    return 2*j1(x)/x

jinc = np.vectorize(jinc)

print(jinc)