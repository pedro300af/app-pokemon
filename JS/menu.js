const iconoMenu = document.querySelector("#img-menu");
const menu = document.querySelector("#menu"); 

iconoMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
});