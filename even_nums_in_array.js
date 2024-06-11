//  PROGRAM TO LIST OUT THE EVEN NUMBERS IN AN ARRAY.
function even_nums(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            res.push(arr[i]);
        }
    }
    return res;
}

let testcase1 = even_nums([1,2,3,4,5,5,6,43,657,23,223]);
let testcase2 = even_nums([134,54,564,6,56,56,4,54,3]);
let testcase3 = even_nums([354,54,36,36,356,3243,13,431,43,12]);
let testcase4 = even_nums([432,54,65,87,2,32,54,76,23]);
let testcase5 = even_nums([2,4,6,8,10,12,14,16,18,20]);
console.log(testcase1);
console.log(testcase2);
console.log(testcase3);
console.log(testcase4);
console.log(testcase5);