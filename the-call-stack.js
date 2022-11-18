function greet(who){
    console.log('hello'+ who);//console log does its job then retruns control to what called thats line4 
}
greet('Harry');//causes control to jump to line 2
console.log('bye');//program reaches its end


//this causes stack to crash
function chicken(){
    return egg();
}
function egg(){
    return chicken();

}
console.log(chicken()+ "came first");