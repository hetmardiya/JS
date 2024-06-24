function sum(a=0,b=0,c=0) {
    let result = a + b + c;
    return result;
}
// console.log(sum(10,10,10));
let sumresult = sum(10,10,10);
// console.log(sumresult);

function sum1(a,b,c){
    let result = a + b + c;
    // console.log(result);
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
// const arr = [1,2,3,4,5]
// console.log(totalOfArray(arr));

// console.log(how);
// console.log(document.getElementById("how"));

// to get the body part
// console.log(document.body)

// to get the head part
// console.log(document.head);

// to get the whole html code
// console.log(document.documentElement);

// to access first element of body
// console.log(document.body.firstElementChild);

// to convert a list into an array
// console.log(document.body.children);

// let arr = document.body.children;
// let newArray = Array.from(arr)
// console.log(newArray);

// for(let i=0;i<newArray.length;i++){
//     console.log(newArray[i]);
// }
// console.log(document.getElementById("how"));
// console.log(document.getElementsByClassName("are"));
// console.log(document.getElementsByTagName("span"));

// to change the text content from here
// let a = document.getElementsByTagName("span");
// a[0].textContent="hello again"
// console.log(a[0]);

// query selector to change the content
// let a = document.querySelector(".are");
// a.textContent="none"

// get attribute by id name
// let a = document.getElementById("how");
// console.log(a.getAttribute("id"));


// these two functions is for adding and deleting heading like ===>>> TO-DO LIST
// let mybtn = document.getElementById("mybtn");

// function heading(){
//     let h2 = document.createElement("h2")
//     h2.innerText = "heading";
//     document.body.append(h2);
// }
// mybtn.onclick = heading;

// let D_button = document.querySelectorAll("button");

// function deleteButton(){
//     let h2 = document.querySelector("h2")
//     h2.remove();
// }
// D_button[1].onclick = deleteButton;

// discuss some methods of array
// let arr = [2,4,6,8,10]

// let result_find = arr.find((value,index)=>{
//     if (value > 6) {
//         return value;
//     }
// })
// console.log(result_find);

// let result_filter = arr.filter((value,index)=>{
//     if (value > 6) {
//         return value;
//     }
// })
// console.log(result_filter);

// let result_every = arr.every((value,index)=>{
//     if (value > 6) {
//         return value;
//     }
// })
// console.log(result_every);

// let result_some = arr.some((value,index)=>{
//     if (value > 6) {
//         return value;
//     }
// })
// console.log(result_some);

// string methods==========================================
// let gname = new String("hello");
// console.log(gname);
// console.log(gname.toUpperCase());
// console.log(gname.charAt(2));
// console.log(gname.indexOf("o"));
// // split use in find a percentage in calculator method
// console.log(gname.split("e"));
// // in slice you can use nagative values like slice(-8,4)
// console.log(gname.slice(0,4));
// // in substring method you can't use nagative values
// console.log(gname.substring(0,4));
// console.log(gname.replace("l","t"));
// console.log(gname.includes("hel"));


// number methods========================================
let a = 100;
let b = new Number(100);
let c = Number(100);
console.log(a);
console.log(b);
console.log(typeof(b));

let d = 123.879;
console.log(d.toFixed(2));
console.log(d.toPrecision(4));

let e = 10000000;
console.log(e.toLocaleString());
console.log(e.toLocaleString("en-US"));
