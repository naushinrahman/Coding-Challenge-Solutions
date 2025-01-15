'''
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
'''


class Solution(object):
    def twoSum(self, nums, target):
       other_index = 0
       x_index = 0
       ret = []
       for i in range(len(nums)):
        x = target - nums[i]
        if x == nums[i]:
            if nums.count(x) > 1:
                x_index = nums.index(x)
                other_index = nums.index(x, x_index+1)
        elif nums.count(x) == 1:
            x_index = nums.index(x)
            other_index = i
        if x_index == other_index: continue

        ret.append(x_index) 
        ret.append(other_index)

        return ret
