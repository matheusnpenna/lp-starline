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
const yearEl = document.querySelector('.starline-footer__divider-info__year')

if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}
