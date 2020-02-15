$(document).ready(function(){
     $('#load').on('click', function(){
         $.ajax({
             url: '/ajax-test-2/item.html',
             dataType: 'json'
         }).done(function(reponse){
            $('#siyahi').empty();
            reponse.images.forEach(element => {
                $('#siyahi').append('<img src="' + value + '">')
            });
         })
     })
})