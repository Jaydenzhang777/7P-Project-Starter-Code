$(".button-one").click(function(){
    let variabe1 =$(".a").val();
    let variabe2 =$(".b").val();
    let variabe3 =$(".c").val(); 
    console.log(variabe1);
    console.log(variabe2);
    console.log(variabe3);
    $(".fortune-display").append(variabe1 + ", your favorite game is " + variabe2 +", and one day you play " + variabe3 + " time, then in 2050 year you will play "+variabe3*10220+ " time.");
    
   });

$(".button-one ").click(function() {
let input=$(".fortune-display").val();
    alert(input);
  
});





$(".button-one").click(function() {
    $(".Q").fadeIn();
    });

$(".button-two").click(function(){
    $(".fortune-display").text("");});
