document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  var nav = document.querySelector('.nav');
  var open = nav.classList.toggle('is-open');
  this.setAttribute('aria-expanded', open ? 'true' : 'false');
});
