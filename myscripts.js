$(document).ready(function(){
$('#submit').click(function(){
    let required = [name, email, phone];
    let name = $('#name').valueOf();
    let email = $('#email').val();
    let phone = $('#phone').val();

    for (input of required){
        if (required.val = ('')){
            $('#message').text('Please Fill Out Required Fields').addClass('warning');
            $('#mess').addClass('warning');
        }
        else {
            $('#mess').class.remove('warning');
        }
        }
    if (!$('#label').hasClass('warning')){
        $('#form').remove();
        $('h2').text('Thanks for your feedback!');
    }

    }
)
});

