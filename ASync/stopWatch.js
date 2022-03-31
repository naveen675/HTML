window.addEventListener("load", () => {

    let start = document.querySelector("#start");
    let stop = document.querySelector("#stop");
    let display = document.querySelector("#timer");
    
    start.addEventListener("click", () => {

        let time = 0;
        let session = setInterval(increment, 1000);
        
        let increment = () => {
            time++;
            display.innerHTML = time;
        }

        stop.addEventListener("click", e => {
            clearInterval(session);
        })
    })

})