(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


function toggleAnswer(element) {
    const faqItem = element.closest('.faq-question-item'); // Get the parent container
    const answerWrap = faqItem.querySelector('.cf-faq-answer-wrap-2'); // Get the answer container

    if (faqItem.classList.contains('active')) {
        // Collapse the answer
        answerWrap.style.maxHeight = '0';
        faqItem.classList.remove('active');
    } else {
        // Expand the answer
        answerWrap.style.maxHeight = answerWrap.scrollHeight + 'px'; // Dynamic height
        faqItem.classList.add('active');
    }
}

// نصوص الترجمة
const translations = {
    en: {
        title: "Welcome to my website",
        content: "This is some content in English.",
        languageText: "عربي"
    },
    ar: {
        title: "مرحبًا بكم في موقعي",
        content: "هذا هو المحتوى باللغة العربية.",
        languageText: "English"
    }
};

// اللغة الحالية
let currentLanguage = "en";

// وظيفة تبديل اللغة
function toggleLanguage() {
    // تغيير اللغة
    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    // تحديث النصوص على الصفحة
    document.getElementById("title").textContent = translations[currentLanguage].title;
    document.getElementById("content").textContent = translations[currentLanguage].content;
    document.getElementById("language-text").textContent = translations[currentLanguage].languageText;

    // تحديث اتجاه النصوص (اختياري)
    document.body.style.direction = currentLanguage === "ar" ? "rtl" : "ltr";
}


