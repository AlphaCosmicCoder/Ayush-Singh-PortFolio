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

const darkMode = () => {
    html.classList.toggle('dark')

    if (setDarkMode !== "on") {
        // Set the value of the itwm to "on" when dark mode is on
        document.getElementById('figureID').style.filter = "drop-shadow(0 0.6rem 0.5rem #022b41ac)";
    } else {
        // Set the value of the item to  "null" when dark mode if off
        document.getElementById('figureID').style.filter = "drop-shadow(0 0.6rem 0.5rem #b4bfb7)";
    }
}

toggleTheme.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark');

    if (setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark', 'on');
        document.getElementById('figureID').style.filter = "drop-shadow(0 0.6rem 0.5rem #b4bfb7)";
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        document.getElementById('figureID').style.filter = "drop-shadow(0 0.6rem 0.5rem #022b41ac)";
        setDarkMode = localStorage.setItem('dark', null);
    }

    const isDark = html.classList.contains('dark');
    const themeIcon = isDark ? 'light' : 'dark';
    toggleThemeIcon.src = `./images/icons/icon-${themeIcon}.svg`;
})

// typewriter effect
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};



// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if (setDarkMode === 'on') {
    darkMode();
}

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
