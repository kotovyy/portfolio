var link = document.querySelector(".main-nav__toggle");
		var popup = document.querySelector(".main-header__logo--closed");
    var poptwo = document.querySelector(".main-nav__toggle--closed");
    var popthree = document.querySelector(".main-nav__wrapper--closed");
		var form = popup.querySelector(".search_form");

		link.addEventListener("click", function(event) {
			event.preventDefault();
        	popup.classList.toggle("main-header__logo--opened");
      });

    link.addEventListener("click", function(event) {
      event.preventDefault();
          poptwo.classList.toggle("main-nav__toggle--opened");
      });

    link.addEventListener("click", function(event) {
      event.preventDefault();
          popthree.classList.toggle("main-nav__wrapper--opened");
      });

		form.addEventListener("submit", function(event) {
          event.preventDefault();
      });

		window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("search_form_wrapper_show")) {
            popup.classList.remove("search_form_wrapper_show");
          }
        }
      });