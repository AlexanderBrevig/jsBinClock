var BINCLOCK = {
  
  tick: function(this_ref) {
    timenow = new Date();
    this_ref.toggle("H1", Math.floor(timenow.getHours() / 10));
    this_ref.toggle("H2", timenow.getHours() % 10);
    this_ref.toggle("M1", Math.floor(timenow.getMinutes() / 10));
    this_ref.toggle("M2", timenow.getMinutes() % 10);
    this_ref.toggle("S1", Math.floor(timenow.getSeconds() / 10));
    this_ref.toggle("S2", timenow.getSeconds() % 10);
    //$(".clock_row div").css("height", (window.screen.availHeight-200)/4 )
    setTimeout(function(){this_ref.tick(this_ref);}, 1000);  
  },
  
  //we could have made a function helper for toggling but
  //because we use setTimeout we would also need to pass
  //a ref to this, and I'm just too lazy
  //I want to get the clock working
  toggle: function(col, val) {
    var $col = $("#"+col);
    var $div = $col.find("div");
    $div.removeClass("on");
    $div.addClass("off");
    if (((val) & (1<<(0)))) {
      $div = $col.find(".1");
      $div.addClass("on");
      $div.removeClass("off");
    }
    if (((val) & (1<<(1)))) {   
      $div = $col.find(".2");
      $div.addClass("on");   
      $div.removeClass("off");   
    }
    if (((val) & (1<<(2)))) {   
      $div = $col.find(".4");    
      $div.addClass("on"); 
      $div.removeClass("off");  
    }
    if (((val) & (1<<(3)))) {     
      $div = $col.find(".8");   
      $div.addClass("on");
      $div.removeClass("off");
    }
  }
};

$(function(){
  BINCLOCK.tick(BINCLOCK);
});