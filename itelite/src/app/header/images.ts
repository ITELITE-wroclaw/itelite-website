import { files } from "@files";

export const images: { [key: string]: {background: string, antenna: string} } = {

    home: {
      background: files.home.header.background,
      antenna: files.home.header.product
    },

    products: {
      background: files.products.header.backround,
      antenna: files.products.header.product
    },

    "antenna-details": {
      background: files.products.header.backround,
      antenna: files.products.header.product
    },

    "custom-antenna": {
      background: files.custom_antenna.header.backround,
      antenna: files.custom_antenna.header.antenna
    }
}