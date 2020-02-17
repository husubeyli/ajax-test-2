$(document).ready(function(){
     
         var ajax1 = $('#changeThem').on('click', function(){ $.ajax({
             url: '/ajax-test-2/item.html',
             dataType: 'json'
        })
    })
         var ajax2 =  $('#load').on('click', function(){
            let title_film = $('#title_film').val()
             $.ajax({
             dataType: 'json',
             url: 'http://omdbapi.com/?t=' +title_film + '&apikey=62997bce'
            })
        })
         $.when(ajax1, ajax2 ).done(function(response1, response2){
            $('body').css({
                background: response1.backgroundBlack
            })
             $('#poster').attr('src', response2.Poster),
             $('#info #header').html(`Film name: ${response2.Title}`),
             $('#country').html(`Country: ${response2.Country}`),
             $('#year').html(`Year: ${response2.Year}`)
         })


})
