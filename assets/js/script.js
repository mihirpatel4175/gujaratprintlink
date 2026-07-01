/* =====================================
   GUJARAT PRINTLINK
   PRODUCT SYSTEM V1
===================================== */

const productsContainer =
    document.getElementById("productsContainer");

const categoryFilters =
    document.getElementById("categoryFilters");

const searchInput =
    document.getElementById("productSearch");

/* =====================================
   GLOBAL STATE
===================================== */

let currentCategory = "All";

/* =====================================
   GENERATE CATEGORIES
===================================== */

function generateCategories() {

    if (!categoryFilters) return;

    const categories = [

        "All",

        ...new Set(
            products.map(
                product => product.category
            )
        )

    ];

    categoryFilters.innerHTML = "";

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            category === "All"
                ? "filter-btn active"
                : "filter-btn";

        button.innerText =
            category;

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                currentCategory =
                    category;

                renderProducts();

            }
        );

        categoryFilters.appendChild(
            button
        );

    });

}

/* =====================================
   PRODUCT CARD
===================================== */

function createProductCard(product){

    return `

    <div
        class="col-lg-4 col-md-6 mb-4"
        id="product-${product.id}">

        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"

            onerror="
            this.src='https://placehold.co/600x400/f8fafc/0072ff?text=Gujarat+Printlink'
            ">

            <div class="product-content">

                <span class="product-category">

                    ${product.category}

                </span>

                <h4>

                    ${product.name}

                </h4>

                <p>

                    ${product.description}

                </p>

                <div class="product-buttons">

                    <button
                    class="btn btn-dark"

                    onclick="openProductModal(${product.id})">

                    View Details

                    </button>

                    <a
                    href="${generateWhatsAppLink(product.name)}"
                    target="_blank"
                    class="btn btn-gold">

                    Inquiry

                    </a>

                </div>

            </div>

        </div>

    </div>

    `;

}

/* =====================================
   RENDER PRODUCTS
===================================== */

function renderProducts() {

    if (!productsContainer) return;

    const searchText =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";

    const filteredProducts =
        products.filter(product => {

            const categoryMatch =

                currentCategory === "All"

                ||

                product.category === currentCategory;

            const searchMatch =

                product.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchText);

            return categoryMatch &&
                searchMatch;

        });

    productsContainer.innerHTML = "";

    /* PRODUCT COUNT */

    const countDiv =
        document.createElement("div");

    countDiv.className =
        "col-12 mb-4";

    countDiv.innerHTML = `

        <div class="products-count-alert">

            Showing

            <strong>

                ${filteredProducts.length}

            </strong>

            Products & Services

        </div>

    `;

    productsContainer.appendChild(
        countDiv
    );

    /* NO RESULT */

    if (filteredProducts.length === 0) {

        productsContainer.innerHTML += `

        <div class="col-12 text-center">

            <h4>

                No Products Found

            </h4>

            <p>

                Try another keyword.

            </p>

        </div>

        `;

        return;

    }

    /* PRODUCTS */

    filteredProducts.forEach(product => {

        productsContainer.innerHTML +=
            createProductCard(product);

    });

}

/* =====================================
   SEARCH
===================================== */

const suggestionBox =
document.getElementById("searchSuggestions");

searchInput.addEventListener("keyup", function(){

    const keyword =
    this.value.toLowerCase().trim();

    if(keyword===""){

        suggestionBox.style.display="none";
        return;

    }

    const results =

    products.filter(product=>

        product.name.toLowerCase().includes(keyword)

        ||

        product.category.toLowerCase().includes(keyword)

    );

    suggestionBox.innerHTML="";

    if(results.length===0){

        suggestionBox.style.display="none";

        return;

    }

    results.forEach(product=>{

        suggestionBox.innerHTML +=

        `
        <div class="search-item"
             onclick="goToProduct(${product.id})">

            <div>

                <div class="search-name">

                    ${product.name}

                </div>

            </div>

            <div class="search-category">

                ${product.category}

            </div>

        </div>
        `;

    });

    suggestionBox.style.display="block";

});

function goToProduct(id){

    suggestionBox.style.display="none";

    searchInput.value="";

    currentCategory="All";

    renderProducts();

    setTimeout(()=>{

        const card =

        document.getElementById(

            "product-"+id

        );

        if(card){

            card.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });

            card.style.transition=".4s";

            card.style.boxShadow="0 0 0 4px #D4AF37";

            setTimeout(()=>{

                card.style.boxShadow="";

            },2000);

        }

    },100);

}

/* =====================================
   WHATSAPP
===================================== */

function generateWhatsAppLink(productName) {

    const message =

        `Hello Gujarat Printlink,
        I am interested in:
        ${productName}
        Please share details and quotation.
        Thank You.`;

    return `https://wa.me/918849426648?text=${encodeURIComponent(message)}`;

}

/* =====================================
   MODAL
===================================== */

function openProductModal(productId) {

    const product =

        products.find(
            item => item.id === productId
        );

    if (!product) return;

    const modalTitle =
        document.getElementById("modalTitle");

    const modalContent =
        document.getElementById("modalContent");

    modalTitle.innerText =
        product.name;

    modalContent.innerHTML = `

        <img
        src="${product.image}"

        class="img-fluid rounded mb-4"

        alt="${product.name}"

        onerror="
        this.src='https://placehold.co/800x500/f8fafc/0072ff?text=Gujarat+Printlink'
        ">

        <p>

            ${product.description}

        </p>

        <hr>

        <h5>

            Features

        </h5>

        <ul>

            ${product.features
            .map(
                feature =>

                    `<li>${feature}</li>`
            )
            .join("")}

        </ul>

        <hr>

        <p>

            <strong>

                Minimum Qty :

            </strong>

            ${product.minimumQty}

        </p>

        <div class="d-flex flex-wrap gap-2 mt-4">

            <a
            href="${product.pdf}"

            target="_blank"

            class="btn btn-dark">

            Download Catalogue

            </a>

            <a

            href="${generateWhatsAppLink(product.name)}"

            target="_blank"

            class="btn btn-gold">

            WhatsApp Inquiry

            </a>

        </div>

    `;

    const modal =

        new bootstrap.Modal(

            document.getElementById(
                "productModal"
            )

        );

    modal.show();

}

/* =====================================
   INITIAL LOAD
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        generateCategories();

        renderProducts();

    }
);

/* =====================================
   CONSOLE
===================================== */

console.log(
    "Gujarat Printlink Product System Loaded"
);

/*====================================
      PREMIUM COUNTER
====================================*/

function animateValue(element,target,suffix){

    const duration = 2200;

    const start = performance.now();

    function easeOutExpo(x){

        return x===1

        ?1

        :1-Math.pow(2,-10*x);

    }

    function update(now){

        const progress =

        Math.min(

            (now-start)/duration,

            1

        );

        const eased =

        easeOutExpo(progress);

        const value =

        Math.floor(

            eased*target

        );

        element.textContent =

        value + suffix;

        if(progress<1){

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

/*====================================
    STATS OBSERVER
====================================*/

const statCards =
document.querySelectorAll(".stat-card");

let played=false;

const statsObserver =

new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !played){

            played=true;

            statCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show");

                },index*180);

            });

            document

            .querySelectorAll(".counter")

            .forEach(counter=>{

                animateValue(

                    counter,

                    Number(counter.dataset.target),

                    "+"

                );

            });

            document

            .querySelectorAll(".counter-percent")

            .forEach(counter=>{

                animateValue(

                    counter,

                    Number(counter.dataset.target),

                    "%"

                );

            });

        }

    });

},{
    threshold:.35
});

statsObserver.observe(

document.querySelector("#stats")

);

/*==================================
      HERO PARALLAX
==================================*/

const heroImage =
document.querySelector(".hero-image");

document.addEventListener("mousemove",e=>{

    const x =
    (window.innerWidth/2-e.clientX)/40;

    const y =
    (window.innerHeight/2-e.clientY)/40;

    heroImage.style.transform=

    `translate(${x}px,${y}px)`;

});

/*==================================================
        PREMIUM NAVIGATION SYSTEM
==================================================*/

const navbar = document.querySelector(".custom-navbar");
const progressBar = document.getElementById("progressBar");

let lastScroll = 0;

/*----------------------------------------
    NAVBAR SCROLL EFFECT
----------------------------------------*/

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    /* Navbar Background */

    if(currentScroll > 80){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

    /* Hide While Scrolling Down */

    if(currentScroll > lastScroll && currentScroll > 150){

        navbar.classList.add("nav-hidden");

    }

    else{

        navbar.classList.remove("nav-hidden");

    }

    lastScroll = currentScroll;

});

/*----------------------------------------
    SCROLL PROGRESS BAR
----------------------------------------*/

window.addEventListener("scroll", () => {

    const scrollTop =

    document.documentElement.scrollTop;

    const height =

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;

    const progress =

    (scrollTop / height) * 100;

    progressBar.style.width =

    progress + "%";

});

/*----------------------------------------
    ACTIVE MENU
----------------------------------------*/

const sections =

document.querySelectorAll("section");

const navLinks =

document.querySelectorAll(".navbar-nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top =

        section.offsetTop - 120;

        const height =

        section.offsetHeight;

        if(window.pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href")

            == "#" + current

        ){

            link.classList.add("active");

        }

    });

});

/*----------------------------------------
    SMOOTH SCROLL
----------------------------------------*/

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

    anchor.addEventListener("click",

    function(e){

        e.preventDefault();

        const target =

        document.querySelector(

        this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/*----------------------------------------
    CLOSE MOBILE MENU
----------------------------------------*/

document

.querySelectorAll(".offcanvas a")

.forEach(link=>{

    link.addEventListener("click",()=>{

        const menu =

        bootstrap.Offcanvas.getInstance(

        document.getElementById("mobileMenu")

        );

        if(menu){

            menu.hide();

        }

    });

});

/*----------------------------------------
    LOGO SCALE
----------------------------------------*/

window.addEventListener("scroll",()=>{

    const logo =

    document.querySelector(".logo-icon");

    if(window.scrollY>80){

        logo.style.transform="scale(.88)";

    }

    else{

        logo.style.transform="scale(1)";

    }

});

/*----------------------------------------
    MEGA MENU DELAY
----------------------------------------*/

const megaParent =

document.querySelector(".mega-parent");

const megaMenu =

document.querySelector(".mega-menu");

if(megaParent){

    let timer;

    megaParent.addEventListener(

    "mouseenter",()=>{

        clearTimeout(timer);

        megaMenu.style.display="block";

    });

    megaParent.addEventListener(

    "mouseleave",()=>{

        timer =

        setTimeout(()=>{

            megaMenu.style.display="";

        },200);

    });

}

/*----------------------------------------
    HERO PARALLAX
----------------------------------------*/

const hero =

document.querySelector(".hero-image");

document.addEventListener(

"mousemove",

e=>{

    if(!hero) return;

    const x =

    (window.innerWidth/2-e.clientX)/50;

    const y =

    (window.innerHeight/2-e.clientY)/50;

    hero.style.transform =

    `translate(${x}px,${y}px)`;

});

/*----------------------------------------
    NAVBAR SHADOW ON HOVER
----------------------------------------*/

navbar.addEventListener(

"mouseenter",()=>{

    navbar.style.boxShadow=

    "0 18px 45px rgba(0,0,0,.08)";

});

navbar.addEventListener(

"mouseleave",()=>{

    if(window.scrollY<80){

        navbar.style.boxShadow="";

    }

});

/*----------------------------------------
    CONSOLE
----------------------------------------*/

console.log(

"Premium Navigation Loaded"

);