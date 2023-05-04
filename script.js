// Revision Notes of Javascript


// function callme(){
//     console.log("callled");
// }
// console.log(callme);

// var a=10;
// console.log(typeof a);

// object literal
// var obj={
//     name:'Baleno',
//     'car color':'gray', // multi word property
//     year:2016
// };

// console.log(obj['name'])
// console.log(obj.name)
// console.log(obj["car color"])


//copying obj

// var car1={
//     name:"baleno"
// }
// var car2  = car1; //storing addrress of car1
// car2.name="City"
// console.log(car1.name)


//Array

// An array is an object which stores Ordered values

// var arr=[1,2,3,4,5,6,7,8,9];
// // arr.push(10) // add element at last
// //arr.unshift(0) // adds element at first
// // arr.pop() // Removes element from last
// // arr.shift() //Removes element from first
// console.log(arr)


/*
Q. you will be given an array write a fun which takes an array and index of which we want to delete the element
   removes the element at that index
*/

// var arr=[1,2,3,4,5,6,7];
// function removeElement(arr,index){   //index =4  and  arr.length-2 = 5
//    for(let i=index;i<=arr.length-2;i++) //i=2 , i=3 , i=4 , i=5
//    {
//       let fe=arr[i]  //fe = 3 , fe = 3 ,fe =3 ,fe=3
//       arr[i]=arr[i+1] //arr[2] = 4 , arr[3]=5 , arr[4]=6; , arr[5]=7
//       arr[i+1]=fe // arr[3] = 3 , arr[4] = 3 , arr[5]=3 , arr[6]=3
//       //[1,2,4,3,5,6,7]
//       //[1,2,4,5,3,6,7]
//       //[1,2,4,5,6,3,7]
//       //[1,2,4,5,6,7,3]
//    }
//    let dE=arr.pop() // array.pop methods remove last elemenet and return it  //[1,2,4,5,6,7,3] dE=3 
//    //after pop array is //[1,2,4,5,6,7]
//    return `Removed Element is ${dE} and modified array is [${arr}]` //dE= 3 And arr=//[1,2,4,5,6,7]
// }

// console.log(removeElement(arr,2));



// var arr=['hello','hi','hey','bye'];
// for(let i in arr){ //prints index of array
//     console.log(i)
// }

// var arr=['hello','hi','hey','bye'];
// for(let i of arr){ //prints values of array
//     console.log(i)
// }


// var obj={
//     name:'Animesh',
//     age:50,
//     college:'RBNB'
// }
// for(let i in obj){ //prints properties of an Object
//     console.log(i)
// }


// var obj={
//     name:'Animesh',
//     age:50,
//     college:'RBNB'
// }
// for(let i of obj){ //  ERRRRRRRROOOOOOOOOORRRRRRRRR // This method didn't work on object because object is not iterable
//     console.log(i)
// }


//Ways of iterating on  Arrays :

// forEach(iterates on the array)
// map(returns another array)
// filter(returns another array)

//forEach

//let arr=[1,2,3,4,5,6,7];

//arr.forEach((e,i,list)=>{
//console.log(e)//element of an array
//console.log(i)// index of an array
//console.log(list)//how much elements that much times whole array gets printed

//})


//Filter
/*
let arr=[8,2,3,4,5,6,7];
let sum=0;
let result=arr.filter((e,i,list)=>{
 if(e%2==0)
 {
   sum+=e;
 }

})
console.log(sum);
*/

//  let arr=[3 , 4 , 5, 6 , 7 , 8];

// let oddElements = arr.filter((e)=>{
//     return e%2!=0
// })
// console.log(oddElements)
// let sum=0;
// oddElements.forEach((e)=>{
//     sum+=e;
// })
// console.log(sum)
// let sum=0
// arr.forEach((e)=>{
//     if(e%2==0)
//     sum+=e
// })
// console.log(sum)


/* 
filter methods return an array of elements ;
map methods return an array of boolean;
*/


//map
// let arr=[3 , 4 , 5, 6 , 7 , 8];

// let result = arr.map((e,i)=>{
//     return i%2==0;
// })
// console.log(result)



//reduce

//reduce(callback(prev,e,i),initialValue)

// let arr=[3 , 4 , 5, 6 , 7 , 8];
// console.log(
//         arr.reduce((prev,element,index)=>{
//             let prevPlusOne=prev+1;
//            console.log(`if i=${index} prev + 1 = `,prev+1);
//         return prev+1; // 11 , 12 , 13 , 14, 15 ,16 
//     },10)
// )

// let arr=[1,2,5,4,3,8,7]
// console.log(arr.toString())
// arr.sort(); // for sorting tha array
// console.log(arr.toString())

/* ****************String Methods******************** */

//charAt() : Charector at that index 
//charCodeAt() : ASCCI value at that index

//0123456
// let str="Animesh";
// console.log(str.charAt(2))   // charAt() : Charector at that index  //i
// console.log(str.charCodeAt(2))   //charCodeAt() : ASCCI value at that index   //105


//  split() method : whatever we give in split method it cuts sting at that and give us fragments of that string

// let str="ani-pranjal$vaishnavi"
// console.log(str.split("-")) //imp 


//  let str="ani-pranjal$vaishnavi"
//  console.log(str.split("$",1))  // to get perticular fragments , we hv to pass 2nd argument


// let str="ani pranjal vaishnavi"
// console.log(str)
// console.log(str.split(" ").toString())

// let text = "       Hello World!        ";
// let result = text.trim(); // Removes extra white spaces from the string and make copy of the original string
// console.log(result)


//  let str ="animesh";
//  console.log(str.startsWith("sh",5)) // starts with gives boolean value 
// if that substring present at that perticular index in gives true or else false

// let str = "Pranjal";
// console.log(str.includes("jal"));
//it is same as startWith but only diff is does not need to give exact index
//it serches over whole string and if substring present then return true 


//concate() what ever we pass get cancatinated with the str;
// let str="I am";
// console.log(str.concat(" Animesh")) //  o/p : I am Animesh
// console.log(str)//o/p: I am  // Do not manipulate original String : because : Strings are immutable


/* ****************Array Methods******************** */


// join() concatinate array elements into string with specified charector
//   ***  Works only with string Array   *** 
// let arr=["I","am","Animesh Karne"];
// console.log(arr.join(" ")) //returns : I am Animesh Karne

// let arr=["I","am","Animesh Karne"];
// console.log(arr.join("$"))  // returns  :  I$am$Animesh Karne


//**slice()** : Gives subarray OR slice of original Array
// let arr=[1,23,4,5,6,7,8,9];
// console.log(arr.slice(1,4)) 
//Here  "1" is starting index that "we have to slice from"
//And   "4" is ending   index that "We have to slice till"
// **Important** it gives subARray including first index and excluding last index;
// o/p : [ 23, 4, 5 ]


/* 
splice() : Removes Element from Array 
from starting index that we have given and till ending index (including both indexes).
*/
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.splice(1,2); //will remove number of index 1 and 2
// console.log(arr); //o/p :[1, 4, 5, 6,7, 8, 9]



/************************* DOM (Data Object Model)*********************** */

// Q.Delete Targeted HTML Element
//const div=document.getElementById("parent"); //Get perticular Element using its ID
// const boldElement=div.children[2]; //Accessing child element; .children is an Array
// boldElement.remove() //.remove to remove targeted HTML Element

// Q.Create and add new Element in Existing parent Element(Container)
// const div=document.getElementById("parent");
// const newElement=document.createElement("div");// To create new HTML element we can use document.createElement().
// newElement.innerText="Newly Created Element";// To add Text in HTML element we can use innerText="Any Text".
// div.appendChild(newElement)// To add any HTML to a parent container we can use .appendChild().

/* On click Event Listener */

//<button onclick="changeText" id="btn">Change</button>
// function changeText(){
//   const boldElement=document.getElementById("third");
//   boldElement.innerText="Animesh Karne";
//   boldElement.style.backgroundColor="Gray"
// }


// Create Toggle Button

// HTML Code :
//<div class="parent">
//<div class="child" id="child">
//</div>
//</div>

// CSS Code:
// .parent{
//   background-color: blue;
//   height: 40px;
//   width: 80px;
//   padding: 2px;
//   border-radius: 30px;
//   margin: auto;
//   position: relative;
// }
// .child{
//   background-color: gray;
//   height: 40px;
//   width: 40px;
//   border-radius: 50%;
// }
// .toggler{
//   background-color: gray;
//   height: 40px;
//   width: 40px;
//   border-radius: 50%;
//   position: relative;
//   left: 38px;
// }

//JS Code
// const toggler=document.getElementById("child");
// toggler.addEventListener("click",()=>{
//   if(toggler.className=="child"){
//     toggler.className="toggler"
//   }
//   else{
//     toggler.className="child"
//   }
// })


//How many Child Element Present
// const div=document.getElementById("parent")
// console.log(div.children.length)



/*****  Destructuring ********/

// let obj={
//   name:"Animesh",
//   age:22,
//   College:"RBNB"
// }

// let {name,age,College} =obj;
// console.log(name,age,College)


// Array Destructing;
// let arr= [11,22,33]
// let [x,y,z,a,b]=arr;
// console.log(x,y,z,a,b) // O/P: 11 22 33 undefined undefined

// Some DOM Remain To Put Notes Here


/********************  This Keyword  ********************** */

//Inside function declare with function keyword : this keyword is , who called that function
// eg .,  function  is in obj : obj.callme() then this inside callme() is obj itself.
// Inside Arrow funstion : this keyword is just like normal variable.

// This variable , captures the reference of the object whoever calls this function

// let obj={
//   a:function (){
//     console.log(this)   // o/p   :   { a: [Function: a], b: 20, name: 'animesh' }
//     console.log("Inside Function")  // o/p  :  Inside Function
//   },
//   b:20,
//   name:"animesh"
// }
// obj.a();



// Creating Instance Of A Function 

// function user(){
//   console.log("USer FUnction")
// }
// let user1= new user(); // created instanmce of a function : it get called automatically user() is a constructor function.
// console.log(user1) // prints entire Func


//search functionality 

//HtmlCOde:
/* <div class="container">
<input type="text" id="search" placeholder="Search User">
       
<div id="list">
    <ul>
        <li>Static Element</li>
    </ul>
</div>
</div> */

// const UserArray = ["animesh","pranjal","pratik","vaishnavi","aniket","gaurav","shrushti"];

// const serachInput=document.getElementById("search");
// const list=document.getElementById("userList")

// function renderElement(users){
//   list.innerHTML="";
//     users.forEach(element => {
//       const li=document.createElement("li");
//       li.innerText=element;
//       list.appendChild(li)
//     });
// }

// serachInput.addEventListener("keyup",(event)=>{
//   var value = event.target.value;
//   if(value=""){
//     list.innerHTML="";
//   }
//   var result = UserArray.filter((element)=>{
//     if(element.includes(value)){
//       return element;
//     }
//   })
//   renderElement(result) 
// })



/********************* Promise  *************** */


/*
Promise is a constructor function .
Syntax : (Declaring and calling ne Promise):
const myPromise= new Promise(Callback-Function);

Defination :  The promise is an Object represeneting the eventual completion or failure of an aysynchronous operation.

Every Promise has 3 States :
 1.Pedning 2.Fullfilled 3. Rejected ;
 But its seems it has two only because ,
 promise goes from either 1.{Pending => fullfilled } OR 2.{Pending => Rejected}

*/

//Example 1: I just want to resolve the promise insinde callback and call a method after fullfilled 

// function executor(resolve,reject) { // callback func of a promise has two parameters 1.resolve 2.reject (both are methods)
//     resolve("Promise Resolved") // resolve is a method to change the promise state pending => fullfilled
// } 
// const promise1=new Promise(executor);  // declaration and initiallization
// promise1.then((data)=>{ // then is a method which calls a callback function inside it after promise get fullfilled
//   console.log(data) // whatever we pass in resolve , we can get that using parameter of callback funct of then method
// })

//Example 2: I just want to reject the promise insinde callback and call a method after rejection. 

// function executor(resolve,reject) { // callback func of a promise has two parameters 1.resolve 2.reject (both are methods)
//   reject("Promise Rejected") // reject is a method to change the promise state pending => rejected.
// } 
// const promise1=new Promise(executor);  // declaration and initiallization
// promise1.catch((data)=>{ // catch is a method which calls a callback function inside it after promise get rejected
// console.log(data) // whatever we pass in reject , we can get that using parameter of callback funct of reject method as a error 
// })

//Example 3: I just want to resolve the promise after a time of 2500 mili seconds and call method after .

// const promise1=new Promise((resolve,reject)=>{
//   setTimeout(() => {         // SetTimeout is a method that waits execution inside it in a callbackqueue untill 
// callstack is empty and runs it after time we give it as a second parameter (in milli second)      
//       resolve("heloooo")
//   }, 2500);  
// })
// promise1.then((data)=>{
//   console.log(data)
// })


//Example 4: I just want to resolve and reject the promise after a time of 2500 mili seconds and call method after .

// Impotant Question is : Is it Posibble : lets try =>  After Try : We cannot change promise state once it got change.

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(() => {        
//       resolve("heloooo")
//       reject("rejected")
//     }, 2500);  
//   })
//   promise1.then((data)=>{
//     console.log(data)
//   })
//   promise1.catch((data)=>{
//     console.log(data)
//   })


// finally method :

// const promise1=new Promise((resolve,reject)=>{
//   setTimeout(() => {        
//     resolve("Resolved ")

//   }, 2500);  
// })
// promise1.then((data)=>{
//   console.log(data)
// })
// promise1.catch((data)=>{
//   console.log(data)
// })
// promise1.finally(()=>{  // either promise get resolve or rejected finally method always get called ;
//   console.log("Finally get called")
// })


// NPM (Node Package Manager) : use to install nodejs libraries(Pacakges).

//there are some default libraries included in NOdejs 
//means that we dont have to install that for using it.

//fs (File System).

// const fs = require("fs");
// fs.readFile("index.html","utf-8",(error,data)=>{
//   if(error) return error;
//   console.log(data)
// })


// cheerio : cheerio is use for WEB SCRAPPING

// const cheerio = require("cheerio");

// const result= cheerio.load("<p>this is para</p>")
// const data = result("p");
// const dataInText = data.text();
// console.log(dataInText)


// const fs = require("fs");
// const cheerio = require("cheerio");

// fs.readFile("index.html","utf-8",(error,data)=>{
//   if(error) return error;
//   const result= cheerio.load(data);
//   const code = result("#parent");
//   const dataInText= code.text();
//   console.log(dataInText.trim())
// })


/**** Spread Operator ***/

/*
spread Operator can be used with Arrays And Objects.

*/


// Use Case on Array 

// let arr=[1,2,3,4];
// console.log(...arr) // uswed to remove square braces around array

// let arr=[1,2,3,4];
// console.log(...arr,10); // we acan add elements in an array directly. Using Spread

// let arr=[1,2,3,4];
// let arr2=[6,7,8]
// console.log(...arr, ...arr2);  // we can merge two array elements directly

// let arr=[1,2,3];
// let brr=[...arr];
// brr[1]=10
// console.log(...arr,brr)

// >> last eg. Same for objects

// Use Case on Objects

// let obj={
//   name:"animesh",
//   age:22,
//   college:"bjhsjhvs"
// }
// let obj2={
//   ...obj,
//   college:"RBNB"
// }
// console.log(obj2)


/*  IIFE (Immediately Invoked Function Expression) */

// syntax:
// (function func-name(){})()


//Normal Function
// function abc(){
//   console.log("Hello From Func")
// }
// abc() // we have to call it explicitly


// exmpli gratia of IIFE
//  ( function abc(){
//     console.log("Hello From Func")
//   })()

// ( function(){   // IIFE Annonyms Function 
//   console.log("Hello From Func")   
// })()


/**************Most Imporatant Topic***********/

/**************async await***********/

// async  =>  asynchronous

// synchronous : line by line
// asynchronous : not line by line

//eg., : synchronous
// console.log(1)
// console.log(2)
// console.log(3)

//eg., : asynchronous
// console.log(1)
// setTimeout(()=>{
//   console.log(2)
// },1000)
// console.log(3)

//scenario : show append users first then payment message 

// without async await

// (function loadData(){
//   let promise1=new Promise((resolve)=>{ // 2 sec
//     setTimeout(()=>{
//         resolve("Users Appended")
//     },2000)
//   })

//   let promise2 = new Promise((resolve)=>{ // 1 sec
//     setTimeout(()=>{
//       resolve("Payment Successfull")
//     },1000)
//   })

//   promise1.then((data)=>{
//     console.log(data)
//   })

//   promise2.then((data)=>{
//     console.log(data)
//   })
// })()

// o/p: Payment Successfull  Users Appended
// But we dont want this sequence 

/*
  so to satisfy our scenario , we have to use await keyword to promise1 for wait on that line only 
  till promise1 get resolved .
  but one more important point is we cant use await keyword in normal function 
  we have to make our function asynchronous for that .
  to make function asynchronous use async keyword front of that
*/

// async function loadData(){
//   let promise1=new Promise((resolve)=>{ // 2 sec
//     setTimeout(()=>{
//        resolve("Users Appended")
//     },2000)
//   })

//   let promise2 = new Promise((resolve)=>{ // 1 sec
//     setTimeout(()=>{
//       resolve("Payment Successfull")
//     },1000)
//   })

//  await promise1.then((data)=>{
//     console.log(data)
//   })

//   promise2.then((data)=>{
//     console.log(data)
//   })
// }
// loadData()


/* ********API(Application Programming Interface)****** */



  /* api    https://google.com/api/search
                   |          ||         |
                   -----------  ---------
                        |           |
                    "domain"      "endpoint"
            |                             |
            -------------------------------
                           |
                          "API"

*/                          


/* JSON (Javascript Object Notation) *
 -Almost every site serach data in the form of JSON.
 */

//  JSON gives data in thr form of object 


// *** stringify(): it is a method that converts data into string.
// suppose we have JSON data in users array

// var user =[
//   {
//     name:"ANiemsh",
//     age:22
//   },
//   {
//     name:"Gaurav",
//     age:22
//   },
//   {
//     name:"Pranjal",
//     age:22
//   },
//   {
//     name:"Aniket",
//     age:22
//   }
// ]
// var str = JSON.stringify(user);
// console.log(user); //object format
// console.log(str);  // string format



/*********************** fetch(api) ************************/
/*
- fetch is used to call api from frontend to retrive a data from backend(api/REST api).
- fetch method returns a "promise" .
- fetch method returns a data in the form of "Response" class.
- there is a method on top of instance of a Response class to convert data into "json"
- json() : response.json().
- this response.json also returns a "promise".
- and at the end we got data in json format.
*/

// YT api key  : "AIzaSyDztwACEjJgDbfZZqTwjqGrFd4iwpVYPhE"
// const url=`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}&part=statistics`

// async function loadData(){
//   const apiKey ="AIzaSyDztwACEjJgDbfZZqTwjqGrFd4iwpVYPhE";
//   const id ="k8aNqitgWwc"
//   const url=`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}&part=statistics,snippet`;
//   const response =await fetch(url);
//   const data = await response.json();
//   console.log(data)
// }
// loadData();



/************ call()  apply()  bind() ***********/

/*
-Every datatype in JS is have their own Prototype.
-So , function has also a prototype.
-on top of the function prototype we have some methods : call() , apply() , bind() . 
*/

// call() :

// function callme(){
//   console.log("function Called ")
//   console.log(this)  // window object
// } 
// callme();  // normal calling of a function

// function callme(){
//   console.log("function Called ")
//   console.log(this) // window object
// }
// callme.call()  


// Calling function using call() method 
// but we have seen here no change in o/p the why this call() method introduce ..
// there is one diff in those two .
// we can modify the value of this by passing the first argument to call() method.
// *IMP*  The only thing is we have to pass non-primitive values only .
// we can pass primitives also , but it takes wrapper classes of that primitive
// means for eg., when we pass number 10 the o/p is [Number: 10]
// How ...?

// function callme(){
//   console.log("function Called ") // function Called 
//   console.log(this) // { name: 'Animesh' }
// }
// callme.call({name:"Animesh"})


// function callme( a , b){
//   console.log("function Called ") // function Called 
//   console.log(this) // { name: 'Animesh' }
//   console.log(a+b) // 30
// }
// callme.call({name:"Animesh"},10,20)

// Actual parameter of a function we can pass in call() method from its second argument.


// apply():

//applly() also does same this , 
//but tyhe only difference is we can pass actual parameters of a function array

// function callme( a , b){
//   console.log("function Called ") // function Called 
//   console.log(this) // { name: 'Animesh' }
//   console.log(a+b) // 30
// }
// callme.apply({ name: 'Animesh' },[10,20])


// bind :

//bind returns a binded function 

// function x(){
//   console.log(this)
// }
// console.log(x.bind()) // ƒ x() { console.log(this) }



/************ Date() *************/

/*
-Date() is a constructor function.

*/

// let date = new Date();
// console.log(date);
// o/p : Thu May 04 2023 11:57:58 GMT+0530 (India Standard Time)

// let date = new Date();
// let month = date.getMonth(); // method for getting month
// console.log(month+1) // here we have to month starting from zero so we have to do `month + 1` always
// let day = date.getDay() // method for getting day
// console.log(day) // day staring from sunday=0 monday =1 , Tuesday =2 and so on ..
// let year = date.getFullYear() // method for getting year
// console.log(year) 
// let hour = date.getHours() // method for getting hour
// console.log(hour)
// let min = date.getMinutes() // method for getting minutes
// console.log(min)
// let sec = date.getSeconds() // method for getting seconds
// console.log(sec)
// let mSec = date.getMilliseconds() // method for getting milli secconds
// console.log(mSec)


// Getting any date's day 
// const oldDate=new Date('2023/05/02') //   yyyy/mm/dd
// console.log(oldDate.getDay()) // o/p : 2 means Tuesday


// epoch Time  : 1st Jan., 1970 12:00 AM to todays time : how much milliseconds ; 

// const date = new Date();
// console.log(date.getTime()/1000); //to get seconds from 1st Jan 1970 12:00 AM to Now means (epoch Time).

// prints 2 months 7 days ago 

// const date= new Date('2023/03/01')
// const today = new Date();
// const secDiff= parseInt(date.getTime()/1000);
// let dayDiff= parseInt((secDiff/(60*60))/24)
// let month=0;
// while(dayDiff>=30){
//   month++;
//   dayDiff-=30;
// }
// console.log(`${month} months ${dayDiff} days ago`)

// this is wrong ans 



/**************** Debouncing  *************** */
// HTML COde 
/* <input type="text" id="inp"> */

//JS code :
  // const input = document.getElementById("inp");
  // function compute(value){
  //   console.log(value)
  // }
  // let timerId=undefined;
  // function debounce(event){
  //   if(timerId){
  //     clearTimeout(timerId);
  //   }
  //   timerId=setTimeout(()=>{
  //     compute(event.target.value);
  //     timerId=undefined;
  //   },1000)
  // }
  // input.addEventListener("keyup",debounce)



/******************** Some Basic Things About "you tube API" **********************/

/*
- To access you tybe api data :
- authentication and autherization is imporatant .
- for that we have to create our own "apikey" : 
- Creating APIKEY : GoTO Google Console :
    i     create project on top dropdown.
    ii    search for you tube api v3
    iii   select you tube data v3
    iv    Click enable (Parallely open documentation )
    v     After anabling goto credentials tab.
    vi    create credential (API Key).   
*/

// some youtube video categories with their ID :
/*
Film & Animation: 1
Autos & Vehicles: 2
Music: 10
Pets & Animals: 15
Sports: 17
Short Movies: 18
Travel & Events: 19
Gaming: 20
Videoblogging: 21
People & Blogs: 22
Comedy: 23
Entertainment: 24
News & Politics: 25
Howto & Style: 26
Education: 27
Science & Technology: 28
Nonprofits & Activism: 29
Movies: 30
Anime/Animation: 31
Action/Adventure: 32
Classics: 33
Comedy: 34
Documentary: 35
Drama: 36
Family: 37
Foreign: 38
Horror: 39
Sci-Fi/Fantasy: 40
Thriller: 41
Shorts: 42
Shows: 43
Trailers: 44
*/

// One best example to work with you tube api 
// Q. extarct app youtube video  categories and show on UI .
//Code :

//HTML Code : 
        //<div id="chips-container"></div>

// JS Code :

// const apiKey="{myapikey which is private so i removed while upload file }";
// const categoriesContainer = document.getElementById("chips-container");

// async function loadVideoCategories(){
//   let str = "1,2,10,15,17,19,20,22,24,25,26,27,28";
//   const url = `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&key=${apiKey}&id=${str}`

//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(appendChips(data.items))
// }
// function appendChips(chips){

//   for(let i = 0 ; i < chips.length; i++) {
//       const id = chips[i].id;
//       const title = chips[i].snippet.title
//       const chip = document.createElement("div");
//       chip.setAttribute("data-id", id);
//       chip.className = "chip"; 
//       chip.innerText = title; 
//       categoriesContainer.appendChild(chip);
//   }
// }
// loadVideoCategories()