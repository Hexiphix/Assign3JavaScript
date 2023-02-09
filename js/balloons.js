$(function(){
    // holds all the animate css attention seeker class name endings
    const attenSeek = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "heartBeat"];

    // gives all elements with the class startRandAnimate a random starting animation on page load
    $('.startRandAnimate').addClass("animate__animated animate__" + attenSeek[rand(0, attenSeek.length - 1)]);

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    
    $('.form-check-label').on("mouseenter", function(){
        $('.changeColor').css("color", $(this).siblings(0).attr('id'));
    });

    $('.form-check-label').on("mouseleave", function(){
        $('.changeColor').css("color", "slategray");
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    // Button selects all the checkboxes
    $('#ballSelAll').on('click', function(){
        $('.form-check-input').each(function () {
            if($(this).prop('checked') == false) {$(this).trigger('click');}
        });
    })

    // Button deselects all the checkboxes
    $('#ballDesAll').on('click', function(){
        $('.form-check-input').each(function () {
            if($(this).prop('checked') == true) {$(this).trigger('click');}
        });
    })

    // gives functionality to submit button
    $('#submit').on('click', function(){

        let balloonSelected = false;

        // checks if any of the checkboxes are checked
        $('.form-check-input').each(function () {
            if($(this).prop('checked') == true){ balloonSelected = true; }
        });

        // will show a toast if no balloon checkbox is checked
        if(balloonSelected == false){
            $('#toast').toast({ delay:5000 }).toast('show');
        }
    })

    // Random function that uses Math.random(), a random integer from within the range provided
    function rand(lowest, highest){
        var adjustedHigh = (highest - lowest) + 1;       
        return Math.floor(Math.random()*adjustedHigh) + parseFloat(lowest);
    }
});