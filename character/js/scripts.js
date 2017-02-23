$(function() {
  $("select").children("option:first-child").hide();

   $("form").submit(function(event) {
   var question1 = parseInt($("#question1").val());
   var question2 = parseInt($("#question2").val());
   var question3 = parseInt($("#question3").val());

   var userScore = (question1 + question2 + question3);

    $("#result").show();

    if (userScore <= 3) {
      $("#result").text("Superman");

  } else {
      $("#result").text("Batman");
      
  }


    event.preventDefault();
  });
});
