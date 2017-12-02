//= require jquery

 $(document).ready(function() {

  $('.scroll').click(function (){
    $(document).scrollTo('#video', 300);
  });

   $('.scroll-top').click(function () {
     $(document).scrollTo('#navigation', 300);
   });
});

