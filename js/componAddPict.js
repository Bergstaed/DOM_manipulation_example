/**
 * Created on 20.09.15.
 */

;
( function( $, window, document, undefined ) {

    $.fn.addPict = function() {

        var mainKnot = $( this );
        mainKnot.before($('<img class="addedPict" src="http://dummyimage.com/500x50/1b1db3/fff.jpg&text=Bergstaed">'));
        //mainKnot.before($('<img class="addedPict" src="http://flickholdr.com/400/100">'));

    }

}( jQuery, this, this.document ));


$( document ).ready(function() {

    $( '.js-do-xx' ).each( function() {
        $( this ).addPict();
    });

});

