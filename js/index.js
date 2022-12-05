document.addEventListener('DOMContentLoaded', ()=> {
  const menu = document.querySelector('.header__menu'),
  menuItem = document.querySelectorAll('.nav__link'),
  burger = document.querySelector('.burger');

  burger.addEventListener ('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active')
  });

  menuItem.forEach(el => {
    el.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      burger.classList.toggle('active')
    });
  });

  document.querySelectorAll(`.catalog__tabs-btn`).forEach(function(catalogTabsBtn) {
    catalogTabsBtn.addEventListener(`click`, function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll(`.catalog__tabs-content`).forEach(function(catalogTabsContent) {
        catalogTabsContent.classList.remove(`catalog__tabs-content--active`)
      })
      document.querySelector(`[data-target="${path}"]`).classList.add(`catalog__tabs-content--active`)
    })
  });

  document.querySelectorAll('.faq__btn').forEach(btn => {

    btn.addEventListener('click', (event) => {

      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target='${path}']`).classList.toggle('active');
      btn.classList.toggle('active');

      console.log(event.currentTarget);

      btn.parentNode.classList.remove('active')
      if (event.currentTarget.classList.contains('active')) {
        btn.parentNode.classList.add('active')
      }
    })
  })
})
