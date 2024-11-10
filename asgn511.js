// palindrome using for loop

var aos=["mom","js","dad","css","madam"];
var x=[];
var rev="";
for(i=0;i<aos.length;i++){
    rev=""
    for(j=aos[i].length-1;j>=0;j--){
        rev=rev+aos[i][j];
    }
    if(rev==aos[i])
    {
        x.push(aos[i]);
    }
}
console.log(x);

// palindrome using while loop

var x=["mom","js","dad","css","madam"];
var y="";
var rev=[];
i=0;
while(i<x.length){
    y="";
    j=x[i].length-1;
    while(j>=0){
        y+=x[i][j];
        j--;
    }
    if(x[i]==y){
        rev.push(x[i])
    }
    i++;
}
console.log(rev);