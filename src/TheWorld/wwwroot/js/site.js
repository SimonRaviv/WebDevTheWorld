/*site.js*/

(function () {

	//var user_name_element = $("#user_name");
	//user_name_element.text("Simon Raviv");

	//var main = $("#main");
	//main.on("mouseenter", function () {
	//	main.style = "background-color: #888;";
	//});

	//main.on("mouseleave", function () {
	//	main.style = "";
	//});

	//var menu_items = $("ul.menu li a");
	//menu_items.on("click", function () {
	//	var clicked_item = $(this);
	//	alert(clicked_item.text());
	//});

	$("#print_page").click(function () {
		print();
	});

	var $sidebar_and_wrraper = $("#sidebar,#wrapper");
	var $icon = $("#sidebar_toggle i.fa");
	$("#sidebar_toggle").on("click", function () {
		$sidebar_and_wrraper.toggleClass("hide-sidebar");
		if ($sidebar_and_wrraper.hasClass("hide-sidebar")) {
			$icon.removeClass("fa-angle-left");
			$icon.addClass("fa-angle-right");
		}
		else {
			$icon.addClass("fa-angle-left");
			$icon.removeClass("fa-angle-right");
		}
	});
})();
