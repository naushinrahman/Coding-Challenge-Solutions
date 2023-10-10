//given an integer array, divid the array into 2 subsets A ans B while respecting the following conditions:
// -the intersection of A and B is null
// -the union of A and B is equal to the original array
// -the number of elements is subset A is minimal
// -the sum of A's elements is greater than the sum of B's elements
//Return the subset A in increasing order where the sum of A's elements is greater than the sum of B's elements. 
//If more than one subset exists, retunr the one with the maximal sum 

 function subsetA(arr) {
     for (var i = 0; i < arr.length; i++) { 
         for (var j = 0; j < (arr.length - i - 1); j++) { 
             if (arr[j] < arr[j + 1]) { 
                 var temp = arr[j] 
                 arr[j] = arr[j + 1] 
                 arr[j + 1] = temp 
             } 
         } 
     } 
     var sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
     console.log(sum)
     var subA = arr[0] + arr[1];
     console.log(subA)
     var counter = 2;
     if ((subA) > (sum - [subA])) {
         var subSetA = arr.slice(0, 2);
     } 
     else {
         while((subA) < (sum - [subA])) {
             subA += arr[counter];
             counter++;
         }
         var subSetA = arr.slice(0, counter);
     }
     for (var i = 0; i < subSetA.length; i++) { 
        for (var j = 0; j < (subSetA.length - i - 1); j++) { 
            if (arr[j] > subSetA[j + 1]) { 
                var temp = subSetA[j] 
                subSetA[j] = subSetA[j + 1] 
                subSetA[j + 1] = temp 
            } 
        } 
    } 
     return subSetA;
 }

//  console.log(subsetA([3,7,5,6,2]));
//  console.log(subsetA([5,3,2,4,1,2]));
//  console.log(subsetA([6,1,5,2,4])); 
 console.log(subsetA([10,7,22,14,28,17]));

