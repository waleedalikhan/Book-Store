$(function() {
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true
      })
      $(window).scroll(function() {
          let position = $(this).scrollTop()
          if(position >= 370){
              $('.gallery').addClass('change').removeClass('first-row', 'second-row')
            }else{
                $('.gallery').addClass('first-row', 'second-row').removeClass('change')
            }
        })
        $('.writers-accordian').click(function(event) {
            if(event.target.id.split('-')[0] === 'button') {
                $('#book1').attr('src', '/res/img/writers/' + event.target.id.split('-')[1] + '-book1.jpg' )
                $('#book2').attr('src', '/res/img/writers/' + event.target.id.split('-')[1] + '-book2.jpg' )
            }
        })
    })
        