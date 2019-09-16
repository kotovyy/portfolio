  var link = document.querySelector(".js-mobile-menu");
  var menu = document.querySelector(".main-nav-mobile-wrapper");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.add("main-nav-mobile-wrapper-show");

  });

/*	link.addEventListener("click", function(event) {
		if (menu.classList.contains("main-nav-mobile-wrapper-show")) {
            menu.classList.remove("main-nav-mobile-wrapper-show");
          }
	});*/
