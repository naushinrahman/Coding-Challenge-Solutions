'''
write recursive form of sum series
ex sumSeries(2) = 3
ex sumSeries(4) = 10
'''

def sumSeries(x):
    if x == 1:
        return 1
    return x + sumSeries(x-1)

# print(sumSeries(4))
# print(sumSeries(7))


'''
write a recursive function that calculates the first n powers of 2
ex sumPowersOf2(2) = 6 
ex sumPowersOf2(3) = 14
'''

def sumPowersOf2(n):
    if n == 1:
        return 2
    return 2**n + sumPowersOf2(n-1)

# print(sumPowersOf2(5))
# print(sumPowersOf2(2))

