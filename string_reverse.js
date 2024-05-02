//  PROGRAM TO REVERSE A STRING.
function string_reverse(str){
    // USING FOR LOOP
    rev_string="";
    
    for(let i=str.length-1;i>=0;i--){
        rev_string+=str[i];
    }
    return rev_string;
    
}

function string_reverse(str){
    // UTILISING INBUILT METHODS
    rev_string=str.split('').reverse().join('');
    return rev_string;
}


let testcase1=string_reverse("dheeraj");
let testcase2=string_reverse("java");
let testcase3=string_reverse("javascript");
let testcase4=string_reverse("madam");
let testcase5=string_reverse("headphones");
console.log(testcase1,"\n",testcase2,"\n",testcase3,"\n",testcase4,"\n",testcase5);
