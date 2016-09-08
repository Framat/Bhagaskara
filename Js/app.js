$(document).ready(function() {

    // SLOW SCROLL
    $(".slow").click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1300);
                return false;
            }
        }
    });

    // STICKY MENU
    var $pageNav = $(".move");
    var navigationOffset = $pageNav.offset();

    $(window).scroll(function() {
        if ($(window).scrollTop() > navigationOffset.top) {
            $pageNav.addClass("sticky");
        } else {
            $pageNav.removeClass("sticky");
        }
    });
    // HAMBURGER MENU
     var hamburger = $("#hamburger");

 hamburger.on("click", function() {
     var menu = $(".navigate");
     menu.toggleClass("show");
 });

    // SLIDER
    $('.data-slider').owlCarousel({
        autoplay: 2000,
        loop: true,
        margin: 0,
        dots: false,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
                loop: true
            },
            1201: {
                items: 3,
                dots: false,
                nav: false,
                loop: true
            }
        }
    });

    /// PROGRESS BARS
    $(".progress").each(function() {
        $this = $(this);
        var title = $this.prev().find("span");
        var bar = $this.find("span");
        var percent = bar.width() * 100 / $this.width();
        title.text("0%");
        bar.attr("style", "width:0%");

        $this.bind("inview", function(e) {

            bar.animate({
                width: percent + '%'
            }, {
                duration: 10000,
                step: function(now) {
                    title.text(Math.round(now) + "%");
                }
            });
        });
    });

    $('.progress').trigger('inview');

    /// ANIMATE SLIDER WITH DOTS
    $('.data-slider2').owlCarousel({
        autoplay: 3000,
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
      

    });
    /// GALERY WITH SIMPLE FILTER

    function buttonGallery() {
        /// All kind of buttons
        var showAll = $(".filter").find(".btn-all");
        var showWeb = $(".filter").find(".btn-web");
        var showApp = $(".filter").find(".btn-apps");
        var showIcon = $(".filter").find(".btn-icons");

        /// types of images
        var itemWeb = $(".album").find(".web");
        var itemApp = $(".album").find(".apps");
        var itemIcon = $(".album").find(".icons");

        //all images
        showAll.on("click", function() {

            itemWeb.show();
            itemApp.show();
            itemIcon.show();
        });
        // web images
        showWeb.on("click", function() {

            itemWeb.show();
            itemApp.hide();
            itemIcon.hide();
        });
        //apps images
        showApp.on("click", function() {

            itemWeb.hide();
            itemApp.show();
            itemIcon.hide();

        });
        //icons images
        showIcon.on("click", function() {

            itemWeb.hide();
            itemApp.hide();
            itemIcon.show();

        });

    }
    buttonGallery();


    // VALIDATE FORM
    $("#name").on("blur", function() {

        var input = $(this);
        var name_length = input.val().length;

        if (name_length >= 5 && name_length <= 15) {

            input.removeClass("invalid").addClass("valid");

        } else {

            input.removeClass("valid").addClass("invalid");
            alert("Imię jest za krotkie ,bądz za długie!");
        }
    });

    $("#email").on("blur", function() {
        var input = $(this);
        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var correct = pattern.test(input.val());

        if (correct) {

            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
            alert("Wprowadź poprawny email!");
        }
    });

    $("#message").on("blur", function() {
        var input = $(this);
        var message = $(this).val();

        if (message) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
            alert("Wiadomość nie może być pusta!");
        }

    });
    $("#send").on("click", function() {
        var name = $("#name");
        var email = $("#email");
        var message = $("#message");

        var nameVal = $("#name").val();
        var emailVal = $("#email").val();
        var textVal = $("#message").val();

        if (name.hasClass("valid") && email.hasClass("valid") && message.hasClass("valid")) {
            alert("Pomyślnie wysłano formularz!");

        } else {
            event.preventDefault();
            alert("Uzupełnij wszystkie pola!");
        }
    });



});
