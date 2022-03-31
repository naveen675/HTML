window.addEventListener("load", () => {

    let starter = document.querySelector("#start");
    let stoper = document.querySelector("#stop");
    let display = document.querySelector("#timer");
    let clear = document.querySelector("#clear");
    let time = 0;
    starter.addEventListener("click", () => {

        
        let increment = () => {
            time++;
            display.value = time;
        }

        console.log("inside starter");
       
        let session = setInterval(increment, 1000);
        
        stoper.addEventListener("click", e => {
            clearInterval(session);
        })
        clear.addEventListener("click", () => {
            time = 0;
            display.value =time;
            clearInterval(session);
            

        })

    })

})