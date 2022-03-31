window.addEventListener("load", () => {

    let input = document.querySelector("#timer");
    let date = new Date().getTime();
    let unix = new Date(date);
    input.value = unix.getHours()+":"+unix.getMinutes()+":"+unix.getSeconds(); 
    
    let ticker = () => {
        unix = new Date(date);
        date = new Date().getTime();
        input.value = unix.getHours()+":"+unix.getMinutes()+":"+unix.getSeconds();  
    }
    setInterval(ticker,1000);
    
})

