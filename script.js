var linkIds = [
  {
    id: "all-item",
    text: 'All'
  },
  {
    id: "women",
    text: 'Womens'
  },
  {
    id: "all-men-list",
    text: 'Mens'
  },
  {
    id: "all-kid-items",
    text: 'Kids'
  },
  {
    id: "all-accessories",
    text: 'Accessories'
  },
  {
    id: "all-cosmetics",
    text: 'Cosmetics',
  }
];

function filterProductByCategory(divId) {
  for(i = 0; i < linkIds.length; i++) {
    element = document.getElementById(linkIds[i].id);
    if (linkIds[i].id === divId) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}

const categoryElement = document.getElementById('categories');

linkIds.forEach(link => {
  categoryElement.appendChild(createCategoriesLink(link));
});

function createCategoriesLink(link) {
  const li = document.createElement('li');

  li.classList.add('nav-item');

  const anchor = document.createElement('a');
  anchor.innerText = link.text;
  anchor.addEventListener('click', () => filterProductByCategory(link.id));
  li.appendChild(anchor);
  return li;
}