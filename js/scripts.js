$document.ready(function(){
  $("form#fortune-questions").submit(function(event){
    event.preventDefault();
    $("#your-fortune").show();
    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      const unluckyResponses = $(this).val();
    });
    $("input:checkbox[name=lucky-events]:checked").each(function(){
      const luckyResponses = $(this).val();
    });
  });
});