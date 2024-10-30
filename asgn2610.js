//  1. 

var arr=[3,5,10,15,23,22,25,35,56];
var ar1=[]
for(i in arr){
  if(arr[i]%5==0){
    ar1.push(arr[i]);
  }
}
console.log(ar1);

//  2. 

var arr=["htmL","csS","javaScriPT","react","angulaR","nodE","EXPREss"];
var arr1=[];
for(i in arr){
  if(arr[i].at(-1)==arr[i].at(-1).toUpperCase())
    arr1.push(arr[i]);
}
console.log(arr1);

//  3. 

var arr=["html","css","js","react","angular"];
var op=[];
for(i in arr){
  if(i%2==0){
    op.push(arr[i].toUpperCase());
  }
}
console.log(op);