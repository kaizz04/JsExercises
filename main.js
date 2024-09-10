// Arrow function

// function greet(){
//     return `Hello, ${n}`;
// }
let n = "kaizz";


let greet = ()=> `Hello ${n}`;
// console.log(greet());

const multiply = (a,b)=> a * b;
// console.log(multiply(4,5));

const arr = [1,2,3,4,5];
const doubleArr =  arr.map(n => n*2);
// console.log(doubleArr);

const randomNum = () => Math.random();
// console.log(randomNum());

//setTimeout(()=> console.log('Hello world!'), 2000);

const arr2 = [5, 10, 15, 20];
const sum = arr2.reduce((tot, num )=> tot+num,0);
// console.log(sum);


const person = {
  name:'John',
  hobbies:['Reading','Cycling'],
  printHobbies:function(){
    this.hobbies.forEach(hobby=>{console.log(`${this.name} likes ${hobby}`);});
  }
};

 person.printHobbies(); 

  const rectangle = {
    width: 10,
    height: 5,
    // area:function(){return this.width*this.height}
    area(){return this.width*this.height}
  
  };
  console.log(rectangle.area());


