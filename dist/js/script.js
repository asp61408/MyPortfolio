const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__scale-percent'),
    lines = document.querySelectorAll('.skills__scale-graph span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function () {

    // $("[data-modal=consultation]").on("click", function () {
    //     $(".overlay, #consultation").fadeIn("slow");
    // });

   

    // function validateForms(form) {
    //     $(form).validate( {
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             // phone: {
    //             //     required: true,
    //             //     minlength: 11
    //             // }
    //         },
    //         messages: {
    //             name: {
    //                 required: "Пожалуйста, введите свое имя",
    //                 minlength: jQuery.validator.format("Не менее {0} символов!")
    //             },
    //             // phone: {
    //             //     required: "Пожалуйста, введите свой номер телефона",
    //             //     minlength: jQuery.validator.format("Не менее {0} символов!")
    //             // },
    //             email: {
    //                 required: "Пожалуйста, введите свой e-mail",
    //                 email: "Формат почты: name@damain.com"
    //             }
    //         }
    //     });
    // };

    // validateForms("#order form");
    // validateForms('#consultation form');
    // validateForms('#consultation-form');

    $('form').submit(function (e) {
        e.preventDefault();

        // if (!$(this).valid()) {
        //     return;
        // };
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // $('#consultation, #order').fadeOut();
            $('#thanks').fadeIn('slow');
            // $('form').trigger('reset');
        });
        return false;
    });

    // $(".contacts__btn").each(function (i) {
    //     $(this).on("click", function () {
    //         $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
    //         $(".overlay, #thanks").fadeIn("slow");
    //     });
    // });

    $(".modal__close").on("click", function () {
        $(".overlay, #thanks").fadeOut("slow");
    });

    // $('input[name=phone]').mask("+7 (999) 999-99-99");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $(".pageup").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    new WOW().init();

});

    // codeharmony.ru

