$(document).ready(function(){
  $("form#fortune-questions").submit(function(event){
    event.preventDefault();
    $("#your-fortune").show();
    let unluckyArray = [];
    let luckyArray = [];
    let allResponseArray = unluckyArray.concat(luckyArray);
    
    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      unluckyArray.push($(this).val());
    });
    $("input:checkbox[name=lucky-events]:checked").each(function(){
      luckyArray.push($(this).val());
      // oh cool! Did you just combine these two lines?
      // Yeah, it should work to auto push each checked box into the array.
      // Did you happen to see my concat let above? Do you think something like that would work?
      // It's EXACTLY the way you want to do that. It'll work
      // I am not sure if it's the best way, but I'm still feeling things out
    });
  });
});