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

// const createPerson = (name, age)=>({name,age});
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


function bankAccount(){
  let balance=0;

  return {
    deposit(amount){
      return balance += amount;
    },
    withdraw(amount){
      if(balance>0 && amount<=balance){
        return balance -= amount;
        

      }else{
        return "This amount not exist in account";
      }

    }
  }

}
const account = bankAccount();
// console.log(account.deposit(10000));
// console.log(account.withdraw(10000));

function memoize(fn){
  let cache ={};

  return function(...args){
    const key = JSON.stringify(args);
    if(cache[key]){
      console.log('fetching from cache ',key);
      return cache[key];

    }
    const result = fn(...args);
    cache[key]=result;
    console.log('Calculating result ', key);
    return result;
  };

}

// const slowSquare  = ((n)=>n*n);
// console.log(slowSquare(5));
// console.log(slowSquare(5));

function createMultiplier(factor){

  return (num)=>{
    return num * factor;
  }

}
// var getMultiplierBy3 = createMultiplier(3);
// console.log(getMultiplierBy3(4));

function createPerson(){
  let name;
  return {
    getName:()=>{return name },
    setName:(newName)=>{ name =newName }
  };
}

// const person1 = createPerson();
// person1.setName('kaizz');
// console.log(person1.getName());

function compose(f,g){
  return (x)=>{
    return f(g(x));
  };

}

const fn1 =  x => x*2;
const fn2 = x => x* x;
// const result=(fn1,fn2);
// console.log(result(4));

// Async programming

function delay(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function greetAfterDelay(){
  await delay(2000);
  console.log("Hello after two sec");

}

// greetAfterDelay();

async function fetchData(){
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await resp.json();
  console.log(data);
}

// fetchData();


function getSuccess(){
  return new Promise(resolve =>{
    setTimeout(()=> resolve('Success'),2000);
  });
}
// getSuccess().then(console.log);

async function getSquareVal(num){
  return new Promise(resolve =>{
    setTimeout(()=>resolve(num * num ),2000);
  });
}

// getSquareVal(4).then(console.log)

async function fetchDataWithErrorHandling(){
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/invalid-url');
  if(!resp.ok){
    throw new Error('Failed to fetch data');
    
  }
  const data = await resp.json();
  console.log(data);
    
  } catch (error) {
    console.log('Error', error.message)
    
  }
}

// fetchDataWithErrorHandling();

function doubleAfter2Seconds(num){
  return new Promise(resolve=>{
    setTimeout(()=>resolve (num * 2),2000);
  });

}
function squareAfter1Second(num){
  return new Promise(resolve=>{
    setTimeout(()=>resolve(num * num),1000);
  });
}

 async function processNumber(num){
  const doubleValue = await doubleAfter2Seconds(num);
  const squareValue = await squareAfter1Second(doubleValue);

  return squareValue;

 }

 let resolvedValue;

// processNumber(2).then(r=> {
//   resolvedValue = r;
//   console.log(resolvedValue); 
// });

// console.log("resolve value "+ resolvedValue) //This runs before the promise resolves, resolvedValue is still undefined:

async function processNumbers(num1,num2){
  const [double,square] = await Promise.all([doubleAfter2Seconds(num1),squareAfter1Second(num2)]);
  return {double,square};
}

// processNumbers(2,3).then(console.log);

async function countDownNum(num){
  if(num<0) return;
  console.log(num);

  await new Promise(resolve =>{
    setTimeout(resolve,1000);
  });
  await countDownNum(num-1);
}
// countDownNum(3);


//* 'this' keyword */

const person1 = {
  name:'kaizz',
  greet(){
    console.log(`Hello ${this.name}`);
  }

}
// person1.greet();

const person2 = {
  name:'manu',
  regularGreet:function(){
    console.log(`Hello ${this.name}`)

  },
  arrowGreet:()=>{
    console.log(`Hello ${this.name}`);

  }
}
// person2.arrowGreet(); //undefined
// person2.regularGreet();

function Car(brand,name){
  this.brand  = brand;
  this.name = name;
};
const car1 = new Car('BMW','Bmw i7');
// console.log(car1.name);

const person3 = {
  name:'kaizz',
  greet(){
    setTimeout(function(){
      console.log(this.name);
    },2000);
  }
}
// person3.greet(); //Expected output: undefined (because `this` refers to the global object)

const person4 = {
  name:'kaizz',
  greet(){
    setTimeout(()=>{
      console.log(this.name); // 'this' refers to the person object
    },2000);
  }
}
// person4.greet();

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;

  }
  async introduce(){
    await new Promise(resolve => {
      setTimeout(resolve,2000);
    }); 
    console.log(`I'm ${this.name} & still ${this.age} years old`)
  }
}

// const personObj = new Person('Kaizz', 23);
// personObj.introduce();

class Person1 {
  constructor (name){
    this.name=name;

  }
  async greet(){
    await new Promise(resolve=>{
      setTimeout(resolve,2000);
      console.log(`Hello I'm ${this.name}`);
    });
  }
}
const p1 = new Person1('manu');
const p1Fun = p1.greet.bind(p1);
p1Fun();

