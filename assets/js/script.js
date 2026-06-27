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

function createProductCard(product) {

    return `

    <div class="col-lg-4 col-md-6 mb-4">

        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"

            onerror="
            this.src='https://placehold.co/600x400/111111/D4AF37?text=Gujarat+Printlink'
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

        <div class="alert alert-dark">

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

if (searchInput) {

    searchInput.addEventListener(
        "input",
        renderProducts
    );

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
        this.src='https://placehold.co/800x500/111111/D4AF37?text=Gujarat+Printlink'
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