
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