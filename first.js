function sum(a=0,b=0,c=0) {
    let result = a + b + c;
    return result;
}
// console.log(sum(10,10,10));
let sumresult = sum(10,10,10);
console.log(sumresult);

function sum1(a,b,c){
    let result = a + b + c;
    console.log(result);
}
sum1(20,20,20)

function totalOfArray(arr=[]){
    let total = 0;
    for(let i = 0;i<arr.length;i++){
        // console.log(arr[i]);
        total = total + arr[i]
    }
    return total;
}
// totalOfArray([1,2,3,4,5])
const arr = [1,2,3,4,5]
console.log(totalOfArray(arr));

// console.log(how);
console.log(document.getElementById("how"));