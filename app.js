$(document).ready(function(){
     $('#load').on('click', function(){
         $.ajax({
             url: '/ajax-test-2/item.html',
             dataType: 'json'
         }).done(function(response){
            $('#changeThem').on('click', function(){
                if(response.backgroundWhite){
                    response.backgroundBlack
                }else {
                    response.backgroundWhite
                }
                $('body').css({
                    background: response.backgroundWhite
                })
            })

         })
     })
})


$('body').css({
    background: response.backgroundWhite
})
$('h1').css(response.h1).html(response.header);
$('#siyahi').empty();
response.images.forEach(function(value, index){
    $('#siyahi').append('<img src= "' + value + '">')
});
$('h2').html(response.title)