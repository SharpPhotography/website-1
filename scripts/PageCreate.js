//Header Elements------------------------------------
var header = document.getElementsByTagName("header");
var jumbotron = document.createElement("div");
jumbotron.className = "jumbotron jtTest";
var containerFluid = document.createElement("div");
containerFluid.className = "container-fluid";
var headerDiv = document.createElement("div");
headerDiv.className = "row headerdiv sectiontitle";
var titleDiv = document.createElement("div");
titleDiv.className = "col-md-4 col-md-offset-0 col-xs-10 col-xs-offset-1 text-center text-nowrap WTBS2 websitetitle";
var WebsiteTitleLink = document.createElement("a");
WebsiteTitleLink.href = "file:///Users/DEREK/Desktop/MadWireProject/index.html";
var WebsiteTitle = document.createElement("h1");
var WebsiteTitleText = document.createTextNode("Sharp Photography");
var column = document.createElement("div");
column.className = "col-md-8";
var Row = document.createElement("div");
Row.className = "row";
var headertabs = 4;
//Header Elements------------------------------------

//Page Elements----------------------------------
var body = document.getElementsByTagName("body");
var contentMain = document.createElement("div");
contentMain.className = "container-fluid gradient";
var mainRow = document.getElementById("contentItems");
mainRow.className = "row";
var footerDiv = document.createElement("div");
footerDiv.className = "container-fluid footer";
var footer = document.createElement("footer");
var contentItems = document.getElementsByClassName("contentItem");
//Page Elements----------------------------------

function OrganizeElements() {
  header[0].appendChild(jumbotron);
  header[0].appendChild(containerFluid);
  containerFluid.appendChild(headerDiv);
  headerDiv.appendChild(titleDiv);
  titleDiv.appendChild(WebsiteTitleLink);
  WebsiteTitleLink.appendChild(WebsiteTitle);
  WebsiteTitle.appendChild(WebsiteTitleText);
  headerDiv.appendChild(column);
  column.appendChild(Row);

  body[0].appendChild(contentMain);
  body[0].appendChild(footerDiv);
  contentMain.appendChild(mainRow);
  footerDiv.appendChild(footer);

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
     thisHeaderLink.href="file:///Users/DEREK/Desktop/MadWireProject/galleries/italian.html";
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

var galleryTabSection = document.getElementById("galleryTabSection");
var gallerytabNumber = 5;
var tabSource = "file:///Users/DEREK/Desktop/MadWireProject/galleries/";
var thumbSource = "file:///Users/DEREK/Desktop/MadWireProject/images/galleryPhotos/";

function CreateHomePageTabs() {
  for (var i = 0; i < gallerytabNumber; i++) {
    var tabLink = document.createElement("a");
    var boxDiv = document.createElement("div");
    boxDiv.className = "col-md-12 col-xs-12 gallerybox orangeGradient";
    var thumbnailContainer = document.createElement("div");
    var thumbUl = document.createElement("ul");
    thumbUl.className = "gallerythumbnail";
    var thumbLi = document.createElement("li");
    thumbLi.className = "galleryimage";
    var thumbImg = document.createElement("img");
    var tabH4 = document.createElement("h4");
    tabH4.className = "gallerytitle WTBS";
    var tabH4Text = document.createTextNode("");
    if (i === 0) {
      tabLink.href = tabSource + "italian.html";
      thumbImg.src = thumbSource + "Italian/ItalianCars_00.JPG";
      tabH4Text.nodeValue = "Italian";
    } else if (i === 1) {
      tabLink.href = tabSource + "german.html";
      thumbImg.src = thumbSource + "German/GermanCars_05.JPG";
      tabH4Text.nodeValue = "German";
    } else if (i === 2) {
      tabLink.href = tabSource + "american.html";
      thumbImg.src = thumbSource + "American/AmericanCars_03.JPG";
      tabH4Text.nodeValue = "American";
    } else if (i === 3) {
      tabLink.href = tabSource + "swedish.html";
      thumbImg.src = thumbSource + "Swedish/SwedishCars_03.JPG";
      tabH4Text.nodeValue = "Swedish";
    } else if (i === 4) {
      tabLink.href = tabSource + "british.html";
      thumbImg.src = thumbSource + "British/BritishCars_10.JPG";
      tabH4Text.nodeValue = "British";
    }
    galleryTabSection.appendChild(tabLink);
    tabLink.appendChild(boxDiv);
    boxDiv.appendChild(thumbnailContainer);
    thumbnailContainer.appendChild(thumbUl);
    thumbUl.appendChild(thumbLi);
    thumbLi.appendChild(thumbImg);
    boxDiv.appendChild(tabH4);
    tabH4.appendChild(tabH4Text);

  }
}
OrganizeElements();
CreateHeaderTabs();
CreateHomePageTabs();
