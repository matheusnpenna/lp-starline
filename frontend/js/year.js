const yearEl = document.querySelector('.footer__divider-info__year')

if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}
