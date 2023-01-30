$(function(){
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();

        // first pause the audio (in case it is still playing)
        toast.pause();

        // reset the audio
        toast.currentTime = 0;

        // play audio
        toast.play();

        let code = $(e.currentTarget).data('discountcode')
        let productName = $(e.currentTarget).data('product')
        let discount = $(e.currentTarget).data('discount')

        $('#discountPercent').html(discount);

        $('#code').html(code);

        $('#product').html(productName);

        $('#toast').toast({ autohide: false }).toast('show');
    });

    document.onkeydown = function(e) {
        if (e.key === 'Escape'){
            $('#toast').toast('hide');
        }
    };
});