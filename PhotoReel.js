var main = function() {
   var SlideHeight = 90;
   var SlideSpeed = 1000;
   var Pause = 3000;
   var CurrentSlide = 1;
   
   var $gallerythumbnail = $('.gallerythumbnail');
   var $galleryimage = $gallerythumbnail.find('.galleryimage');
   
   setInterval(function() {
   $gallerythumnail.animate({'margin-top': '-='+SlideHeight}, SlideSpeed, function() {
    CurrentSlide++;
    if (CurrentSlide === $galleryimage.Height) {
       CurrentSlide = 1;
       $gallerythumbnail.css('margin-top', 0);
         };
      });
   }, Pause); 
};
$(document).ready(main);
