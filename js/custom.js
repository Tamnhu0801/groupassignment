$( function($) {
    "use strict";
 
    $(function() {
		
		// Page Top Toggle Function	
			$("#open").click(function(){
				$("div#panel").slideDown("slow");	
			});	
			$("#close").click(function(){
				$("div#panel").slideUp("slow");	
			});		
			$("#toggle a").click(function () {
				$("#toggle a").toggle();
			});

			
		// Mobile menu ===========================================================		
		jQuery("<select />").appendTo(".jqueryslidemenu");				
			// Create default option "Go to..."
			jQuery("<option />", {
				"selected": "selected",
				"value"   : "",
				"text"    : "Go to..."
			}).appendTo(".jqueryslidemenu select");
						
		// Populate dropdowns with the first menu items
		jQuery(".jqueryslidemenu ul li a").each(function() {
			var el = jQuery(this);
			if(jQuery(this).parents(".jqueryslidemenu ul li ul").length > 0)
			{
				jQuery("<option />", {
					"value"   : el.attr("href"),
					//"text"    : '\xa0'+ '\xa0'+ '\xa0'+ el.text()
					"text"    : " -- "+ el.text()
				}).appendTo(".jqueryslidemenu select");

			} else {
				jQuery("<option />", {
					"value"   : el.attr("href"),
					"text"    : " - "+ el.text()
				}).appendTo(".jqueryslidemenu select");
			}
			});
			//make responsive dropdown menu actually work			
			jQuery(".jqueryslidemenu select").change(function() {													 
				window.location = jQuery(this).find("option:selected").val();
			});
       
 
    });
 
}(jQuery));
  
