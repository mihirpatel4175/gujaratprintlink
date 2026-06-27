const products = [

    /* =====================================
       BUSINESS PRINTING
    ===================================== */

    {
        id: 1,
        name: "Business Cards",
        category: "Business Printing",
        image: "assets/images/products/business-printing/business-card.jpg",
        description: "Premium visiting cards with velvet, spot UV, foil and die-cut finishes.",
        features: [
            "Velvet Finish",
            "Spot UV",
            "Gold Foil",
            "Silver Foil",
            "Die Cut",
            "UV",
            "Matt Finish",
            "Non Tearable",
            "Pvc Card",
            "Round Shape",
            "ATM Pouch"
        ],
        minimumQty: "500 (Premium) / 1000 (Regular)",
        pdf: "pdf/Visiting Card Catalog.pdf"
    },

    {
        id: 2,
        name: "Letterheads",
        category: "Business Printing",
        image: "assets/images/products/business-printing/latterhead.jpg",
        description: "Professional company letterheads for branding.",
        features: [
            "Premium Paper (100gsm, 80gsm, 70gsm, 60gsm)",
            "Bond Paper (80gsm, 100gsm)",
            "Offset Printing",
            "Multicolor Printing",
            "Corporate Design",
            "Fast Delivery",
            "High Quality",
            "Custom Printing"
        ],
        minimumQty: "1000",
        pdf: "pdf/letterheads.pdf"
    },

    {
        id: 3,
        name: "Envelopes",
        category: "Business Printing",
        image: "assets/images/products/business-printing/envelope.jpg",
        description: "Corporate branded envelopes in all sizes.",
        features: [
            "Standard 11x5",
            "Standard 9.5x4.2",
            "Custom Size",
            "Offset Print",
            "Multicolor Print",
            "Premium Quality Pasting",
            "High Quality",
            "Corporate Design",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/envelopes.pdf"
    },

    {
        id: 4,
        name: "ID Cards",
        category: "Business Printing",
        image: "assets/images/products/business-printing/id-card.jpg",
        description: "Employee and student ID card printing.",
        features: [
            "PVC Cards",
            "RFID Cards",
            "School ID",
            "Corporate ID",
            "Membership Cards",
            "Custom Printing",
            "ID Card with lanyards",
            "ID Card With YoYo Clip"
        ],
        minimumQty: "50",
        pdf: "pdf/id-cards.pdf"
    },

    {
        id: 6,
        name: "Receipt Books / Vochure Books",
        category: "Business Printing",
        image: "assets/images/products/business-printing/receipt-book.jpg",
        description: "Custom printed receipt books.",
        features: [
            "Size F/S, 1/4, 1/8, 1/10, 1/12, 1/16",
            "Numbering",
            "Carbon Paper",
            "Perforation",
            "Custom Printing",
            "Duplicate Copy",
            "Triplicate Copy",
            "Custom Size",
            "Fast Delivery"
        ],
        minimumQty: "10",
        pdf: "pdf/receipt-books.pdf"
    },

    {
        id: 7,
        name: "Bill Books / Challan Books",
        category: "Business Printing",
        image: "assets/images/products/business-printing/bill-book.jpg",
        description: "Business bill books with customized format.",
        features: [
            "Size F/S, 1/4, 1/8, 1/10, 1/12, 1/16",
            "GST Format",
            "Carbon Paper",
            "Numbering",
            "Perforation",
            "Custom Printing",
            "Duplicate Copy",
            "Triplicate Copy",
            "Custom Size",
            "Fast Delivery"
        ],
        minimumQty: "10",
        pdf: "pdf/bill-books.pdf"
    },

    {
        id: 8,
        name: "Notepads",
        category: "Business Printing",
        image: "assets/images/products/business-printing/notepads.jpg",
        description: "Corporate notepad printing.",
        features: [
            "Size F/S, 1/4, 1/8, 1/10, 1/12, 1/16",
            "Perforation",
            "Custom Printing",
            "Gum Pads",
            "Custom Size",
            "Fast Delivery"
        ],
        minimumQty: "10",
        pdf: "pdf/notepads.pdf"
    },

    {
        id: 9,
        name: "Files/Folders",
        category: "Business Printing",
        image: "assets/images/products/business-printing/file-folders.jpg",
        description: "Premium presentation folders.",
        features: [
            "Pocket Folder",
            "Office File",
            "Office File With Divider",
            "Sheet Protector",
            "Button Folder",
            "Pouch Folder",
            "Gadder / Box File",
            "L-Shape Folders",
            "Custom Printing",
            "Custom Size",
            "Fast Delivery"
        ],
        minimumQty: "100",
        pdf: "pdf/folders.pdf"
    },

    {
        id: 10,
        name: "Custom Office Stationaries",
        category: "Business Printing",
        image: "assets/images/products/business-printing/office-stationaries.jpg",
        description: "Premium presentation folders.",
        features: [
            "Custom Printed Pens",
            "Custom Printed Diaries",
            "Custom Printed Notebooks",
            "Custom Printed Keychains",
            "Custom Printed Calendars",
            "Custom Printed T-Shirts"
        ],
        minimumQty: "100 / 500",
        pdf: "pdf/folders.pdf"
    },
    /* =====================================
       MARKETING
    ===================================== */

    {
        id: 11,
        name: "Flyers / Leaflets",
        category: "Marketing",
        image: "assets/images/products/marketing/flyers-leaflets.jpg",
        description: "High quality flyer printing.",
        features: [
            "Paper 90/100/130/170 gsm",
            "Gloss / Matt",
            "Custom Size",
            "2 Fold / 3 Fold / 4 Fold / Booklet Type",
            "Offset Print",
            "Multicolor Print",
            "Custom Print",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/flyers.pdf"
    },

    {
        id: 12,
        name: "Brochures / Catalogs",
        category: "Marketing",
        image: "assets/images/products/marketing/brochures-catalog.jpg",
        description: "Company brochures and marketing material.",
        features: [
            "Product Catalog",
            "Service Catalog",
            "Paper 100/130/170 gsm",
            "Bi Fold",
            "Tri Fold",
            "Multi Page",
            "Custom Size",
            "Gloss / Matt",
            "Offset Print",
            "Multicolor Print",
            "Custom Print",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "100",
        pdf: "pdf/brochures.pdf"
    },

    {
        id: 13,
        name: "Company Profiles",
        category: "Marketing",
        image: "assets/images/products/marketing/company-profiles.jpg",
        description: "Corporate profile design and printing.",
        features: [
            "Premium Design",
            "Luxury Print",
            "Custom Layout",
            "Offset Print",
            "Multicolor Print",
            "Custom Print",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "100",
        pdf: "pdf/company-profile.pdf"
    },

    {
        id: 14,
        name: "Booklet",
        category: "Marketing",
        image: "assets/images/products/marketing/booklet.jpg",
        description: "Booklet Printing.",
        features: [
            "User Manual",
            "Warranty Card",
            "Instruction Manual",
            "Annual Report",
            "Product Booklet",
            "Custom Size",
            "Offset Print",
            "Multicolor Print",
            "Custom Print",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "500",
        pdf: "pdf/company-profile.pdf"
    },
    /* =====================================
       PACKAGING
    ===================================== */

    {
        id: 15,
        name: "Product Boxes",
        category: "Packaging",
        image: "assets/images/products/packaging/product-box.jpg",
        description: "Custom product packaging boxes.",
        features: [
            "Mono Carton",
            "Luxury Box",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/product-boxes.pdf"
    },

    {
        id: 16,
        name: "Corrugated Boxes",
        category: "Packaging",
        image: "assets/images/products/packaging/corrugated-box.jpg",
        description: "Strong corrugated packaging boxes.",
        features: [
            "Shipping Box",
            "Custom Size",
            "Bulk Production",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Custom Size",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/corrugated-box.pdf"
    },

    {
        id: 17,
        name: "Mono Cartons",
        category: "Packaging",
        image: "assets/images/products/packaging/mono-carton.jpg",
        description: "Pharma and FMCG mono cartons.",
        features: [
            "Mono Carton",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Food Grade",
            "Pharma Grade",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/mono-carton.pdf"
    },

    {
        id: 18,
        name: "Food Packaging",
        category: "Packaging",
        image: "assets/images/products/packaging/food-packaging.jpg",
        description: "Custom food packaging solutions.",
        features: [
            "Food Packaging",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Food Safe",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/food-packaging.pdf"
    },

    {
        id: 19,
        name: "Personalized Branded Packaging",
        category: "Packaging",
        image: "assets/images/products/packaging/personalized-branded-packaging.jpg",
        description: "Personalized product packaging.",
        features: [
            "Personalized Branded Packaging",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Premium Box",
            "Gold Foil",
            "Luxury Finish",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/cosmetic-packaging.pdf"
    },

    /* =====================================
       LABELS & STICKERS
    ===================================== */

    {
        id: 20,
        name: "Product Labels",
        category: "Labels & Stickers",
        image: "assets/images/products/Labels-stickers/product-labels.jpg",
        description: "Product branding labels.",
        features: [
            "Product Labels",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Custom Shape",
            "Waterproof",
            "Premium Adhesive",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/product-labels.pdf"
    },

    {
        id: 21,
        name: "NT / Opec Stickers",
        category: "Labels & Stickers",
        image: "assets/images/products/Labels-stickers/nt-stickers.jpg",
        description: "NT / Opec Stickers.",
        features: [
            "NT / Opec Stickers",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Custom Shape",
            "Waterproof",
            "Premium Adhesive",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/barcode-labels.pdf"
    },

    {
        id: 22,
        name: "Mirror Coat / Paper Stickers",
        category: "Labels & Stickers",
        image: "assets/images/products/Labels-stickers/mirror-stickers.jpg",
        description: "Mirror Coat Stickers.",
        features: [
            "Mirror Coat",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Custom Shape",
            "Premium Adhesive",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/qr-labels.pdf"
    },

    {
        id: 23,
        name: "Silver Stickers",
        category: "Labels & Stickers",
        image: "assets/images/products/Labels-stickers/silver-stickers.jpg",
        description: "Silver Stickers.",
        features: [
            "Silver Stickers",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Custom Shape",
            "Waterproof",
            "Premium Adhesive",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/qr-labels.pdf"
    },

    {
        id: 24,
        name: "Transparent Stickers",
        category: "Labels & Stickers",
        image: "assets/images/products/Labels-stickers/transparent-stickers.jpg",
        description: "Transparent Stickers.",
        features: [
            "Transparent Stickers",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Custom Shape",
            "Waterproof",
            "Premium Adhesive",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/qr-labels.pdf"
    },

    /* =====================================
       LARGE FORMAT
    ===================================== */

    {
        id: 25,
        name: "PVC / Vinyl Stickers",
        category: "Labels & Stickers",
        image: "assets/images/products/large-format/pvc-vinyl-stickers.jpg",
        description: "Vinyl Stickers.",
        features: [
            "Vinyl Stickers",
            "Custom Design",
            "Custom Size",
            "Personalize Printing",
            "Premium Design",
            "Multicolor Print",
            "Custom Print",
            "Custom Shape",
            "Waterproof",
            "Premium Adhesive",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1000",
        pdf: "pdf/qr-labels.pdf"
    },

    {
        id: 26,
        name: "Flex Banners / Foam Sheet",
        category: "Large Format",
        image: "assets/images/products/large-format/flex-banner.jpg",
        description: "Foam Sheet and Flex Banners.",
        features: [
            "Foam Sheet",
            "Flex Banners",
            "With Frame",
            "Without Frame",
            "Star Flex",
            "Eco / Solvent",
            "Large Size",
            "Custom Size",
            "Custom Print",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/flex-banner.pdf"
    },

    {
        id: 27,
        name: "Roll-Up Standees",
        category: "Large Format",
        image: "assets/images/products/large-format/roll-up-standees.jpg",
        description: "Promotional roll-up standees.",
        features: [
            "Eco / Solvent",
            "Portable",
            "Premium Print",
            "Fast Setup",
            "Size : 6x3",
            "Custom Print",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/standee.pdf"
    },

    {
        id: 28,
        name: "Outdoor Hoardings",
        category: "Large Format",
        image: "assets/images/products/large-format/outdoor-hordings.jpg",
        description: "Large format outdoor advertising.",
        features: [
            "Large Size",
            "Custom Size",
            "Custom Print",
            "Weather Resistant",
            "High Resolution",
            "Large Scale",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/hoarding.pdf"
    },

    {
        id: 29,
        name: "Acrilic Sign Board",
        category: "Large Format",
        image: "assets/images/products/large-format/acrilic-sign-board.jpg",
        description: "Premium Acrylic Sign Boards.",
        features: [
            "Acrilic Sign Board",
            "Custom Size",
            "Custom Print",
            "Premium Print",
            "High Resolution",
            "Large Scale",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/hoarding.pdf"
    },

    {
        id: 30,
        name: "LED Sign Board",
        category: "Large Format",
        image: "assets/images/products/large-format/led-sign-board.jpg",
        description: "Premium LED Sign Boards.",
        features: [
            "LED Sign Board",
            "Custom Size",
            "Custom Print",
            "Premium Print",
            "High Resolution",
            "Large Scale",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/hoarding.pdf"
    },

    {
        id: 31,
        name: "Hanging Sign Board",
        category: "Large Format",
        image: "assets/images/products/large-format/hanging-sign-board.jpg",
        description: "Premium Hanging Sign Boards.",
        features: [
            "Hanging Sign Board",
            "Custom Size",
            "Custom Print",
            "Premium Print",
            "High Resolution",
            "Large Scale",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/hoarding.pdf"
    },

    {
        id: 32,
        name: "Backlit Sign Board",
        category: "Large Format",
        image: "assets/images/products/large-format/backlit-sign-board.jpg",
        description: "Premium Backlit Sign Boards.",
        features: [
            "Backlit Sign Board",
            "Custom Size",
            "Custom Print",
            "Premium Print",
            "High Resolution",
            "Large Scale",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/hoarding.pdf"
    },

    /* =====================================
       WEDDING
    ===================================== */

    {
        id: 33,
        name: "Wedding Cards",
        category: "Wedding Printing",
        image: "assets/images/products/wedding/wedding-cards.jpg",
        description: "Luxury wedding invitation cards.",
        features: [
            "Hard Board Wedding Cards",
            "Soft Board Wedding Cards",
            "Wedding Cards",
            "Custom Size",
            "Custom Print",
            "Premium Print",
            "UV Print",
            "Laser Cut",
            "Gold Foils",
            "High Resolution",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "100",
        pdf: "pdf/wedding-cards.pdf"
    },

    {
        id: 34,
        name: "Invitation Cards",
        category: "Wedding Printing",
        image: "assets/images/products/wedding/invitation-cards.jpg",
        description: "Premium invitation cards.",
        features: [
            "Invitation Cards",
            "Hard Board Invitation Cards",
            "Soft Board Invitation Cards",
            "Custom Size",
            "Custom Print",
            "Premium Print",
            "UV Print",
            "Laser Cut",
            "Gold Foils",
            "High Resolution",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "100",
        pdf: "pdf/invitation-cards.pdf"
    },

    {
        id: 35,
        name: "Gift Cover",
        category: "Wedding Printing",
        image: "assets/images/products/wedding/gift-cover.jpg",
        description: "Premium Gift Cover.",
        features: [
            "Gift Cover",
            "Premium Cover",
            "Money Envelope",
            "Custom Size",
            "Custom Print",
            "Premium Print",
            "UV Print",
            "Gold Foils",
            "High Resolution",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "100",
        pdf: "pdf/invitation-cards.pdf"
    },

    {
        id: 36,
        name: "Digital Wedding Card",
        category: "Wedding Printing",
        image: "assets/images/products/wedding/digital-wedding-card.jpg",
        description: "Premium Digital Wedding Card.",
        features: [
            "Digital Wedding Card",
            "Custom Size",
            "High Resolution",
            "High Quality",
            "Animated Design",
            "Whatsapp Delivery",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/digital-wedding-card.pdf"
    },

    {
        id: 37,
        name: "Video Invitation",
        category: "Wedding Printing",
        image: "assets/images/products/wedding/video-invitation.jpg",
        description: "Premium Video Invitation.",
        features: [
            "Video Invitation",
            "Premium Video Invitation",
            "High Resolution",
            "High Quality",
            "Animated Design",
            "Whatsapp Delivery",
            "Fast Delivery"
        ],
        minimumQty: "1",
        pdf: "pdf/video-invitation.pdf"
    },

    /* =====================================
       PREMIUM
    ===================================== */

    {
        id: 38,
        name: "Velvet Cards",
        category: "Premium Printing",
        image: "assets/images/products/premium/velvet-cards.jpg",
        description: "Premium velvet finish visiting cards.",
        features: [
            "Velvet Cards",
            "Custom Size",
            "Custom Print",
            "Premium Print",
            "UV Print",
            "Gold Foils",
            "High Resolution",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "500",
        pdf: "pdf/velvet-card.pdf"
    },

    {
        id: 39,
        name: "Gold Foil Printing",
        category: "Premium Printing",
        image: "assets/images/products/premium/gold-foil.jpg",
        description: "Luxury gold foil printing.",
        features: [
            "Gold Foil Printing",
            "Premium Finish",
            "Luxury Printing",
            "High Resolution",
            "High Quality",
            "Fast Delivery"
        ],
        minimumQty: "500",
        pdf: "pdf/gold-foil.pdf"
    },

    {
        id: 40,
        name: "Luxury Packaging",
        category: "Premium Printing",
        image: "assets/images/products/premium/luxury-packaging.jpg",
        description: "Premium luxury packaging solutions.",
        features: [
            "Wedding Packaging",
            "Gift Packaging",
            "Hard Box",
            "Soft Box",
            "Corporate Box",
            "Luxury Box",
            "Premium Branding"
        ],
        minimumQty: "100",
        pdf: "pdf/luxury-packaging.pdf"
    },

    /* =====================================
       DIGITAL SERVICES
    ===================================== */

    {
        id: 41,
        name: "Graphic Designing",
        category: "Digital Services",
        image: "assets/images/products/digital-services/graphic-design.jpg",
        description: "Creative graphic design solutions.",
        features: [
            "Visiting Card Design",
            "Letterhead Design",
            "Brochure Design",
            "Pamphlet Design",
            "Flyer Design",
            "Logo Design",
            "Brand Design",
            "Packaging Design",
            "Menu Design",
            "Banner Design",
            "Digital Design",
            "Premium Design"
        ],
        minimumQty: "Project Based",
        pdf: "pdf/graphic-design.pdf"
    },

    {
        id: 42,
        name: "Logo Design",
        category: "Digital Services",
        image: "assets/images/products/digital-services/logo-design.jpg",
        description: "Professional logo design service.",
        features: [
            "Professional Logo Design",
            "Unique Logo",
            "Brand Identity",
            "Premium Design"
        ],
        minimumQty: "Project Based",
        pdf: "pdf/logo-design.pdf"
    },

    {
        id: 43,
        name: "Digital Marketing",
        category: "Digital Services",
        image: "assets/images/products/digital-services/digital-marketing.jpg",
        description: "Performance marketing and branding.",
        features: [
            "Digital Marketing",
            "Meta Ads",
            "Google Ads",
            "Lead Generation"
        ],
        minimumQty: "Monthly",
        pdf: "pdf/digital-marketing.pdf"
    },

    {
        id: 45,
        name: "Website Development",
        category: "Digital Services",
        image: "assets/images/products/digital-services/website-development.jpg",
        description: "Business websites and landing pages.",
        features: [
            "Website Development",
            "Professional Website",
            "Custom Website",
            "Landing Page Design",
            "E-commerce Website",
            "Domain Booking",
            "Hosting",
            "Email Hosting",
            "Website Maintenance",
            "Website Redesign",
            "Responsive",
            "SEO Ready",
            "Fast Loading"
        ],
        minimumQty: "Project Based",
        pdf: "pdf/website-development.pdf"
    }



];