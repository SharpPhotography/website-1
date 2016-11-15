var galleryContainer = document.getElementById("galleryContainer");
var source = "file:///Users/DEREK/Desktop/MadWireProject/images/galleryPhotos/";
var galleryType = document.getElementById("gallery_Type").innerHTML;
var numPhotos = document.getElementById("baseImage").src.toString().slice(-6,-4);

document.getElementById("gallery_Type").style.display="none";

function CreateSourceLink() {
  return source + galleryType + "_";
}

function CreateImages() {
  if (numPhotos > 14) {
    numPhotos = 14;
  }
  for (var i=numPhotos-1;i>=0;i--) {
    var thisImageContainer = document.createElement("div");
    thisImageContainer.className = "col-md-2 imageContainer darkGrey";
    var thisImage = document.createElement("img");
    thisImage.className = "image";
    if (i>=10) {
      thisImage.src = CreateSourceLink() + i + ".JPG";
    } else {
      thisImage.src = CreateSourceLink() + "0" + i + ".JPG";
    }
    galleryContainer.appendChild(thisImageContainer);
    thisImageContainer.appendChild(thisImage);
  }
}
CreateImages();
