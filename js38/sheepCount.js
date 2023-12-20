const Test = require('chai').assert;

function countSheeps(arr) {
    // let sheepCounter = 0, falseCounter = 0;
    // for(i in arr){
    //     if(arr[i]===true)
    //         sheepCounter++;
        
    // }
    return arr.filter(Boolean).length;
  }

var array1 = [true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ];
                
//Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
console.log(countSheeps(array1));
console.log(Boolean(array1[3]));
  