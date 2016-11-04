var $H1 = $("h1");
var $H3 = $("h3");
var $H4 = $("h4");
var $P = $("p");
function doSizing() {
  if (screen.width >= 990) {
    $H1.css("font-size", 36);
    $H3.css("font-size", 24);
    $H4.css("font-size", 18);
    $P.css("font-size", 14);
  } else if (screen.width <= 990) {
    $H1.css("font-size", Math.floor((1/screen.width)*36000));
    $H3.css("font-size", Math.floor((1/screen.width)*24000));
    $H4.css("font-size", Math.floor((1/screen.width)*18000));
    $P.css("font-size", Math.floor((1/screen.width)*14000));
  }
}
setInterval(function(){doSizing()},0);
$(document).ready(doSizing);
