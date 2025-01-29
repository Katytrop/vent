import './modules/ibg.js';
import './modules/isWebp.js';
import './modules/burger.js';
//import './modules/functions.js';
//import './modules/spollers.js';
import './modules/sliders.js';
//import './modules/dynamic-adapt.js';
import {MSIE} from './modules/functions.js';

const isMobile = MSIE(); 


// подсветка хедера
window.addEventListener('scroll', function () {
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});


window.onload = function () {

	// scroll to link
	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');
			const targetElement = document.querySelector(id);

			if (targetElement) {
				const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;

				window.scrollTo({
					top: offsetTop,
					behavior: 'smooth'
				});
			}
		});
	};

	//tabs 
	const buttons = document.querySelectorAll('.tabs__button');
		const tabs = document.querySelectorAll('.tab');
	  
		buttons.forEach(button => {
		  button.addEventListener('click', () => {
			// Удаляем активный класс у всех кнопок и вкладок
			buttons.forEach(btn => btn.classList.remove('active'));
			tabs.forEach(tab => tab.classList.remove('active'));
	  
			// Добавляем активный класс к текущей кнопке и вкладке
			button.classList.add('active');
			document.getElementById(button.dataset.tab).classList.add('active');
		  });
		});


	// GSAP
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.page',
		smooth: 1.5,
		effects: true
	})

	if (window.innerWidth >= 991.98) {
		// gsap.fromTo('.header',
		// 	{ opacity: 0, y: '-100%' },
		// 	{ opacity: 1, y: '0%', duration: 1, delay: 0.5 }
		// );
	
		gsap.fromTo('.main-section__content',
			{ opacity: 0, x: '-100%' },
			{ opacity: 1, x: '0%', duration: 1.5, delay: 2 }
		);
		gsap.fromTo('.main-section__image',
			{ opacity: 0, x: '100%' },
			{ opacity: 1, x: '0%', duration: 1.5, delay: 0.5 }
		);
		gsap.fromTo('.main-section__cover',
			{ opacity: 0, y: '-100%' },
			{ opacity: 1, y: '0%', duration: 1.5, delay: 1.1 }
		);

		//trigger
		const elementsToAnimateTop = [
			'.about__title',
			'.places__title',
			'.places__items',
			'.service__title',
			'.steps__title',
			'.step_7',
			'.partners__title',
			'.works__title'
		];

		const elementsToAnimateLeft = [
			'.about__text',
			'.service__text',
			'.step_1',
			'.step_3',
			'.step_5',
		];

		const elementsToAnimateRight = [
			'.about__advantages',
			'.service__tabs',
			'.step_2',
			'.step_4',
			'.step_6',
		];


		gsap.utils.toArray(elementsToAnimateTop).forEach(element => {
			gsap.to(element, {
				top: "0",
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: element,
					start: 'top 80%',
					end: 'top 50%',
					scrub: true,
				}
			});
		});

		gsap.utils.toArray(elementsToAnimateLeft).forEach(element => {
			gsap.to(element, {
				left: "0",
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: element,
					start: 'top 80%',
					end: 'top 50%',
					scrub: true,
				}
			});
		});

		gsap.utils.toArray(elementsToAnimateRight).forEach(element => {
			gsap.to(element, {
				right: "0",
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: element,
					start: 'top 80%',
					end: 'top 50%',
					scrub: true,
				}
			});
		});

	}
	
}



