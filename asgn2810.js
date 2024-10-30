// 1. 

var age=18;
var citizenship="false";
if(age>=18 && citizenship=="true"){
    console.log("Can Vote");
}else{
    console.log("Can not Vote")
}

// 2. 

var age=20;
var hasinvitation="true";
if(age>=21 || hasinvitation=="true"){
    console.log("Can enter club")
}else{
    console.log("Can not enter club")
}

// 3. 

var age=67;
var ismember=false;
if(age>=65 || ismember==true){
    console.log("Is eligible for discount");
}else{
    console.log("Is not eligible for discount")
}

// 4. 

var gpa=3.7;
var isextracurricular=false;
var isrecommend=false;
if(gpa>=3.5){
    if(isextracurricular || isrecommend)
        console.log("Is eligible for Scholarship");
    else
        console.log("Not eligible for Scholarship");
}else{
    console.log("Not eligible for Scholarship");
}