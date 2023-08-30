let guests=['alia','anaya','rimsha','bisma','hurain'];
console.log(guests)
console.log(' you can invite only two people for dinner.')
const removed= guests.splice(3);
console.log(removed)
removed.forEach( (elem) => {
    console.log(`hi ${elem} sorry you can\'t invite them to dinner.`);
});
guests.forEach( (elem) => {
    console.log(`hi ${elem}  you are still invited to dinner.`);
});
const remove= removed.splice(2);
console.log(remove)