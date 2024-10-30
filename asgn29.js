// 1.

var score=89;
(score>=60)?(score>=90)?console.log("Excellent"):console.log("Good"):console.log("Needs Improvement")

// 2. 

var day="Sunday";
(day=="Saturday"||day=="Sunday")?console.log("weekend"):console.log("weekday")

// 3. 

var x="madam";
var y="";
for(i=x.length-1;i>=0;i--){
        y+=x[i];
}
(y==x)?console.log("Palindrome"):console.log("Not a Palindrome")

// 4. 

var ip="HELLO";
var op="";
for(i=0;i<ip.length;i++){
    op+=ip[i];
    console.log(op);
}