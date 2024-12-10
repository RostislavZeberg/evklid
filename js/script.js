// Поле поискса

let searchIcon = document.querySelector('.search-icon');
let search = document.querySelector('.search');
let searchClose = document.querySelector('.search__close');

searchIcon.addEventListener('click', function () {
  search.classList.add('search--active');
})

searchClose.addEventListener('click', function () {
  search.classList.remove('search--active');
})

// Слайдер

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	//slidesPerGroup: 3,
	//spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});




