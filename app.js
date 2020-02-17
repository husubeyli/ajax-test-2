$(document).ready(function(){
     $('#changeThem').on('click', function(){
         $.ajax({
             url: '/ajax-test-2/item.html',
             dataType: 'json'
         }).done(function(response){
                $('body').css({
                    background: response.backgroundBlack
                })

         })
     })
     $('#load').on('click', function(){
         let title_film = $('#title_film').val()
         var ajax2 = $.ajax({
             dataType: 'json',
             url: 'https://omdbapi.com/?t=' +title_film + '&apikey=62997bce'
         }).done(function(response){
             $('#poster').attr('src', response.Poster),
             $('#info #header').html(`Film name: ${response.Title}`),
             $('#country').html(`Country: ${response.Country}`),
             $('#year').html(`Year: ${response.Year}`)
         })
     })
})


// $('body').css({
//     background: response.backgroundWhite
// })
// $('h1').css(response.h1).html(response.header);
// $('#siyahi').empty();
// response.images.forEach(function(value, index){
//     $('#siyahi').append('<img src= "' + value + '">')
// });
// $('h2').html(response.title)