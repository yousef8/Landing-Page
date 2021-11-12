// First Feature
// Building the NavBar
function navBar() {
    let sections = document.querySelectorAll('section');
    let count = sections.length;
    let navigation_bar = document.querySelector('ul');
    document.querySelector('nav').style.display = 'none'
    for (let i = 0; i < count; i++) {
        let li = document.createElement('li');
        li.className = 'neon';
        let a = document.createElement('a');
        a.href = `#${sections[i].id}`;
        a.innerText = `section ${i+1}`;
        li.appendChild(a)
        navigation_bar.appendChild(li);
    }
    document.querySelector('nav').style.display = 'block';
}
navBar();

// Second Feature
// Marking an Active Section
let options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5
};

let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function(entry, index, entries) {
        if (entry.isIntersecting === true) {
            entry.target.className = 'activ-sec';
        } else {
            entry.target.classList.remove('activ-sec')
        }
    });
}, options);

let targets = document.querySelectorAll('section');
targets.forEach((target) => {observer.observe(target)});