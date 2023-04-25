$(document).ready(function(){
$('#submit').click(function(){
    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let required = [name, email, phone];

    for (input of required){
        if (input = ''){
            $('#message').text('Please Fill Out Required Fields').addClass('warning');
            input.prev('label').addClass('warning');
        }
        else {
            input.prev('label').removeClass('warning');
        }
        }
    if (!$('#label').hasClass('warning')){
        $('#form').remove();
        $('h2').text('Thanks for your feedback!');
    }

    }
)
});

