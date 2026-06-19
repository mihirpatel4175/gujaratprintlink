const container =
document.getElementById("productsContainer");

const filters =
document.getElementById("categoryFilters");

const searchInput =
document.getElementById("productSearch");

let activeCategory = "All";

const categories = [
    "All",
    ...new Set(
        products.map(item => item.category)
    )
];

function createFilters(){

    categories.forEach(category => {

        const button =
        document.createElement("button");

        button.className =
        "filter-btn";

        button.innerText =
        category;

        button.onclick = () => {

            activeCategory = category;

            document
            .querySelectorAll(".filter-btn")
            .forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            renderProducts();

        };

        filters.appendChild(button);

    });

    filters.firstChild.classList.add("active");
}

function renderProducts(){

    const search =
    searchInput.value.toLowerCase();

    let filtered =
    products.filter(product => {

        const categoryMatch =
        activeCategory === "All" ||
        product.category === activeCategory;

        const searchMatch =
        product.name
        .toLowerCase()
        .includes(search);

        return categoryMatch &&
               searchMatch;

    });

    container.innerHTML = "";

    filtered.forEach(product => {

        container.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="product-card">

                <img
                    src="${product.image}"
                    class="product-image"
                    alt="${product.name}">

                <div class="p-3">

                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h5 class="mt-3">
                        ${product.name}
                    </h5>

                    <div class="mt-3">

                        <a
                        href="https://wa.me/919999999999"
                        target="_blank"
                        class="btn btn-warning btn-sm">

                        Inquiry

                        </a>

                    </div>

                </div>

            </div>

        </div>
        `;
    });

}

searchInput.addEventListener(
    "keyup",
    renderProducts
);

createFilters();
renderProducts();