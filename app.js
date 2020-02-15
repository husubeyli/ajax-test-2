$(document).ready(function(){
     $('#load').on('click', function(){
         $.ajax({
             url: '/ajax-test-2/item.html',
             dataType: 'json'
         }).done(function(response){
            console.log(response)
            $('body').css({
                background: response.background
            })
            $('h1').css(response.h1);
            $('#siyahi').empty();
            response.images.forEach(function(value, index){
                $('#siyahi').append('<img src= "' + value + '">')
            });
            $('h2').html(response.title)
            
         })
     })
})