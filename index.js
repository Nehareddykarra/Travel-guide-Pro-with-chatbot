//console.log("hi");
//console.log("WelcomE");
//window.alert(`this is an alert`);
//window.alert(`this is java Script`);

//document.getElementById("myH1").textContent="hello";
//document.getElementById("myP").textContent="Welcome to javaScript";


/*let x=120;
let age=20;
let fee=2000;
let name="KNR";
let online=true;
console.log(typeof x);
console.log(`you are ${age}`);
console.log(`yor name is ${name}`);
console.log(`your fee is $${fee}`);
console.log(`KNR is online : ${online}`);*/

/*let name;
/*let age=20;
let isStudent=true;
document.getElementById("myP1").textContent=`your name is:${name}`;
document.getElementById("myP2").textContent=`ur age is : ${age}`;
document.getElementById("myP3").textContent=`u r student: ${isStudent}`;
name=window.prompt("ur user name?");
console.log(name);*/
/*let name;
document.getElementById("mySubmit").onclick = function(){
name=document.getElementById("myText").value;
document.getElementById("myH1").textContent=`Hello ${name}`;
console.log(name);
}*/
/*let age=window.prompt("how old are u?");
age=Number(age);
age+=1;
console.log(age,typeof age);*/
/*let x="KNR";
let y="Naina";
let z="cars";

x= Number(x);
y=String(y);
z=Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);*/

/*const PI=3.14;
let rad;
let circum;
//rad=window.prompt("Enter radius");

circum=2*PI*rad;*/
//console.log(circum);
/*document.getElementById("mysubmit").onclick=function(){
  rad= document.getElementById("mytext").value;
  rad=Number(rad);
  circum=2*PI*rad;
  document.getElementById("myh3").textContent=circum +"cm";
}*/
/*
const decr=document.getElementById("decr");
const reset=document.getElementById("reset");
const incr=document.getElementById("incr");
const myLabel=document.getElementById("myLabel");
let count=0;
incr.onclick=function(){
    count++;
    myLabel.textContent=count;
}
decr.onclick=function(){
    count--;
    myLabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    myLabel.textContent=count;
}
*/
/*const min=50;
const max=100;
let num=Math.floor(Math.random()*(max-min))+min;
console.log(num);*/

/*const myButton=document.getElementById("myButton");
const myLabel=document.getElementById("myLabel");
const min=1;
const max=6;
let num;
myButton.onclick=function(){
    num=Math.floor(Math.random()*max)+min;
    myLabel.textContent=num;
}*/
/*let age=20;
let hasLicence=false;
console.log(`ur age is ${age}`)
if(age>=18)
{
    console.log("u r eligible to drive");
    if(hasLicence)
    {
        console.log("u have license");
    }
    else{
        console.log("apply for license");
    }
}
else{
    console.log("u r not eligible");
}*/
/*const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const res=document.getElementById("res");
let x;
//mySubmit.onclick=function(){
    x=myText.value;
    x=Number(x);

if(x<=-1)
{
    res.textContent=`value of x is less than -1`;
}
else if(x==0)
{
    
    res.textContent=`value of  x is 0`;
}
else{
    res.textContent=`value is greater than 0`;
}
}*/
/*const mycb=document.getElementById("mycb");
const rd1=document.getElementById("rd1");
const rd2=document.getElementById("rd2");
const rd3=document.getElementById("rd3");
const mysubmit=document.getElementById("mysubmit");
const subres=document.getElementById("subres");
const res=document.getElementById("res");

mysubmit.onclick=function(){
    if(mycb.checked){
    subres.textContent= `welcome to tourism`;
    }
    else{
    subres.textContent= `please click toursim`;
    }
    if(rd1.checked)
    {
        res.textContent='Welcome to Kedarnath';
    }
    else if(rd2.checked)
    {
        res.textContent='Welcome to Badrinath';
    }
    else if(rd3.checked)
    {
            res.textContent='Welcome to Amarnath';
    }
    else{
        res.textContent=`select a place`;
    }
}*/
/*let age=25;
let msg=age>=18? "you are an adult":"you are minor";
console.log(msg);*/
/*let name="Karra Neha Reddy";
console.log(name.charAt(0));
console.log(name.indexOf("h"));
console.log(name.lastIndexOf("o"));
console.log(name.toUpperCase());
console.log(name.trim());
console.log(name.repeat(3));
let num="123-456-789";
num=num.replaceAll("-","");
console.log(num);
num=num.padStart(15,"0");
console.log(num);*/
/*const fullName="Karra Neha Reddy";
console.log("first name:"+fullName.slice(0,5));
console.log("Middle name:"+fullName.slice(6,10));
console.log(" Last name:"+fullName.slice(11,16));
*/
/*const email="nainareddy.karra@gmail.com";
console.log(email.slice(0,email.indexOf("@")));
console.log(email.slice(email.indexOf("@")));*/
/*let user=window.prompt("Enter ur name");
user=user.trim();
let letter=user.charAt(0);
letter=letter.toUpperCase();

let extra=user.slice(1);
extra=extra.toLowerCase();
user=letter+extra;
console.log(user);*/
/*let user=window.prompt("Enter ur name");
user=user.trim().charAt(0).toUpperCase()+user.trim().slice(1).toLowerCase();
console.log(user);*/
/*const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1))+min;
let attempts=0;
let guess;
let running=true;
while(running)
{
    guess=window.prompt(`guesss a no b/n ${min} - ${max}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("please enter a valid no");
    }
    else if(guess<min||guess>max)
    {
        window.alert("please enter a valid no");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("too low!!Try again");
        }
        else if(guess>answer)
        {
            window.alert("too high!! try again");
        }
        else{
            window.alert(`correct!The answer was ${answer}.It took you ${attempts} attempts`);
            running=false;
        }

        
    }
}*/
/*function add(x,y)
{
    return x+y;
}
console.log(add(2,5));*/
/*const text=document.getElementById("text");
const toFahren=document.getElementById("toFahren");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;
function convert()
{
    if(toFahren.checked){
       temp=Number(text.value);
       temp=temp*9/5+32;
       result.textContent=temp.toFixed(1)+"F";
    }
    if(toCelsius.checked){
        temp=Number(text.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"c";
     }
    else{
        result.textContent=" select a uunit";
    }
}*/
/*let fruits=["apple","oramge","banana"];
let x=fruits.join("-");
console.log(...x);
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}*/
/*function combineStrings(...strings)
{
    return strings.join("  ");
}
const fullName = combineStrings("MS.","Karra","Neha","Reddy");
console.log(fullName);*/
/*function rollDice(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];

    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_imagess/${value}.png">`)
    }
    console.log(values);
    diceResult.textContent=`dice:${values.join(', ')}`;
    diceImages.innerHTML=images.join('');
    
}*/
/*function generatePassword(passwordLenght,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="1234567890";
    const symbols="!@#$%^&*()_-+=|\?/";
    let allow="";
    let password="";
    allow +=includeLowercase? lowercase:"";
    allow +=includeUppercase? uppercase:"";
    allow +=includeNumbers?numbers:"";
    allow +=includeSymbols?symbols:"";
    console.log(allow);
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random*allow.length);
        password+=allow[randomIndex];

    }
    return password;

}
const passwordLenght=12;
const includeLowercase=true;
const includeUppercase=false;
const includeNumbers=true;
const includeSymbols=true;

const password=generatePassword(passwordLenght,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
console.log(`generated password:${password}`);*/
/*hello(good);

function hello(callback){
    console.log("Hello");
    callback();
}
function Bye(){
    console.log("Bye");
    
}
function good(){
    console.log("Good");
    
}*/
/*let numbers=[1,2,3,4,5];
numbers.forEach(display);
function double(element,index,array){
    array[index]=element*2;
}
function display(element){
    console.log(element);
}*/
 /*const numbers=[1,2,3,4,5];
 const squares=numbers.map(square);
 console.log(squares);
 function square(element){
    return Math.pow(element,2)

 }*/
/*const dates=["2004-11-24","2002-03-25"];
const formattedd=dates.map(formatted);
console.log(formattedd);
function formatted(element){
    const parts=element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}}`;
}*/
/*const numbers=[1,2,3,4,5,6,7,8,9,0];
const evennums=numbers.filter(isEven);
console.log(evennums);
function isEven(element){
    return element%2===0;
}*/
/*const grades = [23,45,67,89,09,98];
const maximum=grades.reduce(getMax);
console.log(maximum);
function getMax(accumulator,element){
    return Math.max(accumulator,element);
}*/
/*const hello= function(){
    console.log("Hello");
}
hello();*/
 /*const hello = (name) => {console.log(`Helllo ${name}`);}
 hello("KNR");
setTimeout(hello,3000);*/
/*const person1 = {
    firstName: "Karra",
    lastName: "Neha",
    age:20,
    sayHello: function(){console.log(`hello ${this.lastName}`)},
}
const person2 = {
    firstName: "Tanku",
    lastName: "Niharika",
    age:19,
}
console.log(person1.firstName);
console.log(person2.firstName);
person1.sayHello();*/
/*function Car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive=function(){console.log(`you drive ${model}`)}
}
const car1=new Car("Mahindra",`Thar`,2020,"black");
console.log(car1.make);
car1.drive();
console.log(car1.year);*/
/*class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`product:${this.name}`);
         console.log(`price:$${this.price.toFixed(2)}`);

    }
}
const product1=new Product("ABC",27.9);
product1.displayProduct();*/
class MathUtil{
    static PI=3.14159;
    static getCircumference(radius){
        return 2* PI *radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getCircumference(10));