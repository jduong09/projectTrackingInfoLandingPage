document.addEventListener('DOMContentLoaded', () => {
  const menuHamburger = document.getElementById('menu-hamburger');
  const menuClose = document.getElementById('menu-close');
  const menuList = document.querySelector('nav ul');

  menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.add('hide');
    menuClose.classList.remove('hide');
    menuList.classList.remove('hide');
  });

  menuClose.addEventListener('click', () => {
    menuHamburger.classList.remove('hide');
    menuClose.classList.add('hide');
    menuList.classList.add('hide');
  });
});