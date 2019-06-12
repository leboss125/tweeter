$(document).ready(function() {
    $("textarea").on('input',function(){
        // select the counter html tag
        let counter = $('.counter');
        // checking if value is less then 0 
        if(parseInt(counter.text()) < 0){
            // Change css to be red if there is negative number
            counter.css('color','red');
        }else{
            // Else change color to be black
            counter.css('color','black');
        }
        // Substract 1 for each character entre
        counter.text(140 - parseInt($(this).val().length));
      });
  });
