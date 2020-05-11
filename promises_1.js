// Simple example of Promises

let promise = new Promise((resolve,reject) => {
    resolve();
});

promise
    .then(() => console.log("Finished!!!"))
    .then(() => console.log("I was also executed"))
    .catch(() => console.log("Uh oh!!"));

/* Output - Finished!!!
            I was also executed
            Promise {<resolved>: undefined} */

let promise = new Promise((resolve,reject) => {
    reject();
});

promise
    .then(() => console.log("Finished!!!"))
    .then(() => console.log("I was also executed"))
    .catch(() => console.log("Uh oh!!"));
    
/* Output - Uh oh!!
            Promise {<resolved>: undefined} */