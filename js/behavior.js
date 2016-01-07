$(function(){
      /* ------- Home Page Behaviour --------- */

     /* ------- Home Page Behaviour --------- */

     /* ------- About Page Behaviour --------- */

    /* ------- About Page Behaviour --------- */

    /* ------- Skills Page Behaviour --------- */
      //Add an id
      $("#skills .skill-card").each(function(index,element){
        $(element).attr("id","skill"+index);
      });
      //Attach a click event to each skill card
      $("#skills .skill-card").on("click",animate)
                              .one("click",function(e){
                                  $(this).append("<a class='close'><i class='icon ion-ios-close-outline'></i></a>");
                              });//To append once the close button
   /* ------- Skills Page Behaviour --------- */

   /* ------- Articles Page Behaviour --------- */

  /* ------- Articles Page Behaviour --------- */

  /* ------- Contact Page Behaviour --------- */

 /* ------- Contact Page Behaviour --------- */

});

//Animation function
  //number of clicks
  var clicks = 0;
function animate(event){
    //Incrementing clicks
    clicks++;
    //Affect $this the the clicked element so we can hide every other skill card
    var $this = $(this);
    //Hide every skill card that is not clicked
    $("#skills .skill-card")
    .not($this).hide();

    //Show the close button
    $(this).find(".close").show();

    //This is a fix for the choosed layout we had to expand it so the skill card can expand
    $(".col-1, .col-2")
    .css({"position" : "relative", "width" : "100%"});
    //The animation itself using anitmate.css and custom animation
    if(clicks <= 1){
      $(this)
             .addClass("animated jello")
             .animate({
             "position" : "absolute",//First make it absolute
             "z-index" : "1",//Make Sure it on top
             "margin-left" :"0",//Remove any margin
             "width" : "100%",//Make it fill th parent div
             "height" : "100%"},//Set a static hieght
             200,"swing",onComplete);//When the animation is finished we jump to onComplete function
    }

    $(this).css({"cursor":"auto"});
}
//onComplete Function
function onComplete(){
  //Get the DOM object of the animated element
  var $this = $(this);
  //Get the position of the element
  var skillPosition = $this.offset();
  //Autoscroll
  $('html, body').animate({scrollTop: skillPosition.top}, "fast","swing");
  //Adding behaviour when the close button is clicked
    $(".close").click(function(e){
      clicks = 0;
      //Find the close button inside the animated skill card
      $this.find(".close").hide();
      //Reverse the animation
      $this
        .removeClass("animated jello")
        .removeAttr("style");
      //Reset the skill columns default style
      $(".col-1, .col-2")
      .css({"position" : "static", "width" : "auto"});
      //Then fadein everything thats was fadeout
      $("#skills .skill-card").not($this).fadeIn("slow");
      //Hide The Content
      $this.find("#skillContent").fadeOut("fast");
      //Retrun false to restart the animation for the second click
      return false;
      });

      /* ______ Skill Content ________ */
      $this.find("#skillContent").delay(1500).fadeIn(1000);
}
