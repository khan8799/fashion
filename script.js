var navBarLinks = [
  {
    li: {
      id: "",
      class: ['nav-item'],
    },
    anchor: {
      text: 'HOME',
      class: ['nav-link'],
      href: './index.html'
    }
  },
  {
    li: {
      id: "",
      class: ['nav-item']
    },
    anchor: {
      text: "WOMENS",
      class: ['nav-link'],
      href: ''
    }
  },
  {
    li: {
      id: "",
      class: ['nav-item']
    },
    anchor: {
      text: 'MENS',
      class: ['nav-link'],
      href: ''
    }
  },
  {
    li: {
      id: "",
      class: ['nav-item']
    },
    anchor: {
      text: 'Blog',
      class: ['nav-link'],
      href: ''
    }
  },
  {
    li: {
      id: "",
      class: ['nav-item']
    },
    anchor: {
      text: 'Shop',
      class: ['nav-link'],
      href: ''
    }
  },
  {
    li: {
      id: "",
      class: ['nav-item']
    },
    anchor: {
      text: 'Contact',
      class: ['nav-link'],
      href: ''
    }
  }
];

var linkIds = [
  {
    li: {
      id: "all-item",
      class: ['nav-item']
    },
    anchor: {
      text: 'All',
      class: []
    }
  },
  {
    li: {
      id: "women",
      class: ['nav-item']
    },
    anchor: {
      text: 'Womens',
      class: []
    }
  },
  {
    li: {
      id: "all-men-list",
      class: ['nav-item']
    },
    anchor: {
      text: 'Mens',
      class: []
    }
  },
  {
    li: {
      id: "all-kid-items",
      class: ['nav-item']
    },
    anchor: {
      text: 'Kids',
      class: []
    }
  },
  {
    li: {
      id: "all-accessories",
      class: ['nav-item']
    },
    anchor: {
      text: 'Accessories',
      class: []
    }
  },
  {
    li: {
      id: "all-cosmetics",
      class: ['nav-item']
    },
    anchor: {
      text: 'Cosmetics',
      class: []
    }
  }
];

function filterProductByCategory(divId) {
  for(i = 0; i < linkIds.length; i++) {
    element = document.getElementById(linkIds[i].li.id);
    if (linkIds[i].li.id === divId) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}

// Create Navbar Links
const navBarElement = document.getElementById('navbar');

navBarLinks.forEach(link => {
  navBarElement.appendChild(createCategoriesLink(link));
});

// Create Category Links
const categoryElement = document.getElementById('categories');

linkIds.forEach(link => {
  categoryElement.appendChild(createCategoriesLink(link));
});

function createCategoriesLink(link) {
  const li = document.createElement('li');

  link.li.class.forEach(c => li.classList.add(c));
  
  li.appendChild(createAnchor(link.anchor, link.li.id));
  return li;
}

function createAnchor(anchor, parentId = '') {
  const anchorElement = document.createElement('a');
  anchorElement.innerText = anchor.text;
  anchor.class.forEach(c => anchorElement.classList.add(c));

  if (anchor.href) anchorElement.setAttribute('href', anchor.href);

  anchorElement.addEventListener('click', () => filterProductByCategory(parentId));

  return anchorElement;
}