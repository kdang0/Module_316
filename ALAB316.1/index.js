//main
const mainEl=document.querySelector("main");
const h1 = document.createElement("h1");

mainEl.style.backgroundColor = 'var(--main-bg)';
h1.textContent = "DOM Manipulation";
h1.style.fontSize = "60px";
h1.style.textAlign = "center";
mainEl.appendChild(h1);
mainEl.pare
//nav
const topMenuEl=document.querySelector("#top-menu");
topMenuEl.style.height="100%";
topMenuEl.style.backgroundColor='var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

//menu buttons
var menuLinks = [
    { text: 'about', href: '/about'},
    { text: 'catalog', href: '/catalog'},
    { text: 'orders', href: '/orders'},
    { text: 'account', href: '/account'},
];

menuLinks.forEach((link) => {
    const menuLink = document.createElement("a");
    menuLink.textContent = link.text;
    menuLink.setAttribute("href", link.href);
    topMenuEl.appendChild(menuLink);
});