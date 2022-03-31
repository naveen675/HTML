let promise1 = a => {
    return new Promise((resolve,reject)=> {

    if(! a){
        reject("Failed");
    }
    else{
        resolve("Success");
    }

})
}


let success = result => {
    console.log(result);
}
let fail = error => {
    console.log(error);
}

let promise2 = new Promise((resolve,reject)=> {

    fetch("https://api.github.com/users/naveen675/repos").then(response => {

        if(! response.ok){
            reject(new Error(`Not able to fetch Data ${response.status}`));
        }
        else{
            resolve(response.json());
        }
    })
    
})

success = result => {
    console.log(result);
}
fail = error => {
    console.log(error);
}

Promise.all([promise1(true),promise2]).then(results => {
    console.log(results);
});

console.log(promise1(false));


let timeout = delay => {

    return new Promise((resolve,reject)=> {

        setTimeout(resolve,delay);
        
})
}

let delay = 3000;
timeout(delay).then(response => {
    console.log(delay);
});
delay = 1000;
timeout(delay).then(response => {
    console.log(delay);
});
delay = 2000;
timeout(delay).then(response => {
    console.log(delay);
});