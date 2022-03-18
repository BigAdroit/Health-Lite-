// toggling menu code 
let tog = document.querySelector('.toggle')
let display = document.querySelector('.toggling-menu')
tog.addEventListener('click', ()=> {
    display.classList.toggle('display')
})
