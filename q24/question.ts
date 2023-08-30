let x:number = 13;
let y:number = 10;
let z:number = -7;
let str1:string = 'Hello';
let str2:string = 'Hey';
let str1Lower:string = 'hello';
const languages:Array<string> = ['English', 'Urdu', 'Punjabi'];


// check str1 and str2 are not equal
console.log('str1 and str2 are not equal', str1 !== str2);
// check str1 and str2 are equal
console.log('str1 and str2 are equal', str1 === str2);

// convert str1 and str2 to lower case and check if they are not equal
console.log('lower case str1 and str1Lower not equal', str1.toLowerCase() !== str1Lower);
// convert str1 and str2 to lower case and check if they are equal
console.log('lower case str1 and str1Lower equal', str1.toLowerCase() === str1Lower);

// check x is greater than y
console.log('x is greater than y', x>y );
// check x is less than y
console.log('x is greater than y', x<y);

// check one of x, y and z is positive
console.log('one of x, y and z is positive', x>0 || y>0 || z>0);
// check x, y and z all are positive
console.log('x, y and z all are positive', x>0 && y>0 && z>0);

// check x is odd
console.log('x is odd', x % 2 > 0);
// check x is even
console.log('x is even', x % 2 === 0);

// check if English available in languages array
console.log('English available in languages array', languages.includes('English'));
// check if Hindi available in languages array
console.log('Hindi available in languages array', languages.includes('Hindi'));