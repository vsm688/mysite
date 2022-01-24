const toggle_menu = document.getElementById("togglemenubutton");
const show_items = document.getElementById("mobilemenuitems");

toggle_menu.addEventListener('click', () => {
    show_items.classList.toggle('active');
});