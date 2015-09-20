;
( function( $, window, document, undefined ) {

    $.fn.initDoIt = function() {

        var mainKnot = $( this );
        mainKnot.after($('<p class="col">text added per <span>after</span></p>'));

    }

}( jQuery, this, this.document ));


$( document ).ready(function() {

    $( '.js-do-xx' ).each( function() {
        $( this ).initDoIt();
    });

});
