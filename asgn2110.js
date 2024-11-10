// 1. Join method

var fruits=['Apple','Banana','Orange'];
var x=fruits.join();
console.log(`"${x}"`);

// 2. 

var numbers=[1,2,3,4,5];
var x=numbers.join("-");
console.log(`"${x}"`);

// 3. 

var chars=['H','e','l','l','o'];
var x=chars.join('');
console.log(`"${x}"`)

// 4. Slice Method

var text='JavaScript is awesome';
var x=text.slice(0,10);
console.log(`"${x}"`);

// 5. 

var sentence='I love learning JavaScript!'
var x=sentence.slice(7,15);
console.log(`"${x}"`);

// 6. 

var text='Frontend Development';
var x=text.slice(-11);
console.log(`"${x}"`);

// 7. Split Method

var date='2024-10-21';
console.log(date.split('-'));

// 8. 

var text= 'I love JavaScript programming';
console.log(text.split(" ",2));

// 9.

var url='https://www.example.com/path/page.html';
console.log(url.split("/"));