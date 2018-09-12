document.addEventListener("DOMContentLoaded", function () {
                let images = ["../img/background1.jpg", "../img/background2.jpg", "../img/background3.jpg"];
                let index = -1;

                window.setInterval(function () {
                    index = (index + 1 < images.length) ? index + 1 : 0;
                    $('header').css({'background':"url('" + images[index] + "')"}); 
                }, 5000);
            });


