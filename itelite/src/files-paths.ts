
export const files = Object.freeze({

    nav: "/assets/nav/logo.webp",

    home: {
        header: {
            background: "/assets/home/header/background.webp",
            product: "/assets/home/header/antenna.webp"
        },
        main:{
            antennas:[
                "/assets/home/main/antennas/antenna-1.webp",
                "/assets/home/main/antennas/antenna-2.webp",
                "/assets/home/main/antennas/antenna-3.webp",
                "/assets/home/main/antennas/antenna-4.webp"
            ],
            textBackgroundImage: "/assets/home/main/text/text-background.webp",
            gif: "/assets/home/main/how-it-works/how-it-works.webp"
        }
    },

    products: {
        header: {
            backround: "/assets/products/header/header_background.webp",
            product: "/assets/products/header/header_antenna.webp" 
        },

        main: {
            bands: {
                omnidirectional: "/assets/products/main/bands/omni.webp",
                dish: "/assets/products/main/bands/panel.webp",
                sector: "/assets/products/main/bands/sector.webp",
                directional: "/assets/products/main/bands/dish-reflector.webp"
            },

            bands_background: "/assets/products/main/bands/circles_background.webp",
            
            features: {
                "Radio Space": "/assets/products/main/features/Radio Space.webp",
                "Flat Panel": "/assets/products/main/features/Flat Panel.webp",
                "Single Pol": "/assets/products/main/features/Single Pol.webp",
                "MIMO 2X2": "/assets/products/main/features/MIMO 2X2.webp",
                "MIMO 3X3": "/assets/products/main/features/MIMO 3X3.webp",
                "Multi MIMO 3X3": "/assets/products/main/features/Multi MIMO 3X3.webp"
            },

            enclosures: {
                background: [
                    "/assets/products/main/enclosures/background/antenna_mast.webp", 
                    "/assets/products/main/enclosures/background/circles.webp" 
                ],
                antenna: "/assets/products/main/enclosures/antenna/antenna.webp"
            },
                
            accessories: {
                top: [
                    "/assets/products/accessories/top/image-1.webp",
                    "/assets/products/accessories/top/image-2.webp",
                    "/assets/products/accessories/top/image-3.webp",
                    "/assets/products/accessories/top/image-4.webp"
                ],
                content: {
                    thumbnails: [
                        "/assets/products/accessories/content/thumbnail_1.webp",
                        "/assets/products/accessories/content/thumbnail_2.webp",
                        "/assets/products/accessories/content/thumbnail_3.webp",
                        "/assets/products/accessories/content/thumbnail_4.webp",
                        "/assets/products/accessories/content/thumbnail_5.webp"
                    ],
                    main: "/assets/products/accessories/content/main.webp"
                }
            }
        }
    },

    custom_antenna: {
        header: {
            backround: "/assets/products/header/header_background.webp",
            antenna: "/assets/custom_antenna/header/product.webp"
        },

        main: {
            enclosure: {
                product: "/assets/custom_antenna/main/enclosures/enclosure.webp",
                rotator: "/assets/custom_antenna/main/enclosures/rotator.webp",
            },

            antennas: {
                "Cable Gland": "/assets/custom_antenna/main/antennas/Cable Gland.png",
                "External Connection": "/assets/custom_antenna/main/antennas/External Connection.png",
                "External OMNI Antenna": "/assets/custom_antenna/main/antennas/External OMNI Antenna.png",
                "Pra Box": "/assets/custom_antenna/main/antennas/Pra Box.png",
                "Sim Adapter": "/assets/custom_antenna/main/antennas/Sim Adapter.png",
                "Waterproof External Poe": "/assets/custom_antenna/main/antennas/Waterproof External Poe.png"
            },

            mounting: "/assets/custom_antenna/main/mounting/mounting.webp",

            contact: {
                background: "/assets/custom_antenna/main/contact/form-background.webp"
            }
        },
    },

    company: "/assets/company/antenna.webp",
    order: "/assets/order/antenna.webp",

    footer:{
        logo: "/assets/footer/white-logo.webp"
    }
    
});