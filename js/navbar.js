const toggler = document.getElementById('navbar-toggle');
const icon = document.querySelector('#navbar-toggle i');
const navMobile = document.getElementById('navbar-collapse');

function menuMobile() {
    navMobile.classList.toggle('visible');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.add('fa-xmark')
        icon.classList.remove('fa-bars')
    }
    else {
        icon.classList.remove('fa-xmark')
        icon.classList.add('fa-bars')
    }
}

//
// CODE PRINCIPAL
//

document.addEventListener("DOMContentLoaded", function () {
    toggler.addEventListener('click', menuMobile)
});