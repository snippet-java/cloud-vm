    $('.playbutton,img').click(function(){
            var video = '<div class="video-container"><iframe src="'+ $('img').attr('data-video') +'"></iframe></div>';
            $('.video').hide();
         $('.tube').html(video);
         $('.close').show();
        });
 $('.close').click(function(){
            $('.video').show();
       $('.tube').empty();
     $('.close').hide();
        });

function openNav() {
    document.getElementById("myNav").style.width = "30%";

    document.getElementById("body").style.background = "#0b161d";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("body").style.background = "white";
}

