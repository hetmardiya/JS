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
// let a = 100;
// let b = new Number(100);
// let c = Number(100);
// console.log(a);
// console.log(b);
// console.log(typeof(b));

// let d = 123.879;
// console.log(d.toFixed(2));
// console.log(d.toPrecision(4));

// let e = 10000000;
// console.log(e.toLocaleString());
// console.log(e.toLocaleString("en-US"));

// DATE methods========================================
// let f = new Date(Date.UTC(2024,0,25,14,35,13));
// console.log(f.toLocaleString("en-IN" , {timeZone:'UTC'}));
// console.log(f.toUTCString());

// let current = new Date()
// // console.log(current);
// let fulldate = current.toLocaleString(('en-US'),{
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     // second: '2-digit',
//     weekday: 'long',
//     hourCycle: 'h23'
// })
// console.log(fulldate);
// let live_date = document.querySelector(".date h2");
// live_date.textContent = fulldate;

// to get the date in simple formate
// let mydate = new Date(2023,0,14)
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString(("en-IN") , {
//     // year: 'numeric',
//     // month: 'long',
//     // day: '2-digit'
//     dateStyle: 'long'
// }));

// let cdate = new Date();
// let year = cdate.getFullYear()
// let month = cdate.getMonth() + 1;
// let date = cdate.getDate();
// let day = cdate.getDay();
// console.log(`year is ${year} || month is ${month} || date is ${date} || day is ${day}`);

// to get the current date with proper description <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let currentDate = ()=>{
//     let cDate = new Date();
//     let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
//     let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

//     let year = cDate.getFullYear();
//     let month = months[cDate.getMonth()]
//     let date = cDate.getDate();
//     let day = days[cDate.getDay()];

//     console.log(`year is ${year} || month is ${month} || date is ${date} || day is ${day}`);
// }

// currentDate();

// MATH methods========================================
// console.log("abs method = " + Math.abs(-4));
// console.log("round method = " + Math.round(-4.6));
// console.log("round method = " + Math.round(4.6));
// console.log("ceil method = " + Math.ceil(4.2));
// console.log("floor method = " + Math.floor(4.8));
// console.log("min method = " + Math.min(4,2,5,9));
// console.log("max method = " + Math.max(4,2,5,9));

// to get the random value
// console.log(Math.random());
// console.log(Math.random()*10);

// to get the value in between 0 and 5
// let min = 0;
// let max = 5;
// let random_value = Math.floor(Math.random() * (max - min) + min);
// console.log(random_value);

// this function give range of random number
// let rfn = (maxi)=>{
//     return Math.floor(Math.random() * maxi);
// }
// console.log(rfn(3));



// array methods=================================================
// this array is object because a new keyword is use to declare the array
// let a = new Array(1,2,3,4,5)
// console.log(a);
// console.log(typeof a);

// let a = [1,2,3,4,5]
// add value at the end of array
// a.push(6);
// remove value at the end of array
// a.pop();
// add value at the starting of array
// a.unshift(0)
// remove value at the starting of array
// a.shift();

// console.log(a.includes(3));
// console.log(a.indexOf(3));

// console.log(a.join());
// console.log(a.join(" || "));

// console.log(a.slice(1,3));
// console.log(a.splice(2,3));

// rest opretor (...) is used to get all the return values instead of only one value>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function showingAllNumbers(...num1) {
//     return num1;
//   }
// console.log(showingAllNumbers(1,2,3,4,5));

// object passing in function
// const user = {
//     name : "local",
//     id : 123
// }

// function handleObject(anyobject){
//     return `user name is ${anyobject.name} which has ${anyobject.id} id no.`
// }
// // accesing the function
// console.log(handleObject(user));

// console.log(handleObject({
//     name : "hello",
//     id : 456
// }));

// arrays in function
// let price = [100,200,300,400,500];

// function handleArray(anyarray){
//     // return anyarray;   //to access all array element
//     return anyarray[1]    //to access any perticuler element of array
// }

// console.log(handleArray(price));

// scoping

// function one (){
//     let a = "hello"

//     function two(){
//         let b = 123;
//         console.log(a);
//     }
//     // console.log(b);    //this won't work because the scope is over for b variable
//     two()    //the under function is always call in under the main function
// }
// one()

// function declaration

// this works because function is not store into a variable
// console.log(addone(5));
// function addone(num){
//     return num+1;
// }
// console.log(addone(6));

// // this won't work because function is store into a variable
// addtwo(5)
// let addtwo = function(num){
//     return num++;
// }
// True

// it execute always
// if(true){
//     console.log("welcome");
// }

// // it execute else part because the value is false
// let login = false;
// if(login){
//     console.log("login");
// }else{
//     console.log("not login");
// }

// // its not working
// let ename 
// if(ename){
//     console.log(ename);
// }

// // it's working because the name is not empty
// let ename1 = "local"
// if(ename1){
//     console.log(ename1);
//     console.log(`welcome`);
// }

// check the object is empty or not
// let emptyObject = {};

// if (Array.from(emptyObject).length == 0) {
//     console.log(`the object is empty`);
// }