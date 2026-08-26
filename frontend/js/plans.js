const plans = {
  enterprise: [
    { name: 'EMPRESARIAL 1', velocity: '100', price: { int: '94', decimal: '90' } },
    { name: 'EMPRESARIAL 2', velocity: '250', price: { int: '149', decimal: '90' } },
    { name: 'EMPRESARIAL 3', velocity: '500', price: { int: '340', decimal: '00' } }
  ],
  personal: [
    // { name: 'LIGHT', velocity: '200', price: { int:'64', decimal: '90' }  },
    { name: 'PLUS', velocity: '400', price: { int:'74', decimal: '90' }  },
    { name: 'TURBO', velocity: '600', price: { int:'79', decimal: '90' }  },
    { name: 'ULTRA', velocity: '800', price: { int:'84', decimal: '90' } },
    { name: 'ULTRA MAX', velocity: '1000', price: { int:'119', decimal: '90' } }
  ]
}

function formatVelocity(velocity) {
  if (velocity >= 1000) {
    return `${velocity / 1000} GB`
  }
  return `${velocity} MB`
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
            ${formatVelocity(p.velocity)}
          </div>
          <small class="section-plans__plans-item__price-text">POR APENAS</small>
          <div class="section-plans__plans-item__price">
            <span class="section-plans__plans-item__price-symbol">R$</span>
            ${p.price.int}
            <span class="section-plans__plans-item__price-cents">,${p.price.decimal}<span class="pink">/mês</span></span>
          </div>
          <a href="https://wa.me/557499949898?text=Quero contratar o plano de ${formatVelocity(p.velocity)}" target="_blank">
            <button class="btn btn-primary">
              <span>CONTRATAR</span>
            </button>
          </a>
          <p class="section-plans__plans-item__info">Instalação grátis</p>
          <p class="section-plans__plans-item__info">100% fibra</p>
          <p class="section-plans__plans-item__info">Roteador Wi-Fi</p>
          ${
            planType === 'enterprise' ? `
              <p class="section-plans__plans-item__info">IP Publico Fixo (A Negociar)</p>
              <p class="section-plans__plans-item__info">Prioridade de atendimento</p>` 
              : 
              ''
          }
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