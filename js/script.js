// for header carousel 
$(document).ready(function(){
    $(".owl-carousel-header").owlCarousel({
      nav:true,
      items:1,
      dots: false,
      loop:true,
      autoplay:true,
      navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
    });
  });

//   for story carousel 
  $(document).ready(function(){
    $(".owl-carousel-story").owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      items:1,
    });
  });

  // config mixitup 
  var mixer = mixitup('.mixCont');