// navigation toggle 
let navTogglerBtn = document.querySelector("#nav-toggler-btn")
let loginTogglerBtn = document.querySelector("#login-toggler-btn")
let bodyOverlay = document.querySelector(".body-overlay")
let navMenu = document.querySelector("nav")
let loginMenu = document.querySelector(".header-sign-btns")

function toggleMenu(menu) {
  if (!menu.classList.contains("show") && !menu.classList.contains("hide")) {
    menu.classList.add("show")
  } else if (menu.classList.contains("show")) {
    menu.classList.replace("show", "hide")
  } else {
    menu.classList.replace("hide", "show")
  }
  bodyOverlay.classList.toggle("show")
}

navTogglerBtn.onclick = () => {
  if (loginMenu.classList.contains("show")) toggleMenu(loginMenu)
  toggleMenu(navMenu)
}

loginTogglerBtn.onclick = () => {
  if (navMenu.classList.contains("show")) toggleMenu(navMenu)
  toggleMenu(loginMenu)
}

bodyOverlay.onclick = () => {
  bodyOverlay.classList.remove("show")
  navMenu.classList.replace("show", "hide")
  loginMenu.classList.replace("show", "hide")
}

window.onresize = () => {
  if (window.innerWidth >= 1020 && navMenu.classList.contains("show")) {
    bodyOverlay.classList.remove("show")
    navMenu.classList.remove("show")
  }

  if (window.innerWidth >= 600 && loginMenu.classList.contains("show")) {
    loginMenu.classList.remove("show")
    bodyOverlay.classList.remove("show")
  }
}

// Scrolling 
let header = document.querySelector("header")

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    let element = document.querySelector(this.getAttribute("href"));
    window.scrollTo(0, element.offsetTop - header.clientHeight)

    if (window.innerWidth <= 1020) {
      bodyOverlay.classList.toggle("show")
      navMenu.classList.replace("show", "hide")
    }

  })
})

// testimonial
const testimonials = [
    {
      name: "Viezh, Robert",
      profile_pic_path: "Image/coustmer/coustmer1.svg",
      location: "Warsaw, Poland",
      rating: "4.5",
      message:
        "Wow... I am very happy with this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN is the best",
    },
    {
      name: "Yessica, Christy",
      profile_pic_path: "Image/coustmer/coustmer2.svg",
      location: "Shanxi, China",
      rating: "4.5",
      message:
        "I like it because I can connect with high speeds even when I travel far",
    },
    {
      name: "Kim Young, Jou",
      profile_pic_path: "Image/coustmer/coustmer3.svg",
      location: "Seoul, South Korea",
      rating: "4.5",
      message:
        "Great product to have for my business that currently requires a virtual private network that has high security",
    },
  ]
  
  let testimonialItems = document.querySelector(".testimonial-items")
  let itemLinks = document.querySelector(".item-links")
  
  testimonials.forEach((testimonial, i) => {
    let testimonialItem = document.createElement("div")
    testimonialItem.className = `testimonial-item ${i === 0 ? "selected" : ""}`
    testimonialItem.innerHTML = `
      <div class="person-info-rating">
      <div class="person-info">
          <div class="person-icon-ctr">
          <img src="${testimonial.profile_pic_path}" />
          </div>
          <div class="person-info-text">
          <p class="person-name">${testimonial.name}</p>
          <p class="person-location">${testimonial.location}</p>
          </div>
      </div>
      <div class="person-rating">
          <p>${testimonial.rating}</p>
          <div class="rating-icon-ctr">
          <img src="Image/rating-star.svg" />
          </div>
      </div>
      </div>
      <div class="person-testimonial">
      <p>"${testimonial.message}".</p>
      </div>
      `
    testimonialItems.appendChild(testimonialItem)
  
    let itemLink = document.createElement("div")
    itemLink.className = `item-link ${i === 0 && "selected"}`
  
    itemLinks.appendChild(itemLink)
  })
  
  let testimonialItemsList = document.querySelectorAll(".testimonial-item")
  let itemLinkList = document.querySelectorAll(".item-link")
  let selectedIndex = 0
  
  function selectTestimonial(index) {
    testimonialItemsList[selectedIndex].classList.remove("selected")
    itemLinkList[selectedIndex].classList.remove("selected")
  
    selectedIndex = index
  
    let testimonialListItem = testimonialItemsList[selectedIndex]
    testimonialListItem.classList.add("selected")
  
    testimonialItems.scrollBy(
      testimonialListItem.offsetLeft -
        testimonialItems.offsetLeft -
        testimonialItems.scrollLeft,
      0
    )
  
    itemLinkList[selectedIndex].classList.add("selected")
  }
  
  itemLinkList.forEach((itemLink, i) => {
    itemLink.onclick = () => selectTestimonial(i)
  })
  
  document.querySelector(".slider-btn.right").onclick = () => {
    let index =
      selectedIndex === testimonialItemsList.length - 1 ? 0 : selectedIndex + 1
    selectTestimonial(index)
  }
  
  document.querySelector(".slider-btn.left").onclick = () => {
    let index =
      selectedIndex === 0 ? testimonialItemsList.length - 1 : selectedIndex - 1
    selectTestimonial(index)
  }