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
// const p1 = new Person1('manu');
// const p1Fun = p1.greet.bind(p1);
// p1Fun();

class Person2 {
  constructor(name) {
    this.name = name;
  }

  async fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve(`${this.name}'s data`), 1000));
  }

  async process() {
    const data = await this.fetchData();
    console.log(`Processing: ${data}`);
  }
}

// const p2 = new Person2('Charlie');
// const pr =p2.process.bind(p2);
// pr();


class Person3{
  constructor(name){
    this.name = name;
  }

  fetchData(){
    return new Promise(resolve=>{
      setTimeout(()=>resolve(`This is ${this.name} data`),2000);
    });
  }

  process(){
    this.fetchData().then((data)=>{
      console.log(`Processing data, ${data}`);

    });
  }
}

// const p3 = new Person3('kaveesh');
// p3.process();

/** OOP Concepts */

class BankAccount{
  constructor(owner){
    let balance = 0;
    this.owner = owner;

    this.getBalance = ()=>{
      return balance;

    }

    this.deposit=(amount)=>{
     if(amount>0){
      balance+=amount;
      return balance;
     }
    }
  }
}

// const ba = new BankAccount();
// console.log(ba.deposit(2000));
// console.log(ba.getBalance());

  //** The spread (...) and rest (...) operators */

  const arr4 = [1,2,3];
  const arr5 = [7,5,9];

  const mergedArr = [...arr4,...arr5];
  // console.log(mergedArr);

  const copyArr = [...arr4];

  const obj1 = {name:'kaizz,',age:23};
  const obj2 = {hobby:'cricket'};

  const mergedObj = {...obj1,...obj2};
  // console.log(mergedObj);

  function sumArray(arr4){
    return arr4.reduce((acc,cur)=> (acc+cur),0);

  }

  // console.log(sumArray(arr4));

  const arr6 = [4,6,8,9,1];
  const [f,...reset] = arr6;
  // console.log(reset);

  const str = "hello";
  const chrArr = [...str];

  const newArr = [...arr4,3,4,...arr5];
  // console.log(newArr);

  const man = {name:'kaizz',age:32,hobby:'drawing',country:'SL'};
  const {name, ...details} = man;
  // console.log(details);

  const nestArr1 = [1,[2,3],4];
  const flatArr = [1,...nestArr1[1],4];
  // console.log(flatArr);

  const arr7 = [
    {id:1,name:'John'},
    {id:2,name:'Alice'}

  ];

  const arr8 = [
    {id:2,name:'Alice'},
    {id:3,name:'Bob'}
  ];

  const finalArr = [...arr7, ...arr8.filter(item8=> !arr7.some(item7 =>item7.id===item8.id))];
  // console.log(finalArr);

const original = {
  name:'kauzz',
  details:{age:25,job:'engineer'}
}

const cloneObj = {
  ...original,
  details:{...original.details}
};

cloneObj.details.age=23;
// console.log(original);
// console.log(cloneObj);

/** Immutability key concept */

const user1 = Object.freeze({
  name:'Alice',
  age:23
})

// user1.age=45;
// console.log(user1);

const fruits = ['apple','orange','banana'];
const newFruit = fruits.concat('grapes');

// console.log(newFruit);

const myCar = {make:'Toyota', model:'Corolla'};
const updatedCar = Object.assign({},myCar,{model:'Camry'});

// console.log(myCar);
// console.log(updatedCar);

const arr9 = [23,45,66,77,89];
// const arr10 = arr9.slice(1);
// console.log(arr10);

const animals = ['cat', 'dog'];
const upAnimals = [...animals,'rabbit'];
// console.log(upAnimals);

const women = {name:'anne',age:30};
const updatedWomen = {...women,age:32};
// console.log(updatedWomen);

const organicFruits = ['apple','orange','banana'];
const newOFruits = organicFruits.filter(fruit=> fruit !== 'apple');
// console.log(newOFruits);


//** Debouncing and throttling  */

function debounce(func,delay){
  let timeoutId;

  return function (...args){
    clearTimeout(timeoutId);
    timeoutId  = setTimeout(()=> func(...args),delay);
  };
}

// function sayHello(){
//   console.log('Hello Kaizz...');
// }

// const  debouncedHello = debounce(sayHello,500);
// debouncedHello();

const handleResize = ()=>{
  console.log('Resizing.......');
};

// window.addEventListener('resize',debounce(handleResize,500));

function throttle(func,limit){
  let inThrottle;
  
  return function(...args){
    if(!inThrottle){
      func(...args);
      inThrottle = true;
      setInterval(()=> inThrottle=false,limit);
    }
  };
}

function logMessage(){
  console.log('Throttled Message...');
}

// const  throttledLogMessage = throttle(logMessage,500);
// throttledLogMessage();

const searchInput = document.getElementById('search');

const handleSearch = ()=>{
  console.log('search for');
}

searchInput.addEventListener('input',debounce(handleSearch,300));
