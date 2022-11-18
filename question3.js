
let i ;
let j;
const height = Number(prompt('what height?'));
const width =  Number(prompt('what width?'));
for(i = 1;i <=height;1++){
  for (j=1;j<=width ;width++){
    console.log("# \n"+ i * j)
  }
}