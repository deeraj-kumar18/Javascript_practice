function maximum_element(arr){
    let maximum_element1 = arr[0];
    for(let i = 1;i<arr.length;i++){
        if (arr[i]>maximum_element1){
             maximum_element1=arr[i];
         }
    }
    return  maximum_element1;
    
}

console.log("The Maximum number is " + maximum_element([1,2,4,5,6,7,8,34]));
