var header = document.getElementById("header");
var jumbotron = document.createElement("div").className = "jumbotron jtTest";
var containerFluid = document.createElement("div").className = "container-fluid";
var headerDiv = document.createElement("div").className = "row headerdiv sectiontitle";
var titleDiv = document.createElement("div").className = "col-md-3 col-md-offset-1 col-xs-10 col-xs-offset-1 text-center text-nowrap WTBS2 websitetitle";
var WebsiteTitle = document.createElement("h1");
var WebsiteTitleText = document.createTextNode("Auburn Studios");
var column = document.createElement("div").className = "col-md-8";
var Row = document.createElement("div").className = "row";
var headertabs = 4;

function OrganizeElements() {
  column.appendChild(Row);
  WebsiteTitle.appendChild(WebsiteTitleText);
  titleDiv.appendChild(WebsiteTitle);
  headerDiv.appendChild(column);
  headerDiv.appendChild(titleDiv);
  containerFluid.appendChild(headerDiv);
  header.appendChild(jumbotron);
  header.appendChild(containerFluid);
}

function CreateHeaderTabs() {
 for (var i = 0; i < headertabs; i++) {
   var thisHeaderTab = document.createElement("div");
   thisHeaderTab.className = "col-md-2 col-xs-3 orangeGradient WTBS headertab text-center";
   var thisH4 = document.createElement("h4");
   var thisH4Text = document.createTextNode("");
   if (i === 0) {
     thisH4Text.nodeValue = "GALLERIES";
   } else if (i === 1) {
     thisH4Text.nodeValue = "NEWS";
   } else if (i === 2) {
     thisH4Text.nodeValue = "ABOUT";
   } else if (i === 3) {
     thisH4Text.nodeValue = "CONTACT";
   }
   thisH4.appendChild(thisH4Text);
   thisHeaderTab.appendChild(thisH4);
   //Row.appendChild(thisHeaderTab);
 }
}
CreateHeaderTabs();
//OrganizeElements();



