// Toggle menu
const toggleMenu = document.querySelector('#toggle-menu');
const toggleMenuIcon = toggleMenu.querySelector('img');

const menu = document.querySelector('#menus');

toggleMenu.addEventListener('click', (e) => {
    menu.classList.toggle('translate-y-[-200%]');
    changeMenuIcon();
})

// close menu when Click Menu Link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLinks => {
    navLinks.addEventListener('click', () => {
        menu.classList.add('translate-y-[-200%]');
        changeMenuIcon()
    })
})

const changeMenuIcon = () => {
    const isContainTranslate = menu.classList.contains('translate-y-[-200%]');
    const icon = isContainTranslate ? 'icon-menu.svg' : 'icon-close.svg';
    toggleMenuIcon.src = `./images/icons/${icon}`;
}



// toggle theme 
const html = document.querySelector('html');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');

toggleTheme.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    const themeIcon = isDark ? 'light' : 'dark';
    toggleThemeIcon.src = `./images/icons/icon-${themeIcon}.svg`;
})

