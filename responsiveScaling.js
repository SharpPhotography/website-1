var $H1 = $("h1");
var $H4 = $("h4");
var $P = $("p");
function doSizing() {
  if (screen.width >= 990) {
    $H1.css("font-size", 36);
    $H4.css("font-size", 18);
    $P.css("font-size", 14);
  } else if (screen.width <= 350) {
    $H1.css("font-size", 72);
    $H4.css("font-size", 36);
    $P.css("font-size", 28);
  }
}
