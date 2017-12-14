//Hey there, this is just a little script that makes a img-tag inside a container move in the y-axis while the mouse is moved
//I know that this is garbage, but i searched very long to find something like this, so i just wrote it myself,
//Feel free to do we/ you want with it




function headerEffect() {
    //get the full width of the container
    var imgwidth = $("#c001.container").width();

    //give the foreground the same width as the container so the img-tag acts like a background
    $(".foreground").css("width", imgwidth);

    //moves the foreground in the center
    $(".foreground").css("top", "50%");


    //Activates when mouse hovers over the #c001.container
    $("#c001.container").mousemove(function( event ){

        //gets the mouse-y-coordinates
        var corY = event.pageY;


        //gets the width of the container   
        var imgwidth = $(this).width();

        //Here you have to tweak a little, you can use every unit you like, i used %
        //maxY and minY is the % for 'top'
        var minY = 42;
        var maxY = 46;

        //how fast/slow the foreground moves
        var speed = 200;

        //devides the coordinate-Y with the var speed '200'
        var moveY = corY/speed

        //adds minimal percentage so it can't go down or up more    
        var finalMove = minY + moveY;


        //gives the foreground the var finalMove to top    
        $(".foreground").css("top", finalMove + "%");
    });
}

$( document ).ready(function() {
    headerEffect();
});