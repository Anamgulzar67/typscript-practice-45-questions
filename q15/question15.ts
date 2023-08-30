let guests=['alia','anaya','bisma','hurain'];
guests.forEach(Element =>console.log(Element))
console.log(`${guests[1]} and ${guests[3]} will not join us on dimmer party`)
console.log(`now we have to update our list to call the guests in which ${guests[1]} and ${guests[3]} are notincluded`)
 guests[1]='tuba';
 guests[3]='noor';
// guests.forEach(Element => console.log(`I like to invite ${Element}`))
for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`I like to invite ${element}`)
    
}