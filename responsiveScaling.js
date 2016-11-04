var $H1 = $("h1");
var $H3 = $("h3");
var $H4 = $("h4");
var $P = $("p");
var $HeaderDiv = $(".headerdiv");
function doSizing() {
  if (screen.width >= 990) {
    $H1.css("font-size", 36);
    $H3.css("font-size", 24);
    $H4.css("font-size", 18);
    $P.css("font-size", 14);
    $HeaderDiv.css("margin-top", "-99px");

  } else if (screen.width <= 990) {
    $H1.css("font-size", Math.floor((1/screen.width)*36000));
    $H3.css("font-size", Math.floor((1/screen.width)*24000));
    $H4.css("font-size", Math.floor((1/screen.width)*18000));
    $P.css("font-size", Math.floor((1/screen.width)*14000));
    var HeaderMargin = -1 *$HeaderDiv.height()-30;
    $HeaderDiv.css("margin-top", HeaderMargin);
  }
}
setInterval(function(){doSizing()},0);
$(document).ready(doSizing);
