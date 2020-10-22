jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        if ($(window).scrollTop() <= 10) {
            $('header').removeClass('fixed-bar');
        } else {
            $('header').addClass('fixed-bar');
        }
    });

    $('#hamb_button').click(function () {
        if ($(this).hasClass('is-active')) {
            $('.bg').removeClass('active');
            $('.menu_mobile_block').removeClass('active');
            $('#hamb_button').removeClass('is-active');
            $("html,body").css("overflow", "auto");
        } else {
            $('.bg').addClass('active');
            $('.menu_mobile_block').addClass('active');
            $('#hamb_button').addClass('is-active');
            $("html,body").css("overflow", "hidden");

        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 768) {
            $('.bg').removeClass('active');
            $('.menu_mobile_block').removeClass('active');
            $('#hamb_button').removeClass('is-active');
            $("html").css("overflow", "auto");


        } else {
            $('#menu-header-menu .parent span').html('<i class="fal fa-angle-left"></i>');
        }
    });


    $('.bg').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.menu_mobile_block').removeClass('active');
            $('#hamb_button').removeClass('is-active');
            $("html,body").css("overflow", "auto");
        }

    })

    $('li.has-child span').click(function () {
        if (
            $(this).closest("li.has-child").hasClass("active")) {
            $(this).closest("li.has-child").removeClass("active");
        } else {
            $('li.has-child').removeClass("active");
            $(this).closest("li.has-child").toggleClass("active");
        }
    })






    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });






    $('#step_1').animate({opacity: "1"}, 'fast');

    $('.what_do_you_need_ul li').click(function () {
        $('#step_1').removeClass("active");
        $('#step_2').addClass("active");
        $('#step_2 .step_animate').animate({marginLeft : "0"}, 'fast');
        $('.step_item_1').addClass("active_after");
        $('.step_item_2').addClass("active");
    });

    $( function() {
        $( "#datepicker" ).datepicker();
    } );
    $('#sandbox-container .sandbox_datepicker').datepicker({
        todayHighlight: true,
        daysOfWeekHighlighted: "0,6"
    });
    var mail_format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phone_format = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var sms_format = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){4}(\s*)?$/;
    var name_format = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    var last_name_format = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    $('#email').on('input', function () {
        if ($('#email').val().match(mail_format)) {
            $('#email').removeClass("erorr");
        }
    });
    $('#phone').on('input', function () {
        if ($('#phone').val().match(phone_format)) {
            $('#phone').removeClass("erorr");
        }
    });
    $('#sms').on('input', function () {
        if ($('#sms').val().match(sms_format)) {
            $('#sms').removeClass("erorr");
        }
    });
    $('#first_name').on('input', function () {
        if ($('#first_name').val().match(name_format)) {
            $('#first_name').removeClass("erorr");
        }
    });
    $('#last_name').on('input', function () {
        if ($('#last_name').val().match(last_name_format)) {
            $('#last_name').removeClass("erorr");
        }
    });

    $('#step_2 .btn_left').click(function () {
        $('#step_2').removeClass("active");
        $('#step_1').addClass("active");
        $('.step_item_1').removeClass("active_after");
        $('.step_item_2').removeClass("active");
    });

    $('#step_2 .btn_right').click(function () {

        if ($('#email').val().match(mail_format) && $('#phone').val().match(phone_format)){
            $('#email').removeClass("erorr");
            $('#phone').removeClass("erorr");
            $('#step_2').removeClass("active");
            $('#step_sms').addClass("active");
            $('#step_sms .step_animate').animate({marginLeft : "0"}, 'fast');
            $('.step_item_2').addClass("active_after");
        }
        else {
          if ($('#email').val().match(mail_format)){
              $('#phone').addClass("erorr");
          }
          else if($('#phone').val().match(phone_format)){
              $('#email').addClass("erorr");
          }
          else {
              $('#email').addClass("erorr");
              $('#phone').addClass("erorr");
          }
        }
    });


    $('#step_sms .btn_left').click(function () {
        $('#step_sms').removeClass("active");
        $('#step_2').addClass("active");
    });
    $('#step_sms .btn_right').click(function () {

        if ($('#sms').val().match(sms_format)){
            $('#sms').removeClass("erorr");
            $('#step_sms').removeClass("active");
            $('#step_3').addClass("active");
            $('#step_3 .step_animate').animate({marginLeft : "0"}, 'fast');
            // $('.step_item_2').addClass("active_after");
        }

            else {
                $('#sms').addClass("erorr");
            }

    });

    $('#step_3 .skip_step').click(function () {
        $('#step_3').removeClass("active");
        $('#step_4').addClass("active");
        $('#step_4 .step_animate').animate({marginLeft : "0"}, 'fast');
        $('.step_item_3').addClass("active");
        $('.step_item_3').addClass("active_before");

    });
    $('#step_3 .btn_left').click(function () {
        $('#step_3').removeClass("active");
        $('#step_sms').addClass("active");
        $('.step_item_2').removeClass("active_after");
    });
    $('#step_3 .btn_right').click(function () {
        if ($('#first_name').val().match(name_format) && $('#last_name').val().match(last_name_format)){
            $('#first_name').removeClass("erorr");
            $('#last_name').removeClass("erorr");
            $('#step_3').removeClass("active");
            $('#step_4').addClass("active");
            $('#step_4 .step_animate').animate({marginLeft : "0"}, 'fast');
            $('.step_item_3').addClass("active");
            $('.step_item_3').addClass("active_before");
        }
        else {
            if ($('#first_name').val().match(name_format)){
                $('#last_name').addClass("erorr");
            }
            else if($('#last_name').val().match(last_name_format)){
                $('#first_name').addClass("erorr");
            }
            else {
                $('#first_name').addClass("erorr");
                $('#last_name').addClass("erorr");
            }
        }


    });



    $('.insurance_col').click(function (){
        $('.insurance_col').removeClass('active');
        $('.insurance_error').removeClass('active');
        $('#insurance').val('');
        $(this).addClass('active');
    });
    $('#insurance').on('input', function () {
        $('.insurance_col').removeClass('active');
        $('.insurance_error').removeClass('active');
    });

    $('#step_4 .btn_left').click(function () {
        $('#step_4').removeClass("active");
        // $('#step_4 .step_animate').animate({marginLeft : "100vw"}, 'slow');
        $('#step_3').addClass("active");
        $('.step_item_3').removeClass("active");
        $('.step_item_3').removeClass("active_before");
    });
    $('#step_4 .btn_right').click(function () {
        if ( $(".insurance_col").hasClass("active") || $('#insurance').val().match(last_name_format) ) {
            $('.insurance_error').removeClass('active');
            $('#step_4').removeClass("active");
            $('#step_5').addClass("active");
            $('#step_5 .step_animate').animate({marginLeft : "0"}, 'fast');
            $('.step_item_3').addClass("active_after");

        }
        else {
            $('.insurance_error').addClass('active');
        }
    });
    // $('#step_5 .btn_left').click(function () {
    //     $('#step_5').removeClass("active");
    //     $('#step_4').addClass("active");
    //     $('.step_item_3').removeClass("active_after");
    // });
    // $('#step_5 .btn_right').click(function () {
    //     $('#step_5').removeClass("active");
    //     $('#step_6').addClass("active");
    //     $('.step_item_4').addClass("active");
    //     $('.step_item_4').addClass("active_before");
    //     $('#step_6 .step_animate').animate({marginLeft : "0"}, 'fast');
    // });

    $('#step_5 .btn_left').click(function () {
        $('#step_5').removeClass("active");
        $('#step_4').addClass("active");
        $('.step_item_3').removeClass("active_after");
    });

    $('#step_5 .btn_right').click(function () {
        $('#step_5').removeClass("active");
        $('#video_call').addClass("active");
        $('.step_item_4').addClass("active");
        $('.step_item_4').addClass("active_before");
    });

    $('.user_icon').click(function () {
        $('.user_block').addClass('active')
    })

    $('.user_svg').click(function () {
        $('.user_icon img').removeClass('active');
        $(this).addClass('active');
        $('.user_block').addClass('active');
        $('.user_content_inner').removeClass("active");
        $('.user_content_inner_user').addClass('active');
    })
    $('.security_svg').click(function () {
        $('.user_icon img').removeClass('active');
        $(this).addClass('active');
        $('.user_block').addClass('active');
        $('.user_content_inner').removeClass("active");
        $('.user_content_inner_security').addClass('active');
    })
    $('.browse_svg').click(function () {
        $('.user_icon img').removeClass('active');
        $(this).addClass('active');
        $('.user_block').addClass('active');
        $('.user_content_inner').removeClass("active");
        $('.user_content_inner_browse_file').addClass('active');
    })


    $('#user_left').click(function () {
        $('.user_block').removeClass('active')
    })


    // $('#my_browse_file').click(function () {
    //    $('#browse_file').click();
    // })


    $('.sticky_third_block > .active').find('.answer').slideDown();

    $('.question').click(function () {

        if ($(this).hasClass('active')) {
            $(this).find('.answer').slideUp();
            $(this).removeClass('active');
        } else {
            $('.answer').slideUp();
            $('.question').removeClass('active');
            $(this).find('.answer').slideDown();
            $(this).addClass('active');
        }


    });






    $(window).scroll(function () {
        if ($(window).scrollTop() <= 10) {
            $('header').removeClass('fixed-bar');
        } else {
            $('header').addClass('fixed-bar');
        }
    });





    ( function () {
        $.extend($.expr[':'], {
            'off-top': function (el) {
                return $(el).offset().top < $(window).scrollTop()+60;
            },
            'off-top-200': function (el) {
                return $(el).offset().top < $(window).scrollTop()+200;
            },
            'off-top--200': function (el) {
                return $(el).offset().top < $(window).scrollTop()-10;
            },
            'off-top-height': function (el) {
                return ($(el).offset().top + $(el).outerHeight()) < $(window).scrollTop();
            }
        });
    })(jQuery);

    $(document).scroll(function () {
        if($('.sticky_section').is(":off-top")){
           $('.sticky_menu').addClass("active");
        }
        else {
            $('.sticky_menu').removeClass("active");
        }
    });

    $(document).scroll(function () {
        if($('#sticky_fourth_block').is(":off-top--200")){
            $('.sticky_menu').removeClass("active");
            $('.sticky_menu').addClass("active_bottom");
        }
        else {
            $('.sticky_menu').removeClass("active_bottom");

        }
    });

    $(document).scroll(function () {
        if($('.sticky_first_block').is(":off-top-200")){
            $('.sticky_menu li').removeClass('active');
            $('.first_sticky_li').addClass('active');
        }
    });

    $(document).scroll(function () {
        if($('.sticky_second_block').is(":off-top-200")){
            $('.sticky_menu li').removeClass('active');
            $('.second_sticky_li').addClass('active');
        }
    });

    $(document).scroll(function () {
        if($('.sticky_third_block').is(":off-top-200")){
            $('.sticky_menu li').removeClass('active');
            $('.second_third_li').addClass('active');
        }
    });

    $(document).scroll(function () {
        if($('#sticky_fourth_block').is(":off-top-200")){
            $('.sticky_menu li').removeClass('active');
            $('.second_fourth_li').addClass('active');
        }
    });


    $("html").on("click",".sticky_menu li a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });











    function createNewElement(tag, innerContent = null, classStr = null, attr = null) {
        var el = document.createElement(tag);
        el.innerHTML = (innerContent) ? innerContent : "";
        el.className = (classStr) ? classStr : "";
        if (attr) {
            attr.map((attr_rl) => el.setAttribute(attr_rl.name, attr_rl.value));
        }
        return el;
    }


    function attachChilderToParent(html, array_el) {
        array_el.map((el) => html.appendChild(el));
        return html;
    }

    //
    // var requestURL = 'doctors.json';
    // var request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();
    //
    // request.onload = function () {
    //     $('#all').click();
    // };
    //

    // function render_doctors(specialty) {
    //     var doctors = request.response;
    //     $(".doctors_slider .slick-list").css("opacity",'0');
    //     $(".doctors_slider").empty();
    //     $(".doctors_slider").removeClass('slick-initialized');
    //     for (var i = 0; i < doctors.length; i++) {
    //         var doctor_image = createNewElement("img", doctors[i].image, "card-img-top", [{
    //             "name": "src",
    //             "value": doctors[i].image
    //         }, {"name": "alt", "value": doctors[i].name}]);
    //         var lightning = createNewElement("div", '<img src="/images/lightning.svg" alt="lightning"><i class="fa fa-bolt"></i>', doctors[i].lightning);
    //         var cardtop = attachChilderToParent(createNewElement("div", null, "card-top"), [doctor_image,lightning]);
    //         var doctor_specialty = createNewElement("h6", doctors[i].specialty, "h6");
    //         var doctor_star = createNewElement("div", '<i class="fa fa-star"></i>', doctors[i].star);
    //         var doctor_name = createNewElement("h3", doctors[i].name + '<i class="fa fa-check-circle"></i>', "card-title");
    //         var doctor_classification = createNewElement("h4", doctors[i].classification, "h6");
    //         var doctor_stars = createNewElement("div", '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><h6>' + doctors[i].feedback + ' feedback </h6>' , "doctor_stars stars_"+ doctors[i].stars );
    //         var doctor_city = createNewElement("div", '<i class="fa fa-map-marker" aria-hidden="true"></i>' + doctors[i].city, "city");
    //         var doctor_calendar = createNewElement("div", '<i class="fa fa-calendar" aria-hidden="true"></i> <span>Mo</span>,<span>Tu</span>,<span>We</span>,<span>Th</span>,<span>Fr</span>,<span>Sa</span>', doctors[i].calendar + ' calendar_block');
    //         var doctor_btn = createNewElement("a", "Book now", "book_now", [{"name":"href", "value":"#"}] );
    //         var cardBody = attachChilderToParent(createNewElement("div", null, "card-body"), [doctor_star, doctor_specialty, doctor_name, doctor_classification, doctor_stars,doctor_city,doctor_calendar,doctor_btn]);
    //         var catalogItem = attachChilderToParent(createNewElement("div", null, "doctor-item"), [cardtop, cardBody]);
    //         if (specialty == "all") {
    //             $(".doctors_slider").append(catalogItem);
    //         } else if (specialty == doctors[i].specialty) {
    //             $(".doctors_slider").append(catalogItem);
    //         }
    //
    //     };


    //     $('.doctors_slider').slick({
    //         infinite: true,
    //         slidesToShow: 5,
    //         slidesToScroll: 1,
    //         swipeToSlide: true,
    //         arrows: true,
    //         responsive: [
    //             {
    //                 breakpoint: 1600,
    //                 settings: {
    //                     slidesToShow: 4,
    //                     arrows: true,
    //                 }
    //             },
    //             {
    //                 breakpoint: 1300,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     arrows: true,
    //                 }
    //             },
    //             {
    //                 breakpoint: 990,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     // centerMode: true,
    //                 }
    //             },
    //             {
    //                 breakpoint: 576,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     centerMode: true,
    //                     arrows: true,
    //
    //                 }
    //             }
    //         ]
    //     });
    //     $(".doctors_slider .slick-list").css("opacity",'1');
    // };
    // $('.our_doctors_section li').click((e) => {
    //     console.log(e.target.id);
    //     var li_doctors = ('#' + e.target.id);
    //     $('.our_doctors_section li').removeClass('active');
    //     $(li_doctors).addClass('active');
    //     render_doctors(e.target.id);
    // });

});
