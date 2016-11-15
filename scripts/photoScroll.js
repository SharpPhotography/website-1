var main = function() {
   var $PhotoReel = $('.gallerythumbnail');
   var $Photo = $('.gallerythumbnail:first-child');

   var PhotoHeight = 90;
   var SlideSpeed = 1000;
   var Pause = 3000;
   var CurrentSlide = 1;
   setInterval(function() {
   $Photo.animate({'margin-top': '-='+PhotoHeight}, SlideSpeed, function() {
    CurrentSlide++;
    if (CurrentSlide === $Photo.length) {
       CurrentSlide = 1;
       $Photo.css('margin-top', 5);
         };
      });
   }, Pause); 
};
$(document).ready(main);