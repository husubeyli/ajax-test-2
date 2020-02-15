$(document).ready(function(){
     $('#load').on('click', function(){
         $.ajax({
             url: '/ajax-test-2/item.html',
             dataType: 'json'
         }).done(function(response){
             console.log(response)
            $('#siyahi').empty();
            response.images.array.forEach(function(value, index){
                $('#siyahi').append('<img src= "' + value + '">')
            });
         })
     })
})