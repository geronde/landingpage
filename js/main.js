$('.nav').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(".nav ul").css('visibility', 'visible');
}, function() {
    /* Stuff to do when the mouse leaves the element */
    $(".nav ul").css('visibility', 'hidden');
});

$('.hamburger').click(function(event) {
    $(this).toggleClass('is-active');
    $('.toggle-nav').toggleClass('visible animated slideInDown');

});


var $slides = $(".slides"); //slides 
var currentSlide = 0; //keep track on the current slide
var slideTime = 0.8; //fade in / fade out time
var pagesCount = 3;


//TweenLite.set($slides.filter(":gt(0)"), { autoAlpha: 0 }); //we hide all images after the first one

function nextSlide() {
    TweenLite.to($slides.eq(currentSlide), slideTime, {
        autoAlpha: 0
    }); //fade out the old slide
    currentSlide = ++currentSlide % $slides.length; //find out which is the next slide      
    TweenLite.to($slides.eq(currentSlide), slideTime, {
        autoAlpha: 1,
        ease: Expo.easeOut
    }); //fade in the next slide

}


//scrollmagic
var controller = new ScrollMagic.Controller();

//start sliding while scrolling
var sliding_scene = new ScrollMagic.Scene({
        triggerElement: '.sliders',
        duration: '900'

    })
    .on("enter", function(event) {
        console.log('slide started')
        window.timer = setInterval(function() {
            nextSlide()
        }, 2500)

    })
    .on("leave", function(e) {
        console.log('slide ended')
        clearInterval(window.timer)
    })
    .addTo(controller);
//icon devices scenes
$('.device_icons img').addClass('animated')
var popup_devices = new ScrollMagic.Scene({
        triggerElement: '.device_icons'
    })
    .setClassToggle(".device_icons img", "shake")
    .addTo(controller)

var profile_scene = new ScrollMagic.Scene({
        triggerElement: '.profiles'
    })
    .on('enter', function(event) {
        $(".back_group").css({
            transform: 'rotateY(0deg)',
            'z-index': '10'
        });
    })
    .addTo(controller)
//social media
$('.social_media').find('img').addClass('animated');
 var  socialMediaIconsScene=new ScrollMagic.Scene({
    triggerElement:'.site-footer',
    duration:'100%',
    triggerHook:1
  })
  .setClassToggle('.social_media img',"zoomIn")
  .addTo(controller)
