// navbar javascript begins

const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav');


// onclick event on toggle Collapse span tag

toggleCollapse.onclick = (e) => {
    nav.classList.toggle("collapse");
    e.target.classList.toggle("toggle-click");
}


var active = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        active = i;
    }
}
document.links[active].className = 'active';

// navbar javascript ends




