prompt('Password');


console.log('Introduction to functions');

console.log(math.max(2,8));

console.log(math.min(2,8));

//user defined functions

const square = function(x){
    return x * x;
}

console.log(square(12));
const makeNoise=function(){
    console.log('pling!');
}
makeNoise();

const power = function(base,exponent){
    let result = 1;
    for (let count = 0;count < exponent;count ++){
        result *= base;
    }
    return result;
};
console.log(power(2,10))

//scope 


let x = 10;
if (true ){
    let y =20;
    var z = 30;
    console.log(x + y +z);
}
//y is not visible because its a local binding
console.log(x + z);


//inner most is given priority
const halve =function (n){
    return n/2;
}
let n =10;
console.log(halve(100));
//->50
console.log(n);
//->10

const hummus = function(factor){
    const ingrideint = function(amount, unit, name){
        let ingridientAmount = amount * factor;
        if (ingridientAmount > 1){
            unit += 's';
        }
        console.log(`${ingridientAmount} ${unit} ${name}`)

    }
    ingrideint(1,'can','chickpeas');
    ingrideint(0.25,'cup','tahini');
    ingridient(0.25 ,'cup','lemon juice');
    ingrideint(1,'clove', 'garlic');
    ingrideint(2 ,'tablespoon','olive oil')
    ingrideint(0.5,'teaspoon','cumin')


}


let launchMissiles = function(){
    missileSystem.launch('now');

};
if(safeMode){
    /* Do nothing*/
}
function square(x){
    return x * x;
}

console.log("The future says",future());
function future(){
    console.log("the future says there will never be flying cars");
}
const pawa = (base , exponent)=>{
    let result =1;
     for (let count =0; count < exponent;count ++){
        result *= base
     }
     return result;
};
const square1 =(x)=>{
    return x * x;
};
const horn =( )=>{
    console.log("Toot");
};
//We want to write a program that prints two numbers: the numbers of cows
//and chickens on a farm, with the words Cows and Chickens after them and zeros
//padded before both numbers so that they are always three digits long.
function farmInventory(cows,chicken){
    let cowString = string(cows);
    while (cowString.length < 3){
        cowString = '0' + cowString;
    }
    console.log(`${cowString} cows`)
    let chickenString = string(chickens);
    while (chickenString.length < 3){
        chickenString = '0' + chickenString;
    }
    console.log(`${chickenString} chicken`)
}
printfarmInventory(7,11);

function printZeroPaddedWithLabel(number ,label){
    let numberString = string (number);
    while (numberString.length < 3){
        numberString = '0' + numberString;
    }
}
function printfarmInventory(cows,chicken,pigs){
    printZeroPaddedWithLabel(cows ,"cows");
    printZeroPaddedWithLabel(chicken,"chicken");
    printZeroPaddedWithLabel(pigs,"pigs");

}
printfarmInventory(7,11,3);




//better way to do the same thing
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
    string = "0" + string;
    }
    return string;
    }
    function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
    }
    printFarmInventory(7, 16, 3);