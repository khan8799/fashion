function filterProductByCategory(category) {
    console.log(category);
}

var divs = ["all-item", "women", "all-men-list", "all-kid-items","all-accessories","all-cosmetics"];

function filterProductByCategory(divId) {
  for(i = 0; i < divs.length; i++) {
    element = document.getElementById(divs[i]);
    if (divs[i] === divId) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}