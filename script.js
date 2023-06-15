function filterProductByCategory(category) {
    console.log(category);
}

var divs = ["All-item", "women", "all-men-list", "all-kid-items","all-accessories","all-cosmetics"];
var visibleDivId = null;
function filterProductByCategory(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}