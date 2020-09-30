const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

//Fill the Nav
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

function fillMenu() {
  let menu = document.querySelectorAll("nav a");
  let currentMenuItem = 0;
  menu.forEach((item) => {
    currentMenuItem = currentMenuItem + 1;
    let menuKey = "nav-item-" + currentMenuItem.toString();
    item.textContent = siteContent.nav[menuKey];
    item.style.color = "green";
  });
}

fillMenu();

//CALL TO ACTION

//Function for changing text elements
function textChange(selector, obj) {
  let element = document.querySelector(selector);
  return (element.textContent = obj);
}

//function for changing image elements
function attrChange(selector, obj) {
  let element = document.querySelector(selector);
  return element.setAttribute("src", obj);
}

//

//Change Headline
// textChange(".cta-text h1", siteContent.cta.h1);
let h1Split = siteContent.cta.h1.split(" ");
document.querySelector(
  ".cta-text h1"
).innerHTML = `${h1Split[0]} <br> ${h1Split[1]} <br> ${h1Split[2]}`;

//Change Button
textChange(".cta-text button", siteContent.cta.button);

//Change hero heroImage
attrChange("#cta-img", siteContent.cta["img-src"]);

//Features
textChange(
  ".text-content:nth-of-type(1) h4",
  siteContent["main-content"]["features-h4"]
);

//Features siteContent
textChange(".text-content p", siteContent["main-content"]["features-content"]);

//About
textChange(
  ".text-content:nth-of-type(2) h4",
  siteContent["main-content"]["about-h4"]
);

//About siteContent
textChange(
  ".text-content:nth-of-type(2) p",
  siteContent["main-content"]["about-content"]
);

//Image
attrChange("#middle-img", siteContent["main-content"]["middle-img-src"]);

//Services
textChange(
  ".bottom-content .text-content:nth-of-type(1) h4",
  siteContent["main-content"]["services-h4"]
);

textChange(
  ".bottom-content .text-content:nth-of-type(1) p",
  siteContent["main-content"]["services-content"]
);

//Product
textChange(
  ".bottom-content .text-content:nth-of-type(2) h4",
  siteContent["main-content"]["product-h4"]
);

textChange(
  ".bottom-content .text-content:nth-of-type(2) p",
  siteContent["main-content"]["product-content"]
);

//Vision
textChange(
  ".bottom-content .text-content:nth-of-type(3) h4",
  siteContent["main-content"]["vision-h4"]
);

textChange(
  ".bottom-content .text-content:nth-of-type(3) p",
  siteContent["main-content"]["vision-content"]
);

//Contact
textChange(".contact h4", siteContent["contact"]["contact-h4"]);

//address
textChange(".contact p:nth-of-type(1)", siteContent["contact"]["address"]);

//phone
textChange(".contact p:nth-of-type(2)", siteContent["contact"]["phone"]);

//email
textChange(".contact p:nth-of-type(3)", siteContent["contact"]["email"]);

//Prepend Home Link to nav
let homeLink = document.createElement("a");
homeLink.textContent = "Home";
homeLink.style.color = "blue";
document.querySelector("nav").prepend(homeLink);

//Append Search Link to Nav
let searchButton = document.createElement("a");
searchButton.textContent = "Search";
searchButton.style.color = "green";
document.querySelector("nav").appendChild(searchButton);
