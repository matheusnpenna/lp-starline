if (window.innerWidth >= 991) {
  const items = document.querySelectorAll('.starline-marquee__wrapper');
  const marqueeInner = document.querySelector('.starline-marquee__inner');
  
  if (marqueeInner && items.length > 0) {
    items.forEach(item => {
      marqueeInner.insertAdjacentElement('beforeend', item.cloneNode(true));
    });
  }
}