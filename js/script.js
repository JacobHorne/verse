/* js file */

(function( window, undefined ){

	$( document ).ready(function() {

		
		var buttons = $(".toggle").find("a");
    var divName = $(".wrapper").find("section"); //"look at class pages and find divs"
    var gio = $(".profile").find("#gio");
    var toggleboxes = $(".signin_wrapper").find("a"); 
   

    //on function creats events
    buttons.on( "click", function(e){   //e is just an object that stores what happened.

      var className = $(this).data("page"); //"data-page" It looks for that. data-????
      divName.hide(); //this basically makes all divs display none
      
      console.log(className);

      $( className ).show( 100 );// takes the string classNAme and displays. on click.
      e.preventDefault();//a loads a page on default, we do not want that, so we prevent it

      //alternative
      //$( className ).slideDown( 1000 );

    });

    divName.hide(); //hide all divs
    $( ".current_projects" ).show( 100 );//show p1       This is is to show page 1 on load.

    //alternative
    //$( ".p1" ).fadein( 1000 );//show p1 
    

    ////////////////////////////////////////////////////////////////////
    gio.on( "click", function(e){

      $(".greendot").toggle();

    });
    ////////////////////////////////////////////////////////////////////

    toggleboxes.on( "click", function(e){
      $(".login_box").hide();

    });
    ////////////////////////////////////////////////////////////////////
	});

})( window, undefined );