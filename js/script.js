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
  $('.submit').click(function () {
    var Name = $('#yourname').val();
    var Email = $('#youremail').val();
    var Message = $('#textarea');

    
    
    if (Name == '' || Email == '' || Message == '') {
        alert('Please make sure you have filled in the form correctly!');
    } else {
        alert(' Hi, ' +Name+', We have received your message. Thank you for contacting us.');
    }
});