// function multiply(aa,b){
//   return(a*b)
// }
// console.log(multiply(1,2));
//arrow function
// let multiply = (a,b)=>{
//     return(a*b);
// }
// console.log(multiply(1,2));


///javascript destructing with object
// const obj = {
//     name: "sam",
//     age: 19,
//     city: "bhaktapur"
// }
// const {name: fullname, age: DOB ,city: fulllocation}=obj;
// console.log(fullname);
// console.log(DOB);
// console.log(fulllocation);


//array methods
//array mapping
// const array=[1,2,3,4];
// function func(num){
//     return num * 1;
// }
// const newarray=array.map(func);
// console.log(newarray);


// //array with three values (salaries)
// const salaries = [1000, 20000, 30000];


// //function which return value grater than 10,000
// function greater(salary) {
//     return salary > 10000;
// }
// const result = salaries.filter(greater);
// console.log(result);



// //spread operator
// const names = ["sam", "ram", "shyam"];
// const newnames = ["hari", ...names, "gita"];
// console.log(newnames);



// //callback function
// function callbackFunction(name, callback) {
//     console.log("this is a callback function");
//     }
//      setTimeout(callbackFunction, 2000);
//     console.log("hello world");


// //nested function
// //create a function
// //create another funvtion inside that function
// //call the child function inside the parent function
// //finally call the parent function outside as the function back 
// function parent(){
//     function child(){
//         console.log("this is a child function");
//     }
//     child();
//     console.log("this is a parent function");
// }
// parent();




//oops
//classes and objects\
// //create a class which takes two constructor parameters
// class rectangle {
//     constructor(height,width){
//         this.height=height;
//         this.width=width;        
//     }
// //create a method inside the class which returns height and width
//     area() {
//     return this.height * this.width;
//            }
//      perimeter(){
//     return 2*(this.height*this.width);
//                 }
//             }
// //object ceating
// const rect=new rectangle(10,20);
// console.log("area",rect.area());


//create a funcion which returns the length of the parameter
function leng(...args) {
    console.log(args.length);
}
leng(1, 2, 3, 4, 11);



