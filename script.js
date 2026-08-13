/* ==========================================
   CNNRGRNWD STORE
========================================== */


const products = [

    {
        name: "Windows 11 Recovery Media Install",

        category: "windows",

        categoryName: "Windows",

        price: "£12.99",

        shipping: "Free shipping",

        image: "images/windows-11.jpg",

        description:
            "Bootable Windows 11 recovery and installation media for compatible PCs.",

        ebay:
            "https://www.ebay.co.uk/itm/406851645939"
    },


    {
        name: "Windows 10 Recovery Media Install",

        category: "windows",

        categoryName: "Windows",

        price: "£12.99",

        shipping: "Free shipping",

        image: "images/windows-10.jpg",

        description:
            "Bootable Windows 10 recovery and installation media for compatible PCs.",

        ebay:
            "https://www.ebay.co.uk/itm/407141972356"
    },


    {
        name:
            "Windows 10 IoT Enterprise LTSC 2021 Recovery Media",

        category: "windows",

        categoryName: "Windows",

        price: "£12.99",

        shipping: "Free shipping",

        image:
            "images/windows-10-iot-ltsc.jpg",

        description:
            "Windows 10 IoT Enterprise LTSC 2021 installation and recovery media.",

        ebay:
            "https://www.ebay.co.uk/itm/407141985454"
    },


    {
        name:
            "Ubuntu 26.04 LTS Bootable USB",

        category: "linux",

        categoryName: "Linux",

        price: "£12.99",

        shipping: "Free shipping",

        image:
            "images/ubuntu.jpg",

        description:
            "Bootable Ubuntu 26.04 LTS USB media for compatible desktop and laptop PCs.",

        ebay:
            "https://www.ebay.co.uk/itm/407136415848"
    },


    {
        name:
            "Hiren's BootCD PE 16GB USB",

        category: "recovery",

        categoryName: "Recovery",

        price: "£12.99",

        shipping: "Free shipping",

        image:
            "images/hirens.jpg",

        description:
            "16GB bootable recovery and troubleshooting USB containing Hiren's BootCD PE.",

        ebay:
            "https://www.ebay.co.uk/itm/407141959475"
    },


    {
        name:
            "Gigastone 32GB SD Card",

        category: "storage",

        categoryName: "Storage",

        price: "£4.99",

        shipping: "£1.99 shipping",

        image:
            "images/gigastone-32gb.jpg",

        description:
            "32GB Gigastone SD card suitable for everyday storage and compatible devices.",

        ebay:
            "https://www.ebay.co.uk/itm/407102194288"
    }

];



/* ==========================================
   STORE
========================================== */


const productsGrid =
    document.getElementById(
        "productsGrid"
    );


const noResults =
    document.getElementById(
        "noResults"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const categoryButtons =
    document.querySelectorAll(
        ".category-button"
    );


let currentCategory = "all";



/* ==========================================
   DISPLAY PRODUCTS
========================================== */


function displayProducts() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    const filteredProducts =
        products.filter(
            function(product) {

                const categoryMatches =
                    currentCategory === "all" ||
                    product.category === currentCategory;


                const searchMatches =
                    product.name
                        .toLowerCase()
                        .includes(searchTerm)

                    ||

                    product.description
                        .toLowerCase()
                        .includes(searchTerm)

                    ||

                    product.categoryName
                        .toLowerCase()
                        .includes(searchTerm);


                return (
                    categoryMatches &&
                    searchMatches
                );

            }
        );


    productsGrid.innerHTML = "";


    if (
        filteredProducts.length === 0
    ) {

        noResults.style.display =
            "block";

        return;

    }


    noResults.style.display =
        "none";


    filteredProducts.forEach(
        function(product) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            card.innerHTML = `

                <div
                    class="product-image"
                >

                    <img

                        src="${product.image}"

                        alt="${escapeHTML(
                            product.name
                        )}"

                        onerror="
                            this.style.display='none';
                            this.nextElementSibling.style.display='grid';
                        "

                    >


                    <div
                        class="product-placeholder"
                        style="display:none;"
                    >

                        PRODUCT IMAGE

                    </div>


                    <div
                        class="product-category"
                    >

                        ${escapeHTML(
                            product.categoryName
                        )}

                    </div>

                </div>



                <div
                    class="product-content"
                >


                    <h3>

                        ${escapeHTML(
                            product.name
                        )}

                    </h3>


                    <p
                        class="product-description"
                    >

                        ${escapeHTML(
                            product.description
                        )}

                    </p>


                    <div
                        class="product-bottom"
                    >


                        <div
                            class="price-area"
                        >

                            <div
                                class="product-price"
                            >

                                ${escapeHTML(
                                    product.price
                                )}

                            </div>


                            <div
                                class="product-shipping"
                            >

                                ${escapeHTML(
                                    product.shipping
                                )}

                            </div>

                        </div>


                        <a

                            href="${product.ebay}"

                            target="_blank"

                            rel="noopener noreferrer"

                            class="buy-button"

                        >

                            Buy on eBay ↗

                        </a>


                    </div>


                </div>

            `;


            productsGrid.appendChild(
                card
            );

        }
    );

}



/* ==========================================
   STORE FILTERS
========================================== */


categoryButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                categoryButtons.forEach(
                    function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                currentCategory =
                    this.dataset.category;


                displayProducts();

            }
        );

    }
);


searchInput.addEventListener(
    "input",
    displayProducts
);



/* ==========================================
   QUESTIONNAIRE
========================================== */


const questionSteps =
    document.querySelectorAll(
        ".question-step"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const progressText =
    document.getElementById(
        "progressText"
    );


const step2Options =
    document.getElementById(
        "step2Options"
    );


const step2Title =
    document.getElementById(
        "step2Title"
    );


const step2Description =
    document.getElementById(
        "step2Description"
    );


let currentStep = 1;


let selectedNeed = "";


let selectedDetails = "";



/* ==========================================
   SHOW STEP
========================================== */


function showStep(step) {

    currentStep = step;


    questionSteps.forEach(
        function(questionStep) {

            questionStep.classList.remove(
                "active"
            );

        }
    );


    const targetStep =
        document.querySelector(
            `.question-step[data-step="${step}"]`
        );


    if (targetStep) {

        targetStep.classList.add(
            "active"
        );

    }


    progressBar.style.width =
        `${step * 25}%`;


    progressText.textContent =
        `Step ${step} of 4`;


    document
        .getElementById("help")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}



/* ==========================================
   STEP 1 OPTIONS
========================================== */


const firstStepOptions =
    document.querySelectorAll(
        '[data-step="1"] .question-option'
    );


firstStepOptions.forEach(
    function(option) {

        option.addEventListener(
            "click",
            function() {

                selectedNeed =
                    this.dataset.answer;


                buildStepTwo(
                    selectedNeed
                );


                showStep(2);

            }
        );

    }
);



/* ==========================================
   BUILD STEP 2
========================================== */


function buildStepTwo(need) {

    step2Options.innerHTML = "";


    let options = [];


    if (need === "windows") {

        step2Title.textContent =
            "Which Windows version do you need?";


        step2Description.textContent =
            "Choose the version you're looking for.";


        options = [

            {
                value: "Windows 11",
                description:
                    "For compatible Windows 11 PCs."
            },

            {
                value: "Windows 10",
                description:
                    "For compatible Windows 10 PCs."
            },

            {
                value:
                    "Windows 10 IoT Enterprise LTSC 2021",
                description:
                    "For systems requiring Windows 10 IoT Enterprise LTSC 2021."
            },

            {
                value: "Not sure",
                description:
                    "I'm not sure which version I need."
            }

        ];

    }


    else if (need === "recovery") {

        step2Title.textContent =
            "What are you trying to do?";


        step2Description.textContent =
            "This will help us point you towards the most suitable recovery media.";


        options = [

            {
                value:
                    "Troubleshoot a computer",
                description:
                    "My computer has a problem and I need diagnostic or recovery tools."
            },

            {
                value:
                    "Recover a computer that will not start",
                description:
                    "I need bootable recovery tools."
            },

            {
                value:
                    "General PC maintenance",
                description:
                    "I want a collection of useful PC repair tools."
            }

        ];

    }


    else if (need === "linux") {

        step2Title.textContent =
            "What would you like to do with Linux?";


        step2Description.textContent =
            "Ubuntu 26.04 LTS is available as a ready-to-use bootable USB.";


        options = [

            {
                value:
                    "Install Ubuntu",
                description:
                    "I want to install Ubuntu on a computer."
            },

            {
                value:
                    "Try Ubuntu",
                description:
                    "I want to boot Ubuntu without immediately installing it."
            },

            {
                value:
                    "I'm not sure",
                description:
                    "I'd like some advice."
            }

        ];

    }


    else if (need === "storage") {

        step2Title.textContent =
            "What storage are you looking for?";


        step2Description.textContent =
            "We currently have a 32GB Gigastone SD card available.";


        options = [

            {
                value:
                    "32GB SD card",
                description:
                    "I need a 32GB SD card."
            }

        ];

    }


    else {

        step2Title.textContent =
            "What best describes your situation?";


        step2Description.textContent =
            "Choose the closest match and we'll point you in the right direction.";


        options = [

            {
                value:
                    "I need Windows media",
                description:
                    "I'm looking for Windows installation or recovery media."
            },

            {
                value:
                    "I need PC recovery tools",
                description:
                    "I'm having trouble with a computer."
            },

            {
                value:
                    "I want Linux",
                description:
                    "I'm interested in installing or trying Ubuntu."
            },

            {
                value:
                    "I need storage",
                description:
                    "I'm looking for an SD card."
            }

        ];

    }



    options.forEach(
        function(option) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "question-option";


            button.innerHTML = `

                <strong>
                    ${escapeHTML(
                        option.value
                    )}
                </strong>

                <span>
                    ${escapeHTML(
                        option.description
                    )}
                </span>

            `;


            button.addEventListener(
                "click",
                function() {

                    selectedDetails =
                        option.value;


                    document
                        .getElementById(
                            "formNeed"
                        )
                        .value =
                        getNeedName(
                            selectedNeed
                        );


                    document
                        .getElementById(
                            "formDetails"
                        )
                        .value =
                        selectedDetails;


                    showStep(3);

                }
            );


            step2Options.appendChild(
                button
            );

        }
    );

}



/* ==========================================
   BACK BUTTONS
========================================== */


document
    .getElementById(
        "backToStep1"
    )
    .addEventListener(
        "click",
        function() {

            showStep(1);

        }
    );


document
    .getElementById(
        "backToStep2"
    )
    .addEventListener(
        "click",
        function() {

            showStep(2);

        }
    );


document
    .getElementById(
        "backToStep3"
    )
    .addEventListener(
        "click",
        function() {

            showStep(3);

        }
    );



/* ==========================================
   STEP 3 → STEP 4
========================================== */


document
    .getElementById(
        "toStep4"
    )
    .addEventListener(
        "click",
        function() {

            document
                .getElementById(
                    "formAdditionalInfo"
                )
                .value =
                document
                    .getElementById(
                        "additionalInfo"
                    )
                    .value;


            showStep(4);

        }
    );



/* ==========================================
   GET NEED NAME
========================================== */


function getNeedName(
    need
) {

    const names = {

        windows:
            "Windows installation/recovery",

        recovery:
            "PC recovery & troubleshooting",

        linux:
            "Linux / Ubuntu",

        storage:
            "Storage / SD card",

        unsure:
            "Not sure / needs advice"

    };


    return (
        names[need] ||
        "Website enquiry"
    );

}



/* ==========================================
   ESCAPE HTML
========================================== */


function escapeHTML(
    text
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}



/* ==========================================
   START
========================================== */


displayProducts();