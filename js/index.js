/**JQuery Traversing
 * next()
 * nextAll()
 * nextUntil(".x")
 * 
 * prev()
 * prevAll()
 * prevtUntil(".x")
 * 
 * siblings()
 * 
 * parent()
 * parents()
 * parentsUntil("div")
 * 
 * children()
 * find("span")
 * find("*")
 * 
 * first()
 * last()
 * 
 * eq(0)
 * filter("#demo")
 * not(".x")
 * 


 */

$(".color-option").animate({
    "left": `-${$(".colors").outerWidth(true)}px`
}, 500);

$(".color-option i").click(() => {

    let colorsWidth = $(".colors").outerWidth(true)

    if ($(".color-option").css("left") == "0px") {
        $(".color-option").animate({
            "left": `-${colorsWidth}px`
        }, 500);
    } else {
        $(".color-option").animate({
            "left": `0px`
        }, 500);
    }

})

let lis = $(".colors li")
let colors = ["blue", "red", "yellow", "black"]

for (let i = 0; i < lis.length; i++) {
    $(".colors li").eq(i).css("backgroundColor", colors[i])
}
var liIsClicked = false
let selectedColor
lis.click(function () {
    selectedColor = $(this).css("backgroundColor")
    liIsClicked = true
    $(".selected-color").css("color", selectedColor)
    $("#main-nav").css("backgroundColor", selectedColor)
})

if ($(document).scrollTop() >= $("#about").offset().top) {
    $("#main-nav").css("backgroundColor", "#09c")
    $(".back-top").fadeIn(500)

} else {
    $("#main-nav").css("backgroundColor", "transparent")
    $(".back-top").fadeOut(500)

}
$(document, window).scroll(() => {

    if ($(document).scrollTop() >= $("#about").offset().top) {

        if (liIsClicked == false) {
            $("#main-nav").css("backgroundColor", "#09c")
        } else {
            $("#main-nav").css("backgroundColor", selectedColor)

        }

        $(".back-top").fadeIn(500)

    } else {

        $("#main-nav").css("backgroundColor", "transparent")
        $(".back-top").fadeOut(500)

    }



})


$(".back-top").click(() => {
    $("html, body").animate({
        scrollTop: 0
    }, 500)
})


$(document).ready(() => {
    $(".loading-screen").fadeOut(1000, function () {
        $("body").css("overflow", "visible")
    })
})



$(function () {
    $('.skitter-large').skitter({
        interval: 1000,
        auto_play: false,
        label_animation: "left",
        with_animations: ["paralell"]
    });
});



$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 10,
        loop: true,
        autoplay: true
    });
});


new Typed('#demo', {
    strings: [
        'These are the default values...',
        'These are You know what you should do?',
        'Use your own!',
        'Have a great day!'
      ],
    typeSpeed: 30,
    startDelay: 500,
    backSpeed : 20,
    smartBackspace : true
});