let number = 0 ;
while (number < 1000)
{
    console.log (number);
    number = number +2 ;

}
//2
let result = 1;
let counter = 0;
while (counter < 10){
    result = result  * 2;
    counter =counter + 1;
}
console.log(result);

let yourName; 
do {
   yourName = prompt('Who are you?');
}while(!yourName);
console.log(yourName);


//for loops
for (let number =0 ;number <= 12;number = number + 2 ){
    console.log(number);
}

for (counter =0;counter < 12;number = number +2){
    result = result * 2;

}console.log(result);

//breaking out of loop


for (let current =20; ;current=current+1){
    if(current %7 ==0){
        console.log(current)
        break;
    }
}
//switch case 
switch (prompt("What weather do you like ?")){
    case "rainy":
        console.log("Remember to bring you umbrella");
    case "sunny":
        console.log("Dress lightly");
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unkonwn type of weather!!");
        break;    
}