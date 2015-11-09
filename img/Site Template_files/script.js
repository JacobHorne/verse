/* js file */

(function( window, undefined ){


  //NAVIGATION 
	$( function() {

		var buttons = $(".toggle").find("a");
    var divName = $(".wrapper").find("section"); //"look at class pages and find divs"
    var toggleboxes = $(".signin_wrapper").find("a"); 

    //on function creats events
    buttons.on( "click", function(e){   //e is just an object that stores what happened.

      var className = $(this).data("page"); //"data-page" It looks for that. data-????
      divName.hide(); //this basically makes all divs display none

      buttons.css({"background-color" : "black" });

      //$( className ).show( 50 );// takes the string classNAme and displays. on click.
      e.preventDefault();//a loads a page on default, we do not want that, so we prevent it
      $( className ).slideDown( 0 );

    });

    divName.hide(); //hide all divs
    $( ".current_projects" ).show( 100 );//show p1       This is is to show page 1 on load.

    //alternative
    //$( ".p1" ).fadein( 1000 );//show p1 

  });
    
  //OFFSCREEN NAV
  $( function(){

    var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 100,
      'side': 'right'
    });
    
    $('#gio').on('click', function() {
      slideout.toggle();
    });

    $('#x').on('click', function() {
      slideout.close();
    });

  } );


  //POPOVER
  $( function(){

    $( ".darkbox" ).hide();

    $( ".action_button" ).on('click', function() {

      var className = $( this ).data( "page" );
      
      $( ".darkbox" ).toggle();
      $( ".whitebox" ).hide();
      $( className ).show();
    });

    $( ".close_popover" ).on( "click", function( e ){
      $( ".darkbox" ).hide();
      e.preventDefault();
    });

	}); //Jquery Ready Window


  //METERS
  $( function(){

    var meters = $( ".meter" ).find( "span" );

    meters.each( function(){

      var data = $( this ).data( "size" );

      $( this ).css( { "right" : ( 100 - data ) + "%" } );

    } );
  } );

})( window, undefined );