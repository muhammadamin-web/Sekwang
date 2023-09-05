

// Mobile menu variables
const check = document.getElementById('check');
const links = document.querySelectorAll('.menu ul a');
const cancelBtn = document.querySelector('.cancel');

function closeMenu(event) {
    if (check.checked) {
        check.checked = false;
    }
    if (event.target.classList.contains('lang')) {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    }
}
function closeMenuOnly() {
    if (check.checked) {
        check.checked = false;
    }
}

links.forEach(link => {
    link.addEventListener('click', closeMenu);
});

cancelBtn.addEventListener('click', closeMenuOnly);