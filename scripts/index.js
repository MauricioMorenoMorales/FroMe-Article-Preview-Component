const d = document;
const $button = d.querySelector(".button-container"),
     $footer = d.querySelector(".footer-social");

const desplegarmenu = ()=>{
     $footer.classList.toggle('is-active');
     $button.classList.toggle('is-active');
}

$button.addEventListener('click',desplegarmenu);