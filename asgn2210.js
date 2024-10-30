// 1. 

var car={brand:"Toyota",model:"Corolla",year:"2020"};
for(x in car){
    console.log(`${x}:${car[x].toUpperCase()}`);
}

// 2. 

var numbers=[1,2,3,4,5];
for(i in numbers)
    console.log(`${numbers[i]}-HI`);

// 3. 

var fruits=['Apple','Banana','Cherry','Date'];
for(i in fruits)
    console.log(`${i}-${fruits[i].toUpperCase()}`);

// 4.

var obj={
    name:'John',
    age:30,
    address:{
        city:'Los Angeles',
        state:'CA'
    }
};
obj.address.city="San Francisco";
console.log(obj);

// 5. 

var car={brand:"Toyota",model:"Camry",year:"2020"};
car.year='2022';
car.model='Corolla';
console.log(car);

// 6.

var recipe={
    name:'pasta',
    servings:2,
    ingredients:['noodles','sauce']
};
recipe.ingredients.push('cheese');
console.log(recipe);