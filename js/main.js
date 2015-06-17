$(document).ready(function(){
            /*$('#choice-any').click(function(){
        console.log('try');
        if(!$(this).hasClass('selected')){
            $(this).addClass('selected');
            $('#choice-man').removeClass('selected');
            $('#choice-woman').removeClass('selected');
        }
    });
    
    $('#choice-man').click(function(){
        console.log('try');
        if(!$(this).hasClass('selected')){
            $(this).addClass('selected');
            $('#choice-any').removeClass('selected');
            $('#choice-woman').removeClass('selected');
        }
    });
    
    $('#choice-woman').click(function(){
        console.log('try');
        if(!$(this).hasClass('selected')){
            $(this).addClass('selected');
            $('#choice-man').removeClass('selected');
            $('#choice-any').removeClass('selected');
        }
    });*/
    $('.radio-choice div').click(function(){
        $('.radio-choice div').each(function(){
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');
        
    });
});



