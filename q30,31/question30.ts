let userNames:string[] = ['Admin', 'Anam', 'Anaya', 'umna'];

userNames.map( elem => {
    if(elem === 'Admin'){
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${elem}, thank you for logging in again.`)
    }
})

// q31
 let userNames=[];

 if(!!userNames.length){
    console.log("mmm");
 }


