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

getSquareVal(4).then(console.log)

