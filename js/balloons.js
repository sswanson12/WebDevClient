$(function(){
    randomAttentionSeekerSetup();

    pickadateSetup();

    checkBoxSetup();

    allButtonSetup();

    toastSetup();
});

function allButtonSetup(){
    $('#allColors').on('click', function(e) {
        e.preventDefault();
        
        if (!($('#black').is(':checked') || $('#green').is(':checked') || $('#blue').is(':checked')))
        {
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
            });

            $('.ball').css('visibility', 'visible')

            $('.ball').removeClass('animate__animated animate__bounceOutUp').addClass('animate__animated animate__bounceInDown');
        } else {
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);
                $('.ball').removeClass('animate__animated animate__bounceInDown').addClass('animate__animated animate__bounceOutUp');
            });
        }
    })
}

function toastSetup(){

    //set conditions for toast to appear
    $('#submit').on('click', function(e) {
        e.preventDefault();

        if (!($('#black').is(':checked') || $('#green').is(':checked') || $('#blue').is(':checked')))
        {
            toastMaker();
        }
    });

    //exit toast w/ escape key
    document.onkeydown = function(e) {
        if (e.key === 'Escape'){
            $('#toast').toast('hide');
        }
    };
}

function checkBoxSetup(){
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
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

    $('.form-check-label').on('mouseenter', function () {
        $('#happyBirthday').css('color', $(this).data('color'))
    });

    $('.form-check-label').on('mouseleave', function () {
        $('#happyBirthday').css('color', 'slategray')
    });
}

function pickadateSetup(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
}

function randomAttentionSeekerSetup(){
    let attentionSeekerClasses = ['animate__bounce', 'animate__flash', 'animate__pulse',
        'animate__rubberBand', 'animate__shakeX', 'animate__shakeY', 'animate__headShake',
        'animate__swing', 'animate__tada', 'animate__wobble', 'animate__jello', 'animate__heartBeat',];

    let randomSelection = Math.floor(Math.random() * attentionSeekerClasses.length);

    $('#happyBirthday').addClass('animate__animated ' + attentionSeekerClasses[randomSelection]);
}

function toastMaker(){
    $('#toast').toast({ autohide: false }).toast('show');
}