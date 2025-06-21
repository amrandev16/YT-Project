

$(document).ready(function(){

    ///////////////// slider ///////////////////

    $('#hero-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    navText:['PREV','NEXT'],
    smartSpeed:1000,
    responsive:{
        0:{
           nav:false,
        },
        768:{
            nav:true,
        }
    }
})

});

    /////////////////project  slider ///////////////////

    
$(document).ready(function(){

    ///////////////// slider ///////////////////

    $('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true ,
    navText:['PREV','NEXT'],
    dots:false,
    margin:24,
    smartSpeed:1000,
    responsive:{
        0:{
         items:1,
         nav:false,
         margin:0,
        },
        768:{
            items:2,
        },
        1140:{
            items:2,
            // center:true,
        }
    }
})

});

   ///////////////// PROJECT ///////////////////

$('#reviews-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
   dots:true,
   items:1,
   smartSpeed:800
    
})













// $(document).ready(function(){
//     //////HERO SLIDER/////
//     $('#hero-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
           
//         },
//         600:{
           
//         },
//         1000:{
            
//         }
//     }
// })
// });

