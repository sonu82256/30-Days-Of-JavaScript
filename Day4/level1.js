//--------------1-------------
const age = 12;
if(age >= 18){
    console.log('You are old enough to drive')
}
else{
    console.log(`You are left with ${18-age} years to drive`)
}

//--------------2-------------
const myAge = 24;
const yourAge = 30;
if(myAge < yourAge) console.log(`you are ${yourAge-myAge} years older than me`);

//--------------3-------------
const a = 5;
const b = 3;
if(a > b) console.log(`${a} is greater than ${b}`)
    else console.log(`${a} is smaller than ${b}`)

const result = a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is smaller than ${b}`);

//--------------4-------------
console.log(a %2 == 0 ? `${a} is even no` : `${a} is odd no` )