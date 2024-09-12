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

//  person.printHobbies(); 

  const rectangle = {
    width: 10,
    height: 5,
    // area:function(){return this.width*this.height}
    area(){return this.width*this.height}
  
  };
  //console.log(rectangle.area());


const power = (base,exponent=2) => base ** exponent;
// console.log(power(5));
// console.log(power(2,3));

const createPerson = (name, age)=>({name,age});
// console.log(createPerson('kaizz','23'));

const arr3 = [1, 2, 3, 4];
// const applyOperation = arr3.map(n=>n+2);
// console.log(applyOperation);

const applyOperation = (array)=>array.map(n=>n+2);
//console.log(applyOperation([1, 2, 3, 4]));

// Closure

function outer(){
  const greeting = "Hello";
  function inner(){
    console.log(`${greeting}, World`);

  }
  inner();
}
// outer();

function createCounter(){
  let count = 0;
 return ()=>{
     count++;
     return count;
  
  }
}

const counter = createCounter();
// console.log(counter());

function addBy(x){
  return(y)=>y+x ;

}
const add= addBy(2);
// console.log(add(22));


