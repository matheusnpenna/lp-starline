const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    window.open(`https://wa.me/557499949898?text=${
      encodeURIComponent(`
        E-mail: ${data.email}
        Nome: ${data.name}
        WhatsApp: ${data.whastapp}
        Assunto: ${data.subject}
        Mensagem: ${data.message}
      `)
    }`)
  }); 
}
if (window.innerWidth >= 991) {
  const items = document.querySelectorAll('.starline-marquee__wrapper');
  const marqueeInner = document.querySelector('.starline-marquee__inner');
  
  if (marqueeInner && items.length > 0) {
    items.forEach(item => {
      marqueeInner.insertAdjacentElement('beforeend', item.cloneNode(true));
    });
  }
}
let watchFirstOutsideClick = false
const aside = document.querySelector("aside");

function clickOutsideEvent(event) {
  if (watchFirstOutsideClick && aside && !(aside === event.target || aside.contains(event.target))) {
    document.querySelector("aside").style.width = '0px';
    watchFirstOutsideClick = false
  } else {
    watchFirstOutsideClick = true
  }
}

document.querySelector(".btn-menu").addEventListener("click", function() {
  aside.style.width = '70%';
  document.addEventListener('click', clickOutsideEvent);
}, { passive: true });

document.querySelector(".btn-close").addEventListener("click", function() {
  aside.style.width = '0px';
  document.removeEventListener('click', clickOutsideEvent);
}, { passive: true })

document.querySelectorAll(".mobile-menu-item").forEach(item =>{
  item.addEventListener("click", function() {
    aside.style.width = '0px';
  }, { passive: true });
});

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var headerPosition = document.querySelector("header").offsetTop;

function isElementInViewport (el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;
  var navbar = document.querySelector("nav");
  
  if (window.innerWidth <= 991) {
    if (scrolled < headerPosition || scrolled > lastScrollTop) {
      navbar.style.position = "relative";
      navbar.style.background = "transparent";
    } else if (scrolled < lastScrollTop) {
      navbar.style.background = "#420D50";
      navbar.style["z-index"] = "98";
      navbar.style.position = "fixed";
      navbar.style.top = "0px";
      navbar.style.left = "0px";
      navbar.style.right = "0px";
    }
    lastScrollTop =
      scrolled <= 0 ? 0 : scrolled;
  }
}, { passive: true });
const yearEl = document.querySelector('.starline-footer__divider-info__year')

if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}
