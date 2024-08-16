//main
const mainEl=document.querySelector("main");
const h1 = document.createElement("h1");
const subMenuEl = document.querySelector("#sub-menu");

mainEl.style.backgroundColor = 'var(--main-bg)';
h1.textContent = "DOM Manipulation";
h1.style.fontSize = "60px";
h1.style.textAlign = "center";
mainEl.appendChild(h1);
mainEl.classList.add('flex-around');
//nav
const topMenuEl=document.querySelector("#top-menu");
topMenuEl.style.height="100%";
topMenuEl.style.backgroundColor='var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

//menu buttons
var menuLinks = [
    {text: 'about', href: '#'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

menuLinks.forEach((link) => {
    const menuLink = document.createElement("a");
    menuLink.textContent = link.text;
    menuLink.setAttribute("href", link.href);
    topMenuEl.appendChild(menuLink);
});

//sub-menu
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


//menu interaction
const topMenuLinks = document.querySelectorAll('#top-menu > a');
console.log(topMenuLinks);
topMenuEl.addEventListener('click', function(e){
    e.preventDefault();
    if(!e.target.matches('a')) return;
    console.log(e.target);
    console.log(e.target.textContent);
    e.target.classList.toggle('active');

    topMenuLinks.forEach(link => {
        console.log(link);
        if(link !== e.target){
            link.classList.remove('active');
        }

    })
    const clickedLink = menuLinks.find(
        (link) => link.text === e.target.textContent
    ); 
    
    if(e.target.innerHTML !== "about" && e.target.classList.contains('active')){
        subMenuEl.style.top='100%';
        buildSubMenu(clickedLink.subLinks);
    } else{
        subMenuEl.style.top='0';
    }

    if(e.target.innerHTML === "about"){
        h1.textContent="About".toUpperCase();
    }
});

//submenu interaction


function buildSubMenu(subLinks){
    subMenuEl.innerHTML='';
    subLinks.forEach(link => {
        const a = document.createElement('a');
        a.setAttribute('href', link.href);
        a.textContent = link.text;
        subMenuEl.appendChild(a);
    });
}


subMenuEl.addEventListener('click', function(e){
    e.preventDefault();
    if(!e.target.matches('a')){
        return;
    }
    console.log(e.target);
    subMenuEl.style.top='0';
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    h1.textContent=`${e.target.textContent.toUpperCase()}`;
});