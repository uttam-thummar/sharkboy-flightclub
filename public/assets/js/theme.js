
// stellernav activate for main menu
jQuery('.stellarnav').stellarNav({
    theme: 'light',
    breakpoint: 991
});



//https://codepen.io/NinaLena/pen/jmqwxb

function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}


// 
$('.edition-slide').owlCarousel({
    center: true,
    items:2,
    loop:true,
    dots: false,
    margin:15,
    nav    : true,
    navText : ["<i class='arrow arrow-left'></i>","<i class='arrow arrow-right'></i>"],
    responsive:{
        600:{
            items:4
        },
        992:{
            items:4,
            margin:30,
        }
    }
});

// accordian
$(document).ready(function() {
    $(".accordion").on("click", function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle(200);
    });
});