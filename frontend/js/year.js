const yearEl = document.querySelector('.starline-footer__divider-info__year')

if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}
