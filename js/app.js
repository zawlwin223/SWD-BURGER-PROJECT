let prevScrollpos = $(window).scrollTop();
$(window).scroll(function(){
let currentHeight=$(this).scrollTop();
if (prevScrollpos > currentHeight) {
$('.nav-section').css('top','0');
} else {
$('.nav-section').css('top','-500px');
}
prevScrollpos=currentHeight;
let screenHeight=$(window).height();
if(currentHeight>=screenHeight-200){
$('.nav-site').addClass('jq-nav');
}else{
$('.nav-site').removeClass('jq-nav');
setActive("home")
}
})
$('.slick-price').slick({
dots: true,
infinite: false,
speed: 300,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animate__animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();
function setActive(current){
$(".nav-link").removeClass("active-1")
$(`.nav-item .nav-link[href='#${current}']`).addClass("active-1")
}
function currentsection(){
let crs=$("section[id]")
crs.waypoint(function(direction){
if(direction=="down"){
let crid=$(this.element).attr("id")
console.log(crid)
setActive(crid)
}
},{offset:"-10%"})
crs.waypoint(function(direction){
if(direction=="up"){
let crid=$(this.element).attr("id")
console.log(crid)
setActive(crid)
}
},{offset:"-10%"})
}
currentsection()
$("#search").click(function(){
console.log("Zaw Lwin Phyo")
$("#search").toggleClass("feather-x")
$("#search-part").toggleClass("search-part-out")
})
$("#shop").click(function(){
console.log("Zaw Lwin Phyo")
$("#shop").toggleClass("feather-x")
})
$(".box-two-one").click(function(){
console.log("I am Luke")
$(".menu-preview").addClass("active")
$(".preview-one").addClass("active")
})
$(".box-two-two").click(function(){
console.log("I am Luke")
$(".menu-preview").addClass("active")
$(".preview-two").addClass("active")
})
$(".box-two-three").click(function(){
console.log("I am Luke")
$(".menu-preview").addClass("active")
$(".preview-three").addClass("active")
})
$(".box-two-four").click(function(){
console.log("I am Luke")
$(".menu-preview").addClass("active")
$(".preview-four").addClass("active")
})
$(".box-two-five").click(function(){
console.log("I am Luke")
$(".menu-preview").addClass("active")
$(".preview-five").addClass("active")
})
$(".box-two-six").click(function(){
console.log("I am Luke")
$(".menu-preview").addClass("active")
$(".preview-six").addClass("active")
})
$(".box-two-seven").click(function(){
console.log("I am Luke")
$(".menu-preview").addClass("active")
$(".preview-seven").addClass("active")
})
$(".box-two-eight").click(function(){
console.log("I am Luke")
$(".menu-preview").addClass("active")
$(".preview-eight").addClass("active")
})
$(".preview .feather-x").click(function(){
console.log("Zlp")
$(".menu-preview").removeClass("active")
$(".preview").removeClass("active")
})
$(window).on("load",function(){
$(".lds-grid").fadeOut(500,function(){
$(this).remove()
})
})