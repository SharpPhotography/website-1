var $Image = $(".imageContainer");
var galleryContainer = document.getElementById("galleryContainer");

$(document).ready(function(){
  $Image.click(function() {
    $("#ExpandedPhoto").remove();
    var ExpandedPhoto = document.createElement("img");
    ExpandedPhoto.className = "imageContainer activeImage darkGrey";
    ExpandedPhoto.id = "ExpandedPhoto";
    ExpandedPhoto.src = $(this).children().attr("src");
    galleryContainer.appendChild(ExpandedPhoto);
    var greyBox = document.createElement("div");
    greyBox.className="greyBox";
    galleryContainer.appendChild(greyBox);
  });
});
setInterval(function() {
  $(document).ready(function() {
    $("#ExpandedPhoto").click(function() {
      $(".greyBox").remove();
      $(this).remove();
    });
  });
},0);
