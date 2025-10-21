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