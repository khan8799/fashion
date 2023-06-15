var linkIds = [
  {
    id: "all-item",
    text: "All",
  },
  {
    id: "women",
    text: "Womens",
  },
  {
    id: "all-men-list",
    text: "Mens",
  },
  {
    id: "all-kid-items",
    text: "Kids",
  },
  {
    id: "all-accessories",
    text: "Accessories",
  },
  {
    id: "all-cosmetics",
    text: "Cosmetics",
  },
];

function filterProductByCategory(divId) {
  for (i = 0; i < linkIds.length; i++) {
    element = document.getElementById(linkIds[i].id);
    if (linkIds[i].id === divId) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}

const categoryElement = document.getElementById("categories");

linkIds.forEach((link) => {
  categoryElement.appendChild(createCategoriesLink(link));
});

function createCategoriesLink(link) {
  const li = document.createElement("li");

  li.classList.add("nav-item");

  const anchor = document.createElement("a");
  anchor.innerText = link.text;
  anchor.addEventListener("click", () => filterProductByCategory(link.id));
  li.appendChild(anchor);
  return li;
}

var navbarLinkTabs = [
  {
    text: "HOME",
    link: "./index.html",
  },
  {
    text: "WOMEN'S",
    link: "javascript:void()",
  },
  {
    text: "MEN'S",
    link: "javascript:void()",
  },
  {
    text: "BLOG",
    link: "javascript:void()",
  },
  {
    text: "SHOP",
    link: "javascript:void()",
  },
  {
    text: "CONTACT",
    link: "./contactUs.html",
  },
];

var navElement = document.getElementById("navbarLinks");

navbarLinkTabs.forEach(function (url) {
  navElement.appendChild(createNavbarLink(url));
});

function createNavbarLink(url) {
  const li = document.createElement('li');
  li.classList.add('nav-item');

  const anchor = document.createElement('a');
  anchor.innerText = url.text;
  anchor.classList.add('nav-link');
  anchor.href = url.link;
  li.appendChild(anchor);
  
  return li;
}

