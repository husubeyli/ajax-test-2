$(document).ready(function(){
     $('#load').on('click', function(){
         $.ajax({
             url: '/ajax-test-2/item.html',
             dataType: 'json'
         }).done(function(reponse){
            $('#siyahi').empty();
            reponse.images.array.forEach(function(value, index){
                $('#siyahi').append('<img src= "' + value + '">')
            });
         })
     })
})