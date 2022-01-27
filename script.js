const toggle_menu = document.getElementById("togglemenubutton");
const show_items = document.getElementById("mobilemenuitems");



const showContact = () =>{
    document.getElementById("contactform").style.display ="block";
    document.getElementById("topdiv").style.display ="none";
    document.getElementById("botdiv").style.display ="none";

}

const showtext = () =>{
    document.getElementById("contactform").style.display ="none";
    document.getElementById("topdiv").style.display ="block";
    document.getElementById("botdiv").style.display ="block";
}

window.onload = showtext;