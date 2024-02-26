
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
                product: "/assets/custom_antenna/main/enclosure.webp",
                rotator: "/assets/custom_antenna/main/rotator.webp",
            }
        }
    },

    footer:{
        logo: "/assets/footer/white-logo.webp"
    }
    
});