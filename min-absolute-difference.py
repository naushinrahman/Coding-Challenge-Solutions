# Getting the Minimum Absolute Difference
# Task

# Given an array of integers with at least 2 elements: a1, a2, a3, a4, ... aN

# The absolute difference between two array elements ai and aj, where i != j, is the absolute value of ai - aj.

# Return the minimum absolute difference (MAD) between any two elements in the array.
# Example

# For [-10, 0, -3, 1]
# the MAD is 1.
# Note that the same value can appear more than once in the array. In that case, the MAD will be 0.

def getting_mad(arr):
    temp = []
    count = False
    for i in range(len(arr)):
        if (arr.count(arr[i])> 1):
            count = True
    for i in range(len(arr)):
        for j in range(i+1):
            if (arr[i] != arr[j]):
                diff = arr[i] - arr[j]
                temp.append(diff)
    if (len(temp) > 0 and count == False):
        min = abs(temp[0])
        for i in range(len(temp)):
            if(abs(temp[i]) < min):
                min = abs(temp[i])
    else:
        min = 0
    return min
