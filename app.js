//Solution-6

//Solution-7
const userKm= parseFloat(prompt('enter Kilometer value'));
const formulaConstant = 0.622;
const userMile = userKm * formulaConstant;
console.log(`The Value of ${userKm} Km is equal of ${userMile} Mile`);


//Solution-8
const userCel = parseFloat(prompt('enter the Celcius value'));
const userFahrenheit = (userCel * 9/5) + 32;
console.log(`The temperature of ${userCel}°cel is equal to ${userFahrenheit}°F`);


//Solution-9
const randomNum = Math.floor(Math.random() * (10-1)+1);
console.log(randomNum);


//Solution-10
const userNum = parseFloat(prompt('enter the number'));
if(userNum >=0){
    if(userNum ==0){
        console.log('the value is zero')
    }
    else{
        console.log('the value is positive')
    }
}
else{
    console.log('the number is negative')
}