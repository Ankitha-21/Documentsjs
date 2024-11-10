// 1. 

var x=89;
function eo(){
    if(x%2==0)
        console.log("Even");
    else
    console.log("Odd");
}
eo();

// 2. 

var rev=""
var str="madam"
function palin(){
    for(i=str.length-1;i>=0;i--)
        {
        rev+=str[i];
    }
    if(str==rev)
        console.log("Palindrome");
    else
    console.log("Not a Plaindrome");
}
palin();

// 3. 

var x=1000;
var y=415;
var z=576;
function lar(){
    if(x>y && x>z)
        console.log(`${x} is greatest`);
    else if(y>z && y>x)
        console.log(`${y} is greatest`)
    else
    console.log(`${z} is greatest`);
}
lar();