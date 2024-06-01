//
//

// nav simple animation 
let navbar = document.querySelector("nav");
let logo = document.querySelector("nav img");
window.onscroll = () => {
  if (scrollY > 0) {
    navbar.classList.remove("py-4");
    navbar.classList.add("py-3");
    navbar.classList.add("me");
    logo.classList.add("less");
  } else {
    navbar.classList.remove("py-3");
    navbar.classList.add("py-4");
    navbar.classList.remove("me");
    logo.classList.remove("less");
  }
};

// click products
let productsLink = document.querySelectorAll(".portfolio-link");
let showProduct = document.querySelector(".show-product");
productsLink.forEach(link => {
  link.addEventListener("click", (e)=>{
    e.preventDefault();
    showProduct.classList.remove("d-none");
    showProduct.innerHTML = `
      <div class="box p-4 bg-light text-center ">
        <i class="close-icon fa-2x fa-solid fa-circle-xmark"></i>
          <h2 class="text-uppercase mx-auto mb-2 fs-2 fw-bold">PROJECT NAME</h2>
        <img class="img-fluid" src="${link.lastElementChild.src}" alt="" />
        <p class="text-muted fs-5 my-2">
          Use this area to describe your project.
        </p>
        <div class="info fs-5 fw-bold">
          <p class="mb-0">
            Client: <span class="fw-normal text-muted">${link.nextElementSibling.firstElementChild.textContent}</span>
          </p>
          <p class="mb-0">
            Category: <span class="fw-normal text-muted">${link.nextElementSibling.lastElementChild.textContent}</span>
          </p>
        </div>
        <a
          class="btn my-btn btn-primary border-0 px-4 py-2 mt-2 text-light fs-5 fw-bold text-uppercase"
          href="#"
        >
          Buy
        </a>
      </div>
    `;
  })
})
showProduct.addEventListener("click",(e)=>{
  if(e.target == showProduct || e.target == document.querySelector(".show-product svg"))
    showProduct.classList.add("d-none")
});
