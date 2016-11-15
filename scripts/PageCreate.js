var header = document.getElementById("header");
var jumbotron = document.createElement("div");
jumbotron.className = "jumbotron jtTest";
var containerFluid = document.createElement("div");
containerFluid.className = "container-fluid";
var headerDiv = document.createElement("div");
headerDiv.className = "row headerdiv sectiontitle";
var titleDiv = document.createElement("div");
titleDiv.className = "col-md-3 col-md-offset-1 col-xs-10 col-xs-offset-1 text-center text-nowrap WTBS2 websitetitle";
var WebsiteTitleLink = document.createElement("a");
WebsiteTitleLink.href = "https://derek-sharp.github.io/website/index.html";
var WebsiteTitle = document.createElement("h1");
var WebsiteTitleText = document.createTextNode("Auburn Studios");
var column = document.createElement("div");
column.className = "col-md-8";
var Row = document.createElement("div");
Row.className = "row";
var headertabs = 4;

function OrganizeElements() {
  header.appendChild(jumbotron);
  header.appendChild(containerFluid);
  containerFluid.appendChild(headerDiv);
  headerDiv.appendChild(titleDiv);
  titleDiv.appendChild(WebsiteTitleLink);
  WebsiteTitleLink.appendChild(WebsiteTitle);
  WebsiteTitle.appendChild(WebsiteTitleText);
  headerDiv.appendChild(column);
  column.appendChild(Row);
}

function CreateHeaderTabs() {
 for (var i = 0; i < headertabs; i++) {
   var thisHeaderLink = document.createElement("a");
   var thisHeaderTab = document.createElement("div");
   thisHeaderTab.className = "col-md-2 col-xs-3 orangeGradient WTBS headertab text-center";
   var thisH4 = document.createElement("h4");
   var thisH4Text = document.createTextNode("");
   if (i === 0) {
     thisH4Text.nodeValue = "GALLERIES";
     thisHeaderLink.href="https://derek-sharp.github.io/website/galleries/automotive.html";
   } else if (i === 1) {
     thisH4Text.nodeValue = "NEWS";
   } else if (i === 2) {
     thisH4Text.nodeValue = "ABOUT";
   } else if (i === 3) {
     thisH4Text.nodeValue = "CONTACT";
   }
   thisHeaderLink.appendChild(thisHeaderTab);
   thisHeaderTab.appendChild(thisH4);
   thisH4.appendChild(thisH4Text);
   Row.appendChild(thisHeaderLink);
 }
}

var galleryContainer = document.getElementById("galleryTabs");
var galleryTabs = 5;

function CreateGalleryTabs() {
  for (var i = 0; i < galleryTabs; i++) {
    var thisTabDiv = document.createElement("div");
    thisTabDiv.className = "col-md-10 col-md-offset-2 gallerybox orangeGradient";
    var thisTabH4 = document.createElement("h4");
    thisTabH4.className = "gallerytitle WTBS FloatRight";
    var thisH4Text = document.createTextNode("");
    if (i === 0) {
      thisH4Text.nodeValue = "Nature";
    } else if (i === 1) {
      thisH4Text.nodeValue = "Architecture";
    } else if (i === 2) {
      thisH4Text.nodeValue = "Automotive";
    } else if (i === 3) {
      thisH4Text.nodeValue = "Still Life";
    } else if (i === 4) {
      thisH4Text.nodeValue = "Textures";
    }
    thisTabH4.appendChild(thisH4Text);
    thisTabDiv.appendChild(thisTabH4);
    galleryContainer.appendChild(thisTabDiv);
  }
}

OrganizeElements();
CreateHeaderTabs();
CreateGalleryTabs();
