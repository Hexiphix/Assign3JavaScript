$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)

        // Gives toast the information pertaining to the specific discount code clicked
        $('#product').text($(this).data("product"));
        $('#code').text($(this).data("code"));

        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });

    //Monitors the keys that are being pressed down
    $(document).on('keydown', function(e) {
        //If ever escape is pressed
        if(e.key == "Escape") {
            //hide any visible toasts
            $('#toast').toast('hide');
        }
    });
});