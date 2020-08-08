// Part1
console.log('*Variable')
var score = 50;
let score1 = 50;
const score2 = 50;
// score2 = 30 ตัวแปร const ไม่สามารถเปลี่ยนแปลงค่าได้

if(score >= 50){
  var score = 'pass';
}else{
  var score = 'fail'
}

if(score1 >= 50){
  let score1 = 'pass';
}else{
  let score1 = 'fail'
}

if(score2 >= 50){
  const score2 = 'pass';
}else{
  const score2 = 'fail'
}
console.log(`var = ${score}`)
console.log(`let = ${score1}`)
console.log(`const = ${score2}`)
console.log('----------------------')



//Ternary operator (ลดรูป if-else)
console.log('*Ternary operator')
let score3 = 50;
let result = score3 >= 50 ? true : false
console.log(`result = ${result}`)
console.log('----------------------')



// function
console.log('*Function')
// OG function
function fnc1(par){
  return par >= 50 ? true : false
}
console.log(`OG function = ${fnc1(500)}`)

// Arrow function
const ogAwfnc = (par) =>{
  return par >= 50 ? 'pass' : 'fail'
}
const shortAwfnc = (par) => (par) >= 50 ? true : false;

function OGcalArea(width,height){
  return width*height;
}
const shortcalArea = (width,height) => width*height;
const calArea1 = (width) => (height) => width*height;
console.log(`Arrow function = ${ogAwfnc(66)}`)
console.log(`Short arrow function = ${shortAwfnc(649)}`)
console.log(`OG function = ${OGcalArea(5,5)}`)
console.log(`Short function calArea = ${shortcalArea(5,6)}`)
console.log(`function ซ้อน function = ${calArea1(2)(4)}`)
console.log('----------------------')


// Javsscript object
const person = {
  id: 1,
  name: 'Tinngrit',
  age:22
}
person.class = 'pvs' // เพิ่มค่า

const newPerson = person; //กำหนดตัวแปรนำค่าไปใช้ต่อ
const { name: personName,age } = person; //Destructuring

console.log(person);
console.log(`แสดงเฉพาะตัว = ${person.name}`);
console.log(`แสดงเฉพาะตัว = ${person['age']}`);
console.log(newPerson);
console.log(`Destructuring = ${personName}`);
console.log('----------------------')


// Spread & rest operator
const newPersondata = {...person, isRich:'value'} //Spread operator
console.log(`Spread operator เพิ่มค่าใหม่ลงใน Object`)
console.log(newPersondata)

const {name,isRich, ...other} = newPersondata //Rest operator
console.log(`Rest operator แสดงทุกค่ายกเว้นตัวที่กำหนด`)
console.log(other)
console.log(`newPersondata ID = ${other.id}`)

const num = [1,2,3,4];
const plusfive = [...num,5]
console.log(`Num = ${num}`)
console.log(`Spread num = ${plusfive}`)
console.log('----------------------')


// Class
class Persons{
  constructor(id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const objperson = new Persons(1,'Tawan',22);
console.log(objperson)