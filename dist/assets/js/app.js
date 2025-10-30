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
const items = document.querySelectorAll('.starline-marquee__wrapper');
const marqueeInner = document.querySelector('.starline-marquee__inner');

if (marqueeInner && items.length > 0) {
  items.forEach(item => {
    marqueeInner.insertAdjacentElement('beforeend', item.cloneNode(true));
  });
}
const plans = {
  enterprise: [
    { name: 'EMPRESARIAL 1', velocity: '100', price: { int: '94', decimal: '90' } },
    { name: 'EMPRESARIAL 2', velocity: '250', price: { int: '149', decimal: '90' } },
    { name: 'EMPRESARIAL 3', velocity: '500', price: { int: '340', decimal: '00' } }
  ],
  personal: [
    { name: 'LIGHT', velocity: '100', price: { int:'64', decimal: '90' }  },
    { name: 'PLUS', velocity: '200', price: { int:'69', decimal: '90' }  },
    { name: 'TURBO', velocity: '300', price: { int:'89', decimal: '90' }  },
    { name: 'ULTRA', velocity: '500', price: { int:'129', decimal: '90' } }
  ]
}

function removeCurrentPlans() {
  document.querySelectorAll('.section-plans__plans-item')
  .forEach(el => el.remove())
}

function changePlansInfo(planType) {
  const plansWrapper = document.querySelector('.section-plans__plans')

  if (planType && plans[planType] && plansWrapper) {
    removeCurrentPlans()
    
    plansWrapper.setAttribute('style', `grid-template-columns: repeat(${plans[planType].length}, 1fr)`)

    plans[planType].map(p => `
      <div class="section-plans__plans-item">
        <div class="section-plans__plans-item__content">
          <small class="section-plans__plans-item__type">${p.name}</small>
          <div class="section-plans__plans-item__speed">
            ${p.velocity} MB
          </div>
          <small class="section-plans__plans-item__price-text">POR APENAS</small>
          <div class="section-plans__plans-item__price">
            <span class="section-plans__plans-item__price-symbol">R$</span>
            ${p.price.int}
            <span class="section-plans__plans-item__price-cents">,${p.price.decimal}<span class="pink">/mês</span></span>
          </div>
          <a href="https://wa.me/557499949898?text=Quero contratar o plano de 100 megas" target="_blank">
            <button class="btn btn-primary">
              <span>CONTRATAR</span>
            </button>
          </a>
          <p class="section-plans__plans-item__info">Instalação grátis</p>
          <p class="section-plans__plans-item__info">100% fibra</p>
          <p class="section-plans__plans-item__info">Download de até 1000 Mbps</p>
          <p class="section-plans__plans-item__info">Upload de até 225 Mbps</p>
        </div>
      </div>
    `).forEach(p => plansWrapper.insertAdjacentHTML('beforeend', p))
  }
}

const plansSelectorItems = document.querySelectorAll('.section-plans__selector-switch__item')

plansSelectorItems.forEach(el => {
  el.addEventListener('click', event => {
    plansSelectorItems.forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
    const type = el.getAttribute('data-plan-type')
    changePlansInfo(type)
  })
})
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
