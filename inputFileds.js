
window.addEventListener('load',() => {

    const input = document.querySelector('#text-box');
    input.addEventListener('input',() => {console.log(event.target.value)});

    const button = document.querySelector('#button');
    const l = button.addEventListener('click',() => {console.log("submitted")});

    button.removeEventListener('click',l);
}
)