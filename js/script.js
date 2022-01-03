jQuery(document).ready(function() {
    
    $(".card1").click(function(){
        $(".imagehide1").slideToggle(1000);
        $(".display1").slideToggle(2000);
      });
      $(".card2").click(function(){
        $(".imagehide2").slideToggle(1000);
        $(".display2").slideToggle(2000);
      });
      $(".card3").click(function(){
        $(".imagehide3").slideToggle(1000);
        $(".display3").slideToggle(2000);
      });
      
  });
  $(".text").hover(function(){
    $(this).animate({opacity:'0'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })