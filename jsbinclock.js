var BINCLOCK = {
  
  tick: function(this_ref) {
    timenow = new Date();
    this_ref.toggle("H1", Math.floor(timenow.getHours() / 10));
    this_ref.toggle("H2", timenow.getHours() % 10);
    this_ref.toggle("M1", Math.floor(timenow.getMinutes() / 10));
    this_ref.toggle("M2", timenow.getMinutes() % 10);
    this_ref.toggle("S1", Math.floor(timenow.getSeconds() / 10));
    this_ref.toggle("S2", timenow.getSeconds() % 10);
    this_ref.applyStyles();
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
  },
  
  //this should be done by using real css, but because I'm lazy...
  applyStyles: function(){
    var $clock_row = $(".clock_row");
    $clock_row.css("width", "18px");
    $clock_row.css("float", "left");
    
    $clock_row = $(".clock_row div");
    $clock_row.css("width", "15px");
    $clock_row.css("height", "15px");
    $clock_row.css("margin", "1px");
    $clock_row.css("background-color", "#333");
    $clock_row.css("border", "1px solid transparent");
    $clock_row.css("border-radius", "4px");
    
    $(".on").css("background-color","red !important");
    $(".off").css("background-color","#333 !important");
    $(".nan").css("background-color","transparent !important");
  }
};

$(function(){
  BINCLOCK.tick(BINCLOCK);
});