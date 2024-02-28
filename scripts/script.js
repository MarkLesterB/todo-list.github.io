$(document).ready(function() {
    $('#addButton').click(function() {
        let input = $('#taskInput').val().trim();
        if (input !== '') {
            $('ul').prepend('<li>' + input + '<img src="svg/check.svg" alt="svg-image" class="check"> <img src="svg/delete.svg" alt="svg-image" class="delete"></li>');
            $('#taskInput').val('');
        }
    });

    $('ul').on('click', '.check', function(){
        $(this).parent('li').toggleClass('checked');
    });

    $('ul').on('click', '.delete', function(){
        $(this).parent('li').fadeOut(200);
    });

    $('.refresh').click(function(){
        $('ul').empty();
    });
});
