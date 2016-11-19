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

	var $sidebar_and_wrraper = $("#sidebar,#wrapper");

	$("#sidebar_toggle").on("click", function () {
		$sidebar_and_wrraper.toggleClass("hide-sidebar");
		if ($sidebar_and_wrraper.hasClass("hide-sidebar"))
			$(this).text("Show sidebar");
		else
			$(this).text("Hide sidebar");
	});
})();
