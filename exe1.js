window.addEventListener('load', () => {

    let counter = document.querySelector('#button-counter');
    counter.addEventListener('click',event => {
       
        event.target.value++;

})
}
)