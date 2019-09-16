"use strict";

let buttonUp = document.querySelector(".up-button");
let header = document.querySelector(".header");
let contactButton = document.querySelector(".welcome__but");
let contacts = document.querySelector(".contact");
let menuItems = document.querySelector(".main-nav__list");
let sendButton = document.querySelector(".welcome__but--form");
let easing = null;

buttonUp.addEventListener('click', function() {

    easing = new BX.easing({
	    duration : 500,
	    start : { scroll : window.pageYOffset },
	    finish : { scroll : 0 },
	    transition : BX.easing.transitions.quart,
	    step : function(state){
	        window.scrollTo(0, state.scroll);
	    },
	    complete : function() {
	        easing = null;
	    }
	});
	easing.animate();
});


contactButton.addEventListener('click', function() {

    easing = new BX.easing({
	    duration : 500,
	    start : { scroll : window.pageYOffset },
	    finish : { scroll : contacts.offsetTop },
	    transition : BX.easing.transitions.quart,
	    step : function(state){
	        window.scrollTo(0, state.scroll);
	    },
	    complete : function() {
	    	easing = null;
	    }
	});
	easing.animate();
});


menuItems.addEventListener('click', function(event) {
	var target = event.target;

	console.log(target.getAttribute('href') === "#skills", 123);

	if(target.getAttribute('href') === "#skills") {

		let services = document.querySelector(".services");

		easing = new BX.easing({
		    duration : 500,
		    start : { scroll : window.pageYOffset },
		    finish : { scroll : services.offsetTop },
		    transition : BX.easing.transitions.quart,
		    step : function(state){
		        window.scrollTo(0, state.scroll);
		    },
		    complete : function() {
		    	easing = null;
		    }
		});
		easing.animate();
	};

	if(target.getAttribute('href') === "#portfolio") {

		let portfolio = document.querySelector(".portfolio");

		easing = new BX.easing({
		    duration : 500,
		    start : { scroll : window.pageYOffset },
		    finish : { scroll : portfolio.offsetTop },
		    transition : BX.easing.transitions.quart,
		    step : function(state){
		        window.scrollTo(0, state.scroll);
		    },
		    complete : function() {
		    	easing = null;
		    }
		});
		easing.animate();
	};

	if(target.getAttribute('href') === "#contacts") {

		easing = new BX.easing({
		    duration : 500,
		    start : { scroll : window.pageYOffset },
		    finish : { scroll : contacts.offsetTop },
		    transition : BX.easing.transitions.quart,
		    step : function(state){
		        window.scrollTo(0, state.scroll);
		    },
		    complete : function() {
		    	easing = null;
		    }
		});
		easing.animate();
	};

	if(target.getAttribute('href') === "#about") {

		let about = document.querySelector(".about");

		easing = new BX.easing({
		    duration : 500,
		    start : { scroll : window.pageYOffset },
		    finish : { scroll : about.offsetTop },
		    transition : BX.easing.transitions.quart,
		    step : function(state){
		        window.scrollTo(0, state.scroll);
		    },
		    complete : function() {
		    	easing = null;
		    }
		});
		easing.animate();
	};
    
});

sendButton.addEventListener('click', function() {

    let contactForm = document.querySelector(".contact__form");
    let contactAfter = document.querySelector(".contact__after-sending");
    contactForm.style.display = "none";
    contactAfter.style.display = "block";
    
});