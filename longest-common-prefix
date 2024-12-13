/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 
Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.
*/

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ret;
        int n = 0;
        bool flag = true;
        char letter = strs[0][n];
        for (int i = 0; i < strs[0].length(); i++) {
        letter = strs[0][n];
            for(auto word : strs) {
                if (n >= word.length() || word[n] != letter) {
                    flag = false;
                }
            }
            if (flag == true) {
                ret+=letter;
                std::cout << ret << std::endl;
            }    
            n++;
        }
        return ret; 
    }
};
