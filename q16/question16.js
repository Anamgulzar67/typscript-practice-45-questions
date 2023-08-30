"use strict";
let guests = ['alia', 'anaya', 'bisma', 'hurain'];
// guests.forEach(Element => console.log(` ${Element}`));
for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(element);
}
guests.unshift('bano');
console.log(guests);
guests.splice(3, 0, 'anabya');
console.log(guests);
guests.push('razia');
console.log(guests);
// console.log(`new member are ${guests}`)
guests.forEach(Element => console.log(`I like to invite ${Element}`));
