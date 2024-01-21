const fs = require('fs');

const productSampleData = (name, lowPrice, price, highPrice, brand, os) => {
  const data = {
    categoryId: '65ac11a43a47f7e86e68a5d4',
    subCategoryId: '65ad2090fcaa88ade6d627bf',
    name: `${name} - Flagship ${os} Smartphone`,
    description_1: `Introducing the ${name}, our latest flagship ${os} smartphone designed to redefine your mobile experience. Packed with cutting-edge features and sleek design, the ${name} offers unparalleled performance and innovation.`,
    description_2: `Elevate your mobile experience with the ${name}. Order now and stay ahead with the latest in smartphone technology!`,
    highestPrice: highPrice,
    currentPrice: price,
    lowestPrice: lowPrice,
    category: 'Mobile',
    features: `#Stunning Display: Immerse yourself in the vibrant 6.5#inch Super AMOLED display, delivering rich colors and sharp details for an exceptional viewing experience.#Powerful Performance: Equipped with a lightning-fast octa-core processor and 8GB of RAM, the ${name} ensures smooth multitasking and responsive performance.#Dual Rear Cameras: Capture breathtaking moments with the 64MP main camera and 12MP ultra-wide lens. The AI-powered camera system delivers stunning photos in any lighting condition.#5G Connectivity: Experience blazing-fast internet speeds with 5G connectivity, ensuring seamless streaming, gaming, and downloading on the go.#All-Day Battery Life: Stay connected all day with the powerful 5000mAh battery, and with fast charging support, you'll be ready to go in no time.#Premium Design: The sleek and slim design of the ${name} features a glass back and aluminum frame, exuding elegance and durability.#Secure Biometric Unlock: Unlock your phone effortlessly with the in-display fingerprint sensor or facial recognition for enhanced security.`,
    brand: `${brand}`,
    image: '',
    rating: [
      { key: 'Display', value: 5 },
      { key: 'Design', value: 4.8 },
      { key: 'Battery', value: 4.5 },
      { key: 'Features', value: 4.9 },
    ],
    reviews: [],
    colors: ['Midnight Black', 'Pearl White', 'Sapphire Blue', 'Emerald Green'],
    variants: [
      { ram: '8GB', storage: '128GB' },
      { ram: '8GB', storage: '256GB' },
      { ram: '12GB', storage: '256GB' },
    ],
    specifications: [
      {
        key: 'Dimensions',
        value: 'Height: 160 mm#Width: 80 mm#Thickness: 9 mm',
      },
      { key: 'Weight', value: '178g' },
      {
        key: 'Display',
        value: '6.5-inch Super AMOLED, 1080 x 2400 pixels',
      },
      { key: 'Processor', value: 'Octa-core' },
      { key: 'RAM', value: '8GB' },
      {
        key: 'Storage',
        value: '128GB or 256GB (expandable via microSD)',
      },
      { key: 'Main Camera', value: '64MP + 12MP (Ultra-wide)' },
      { key: 'Front Camera', value: '32MP' },
      { key: 'Battery', value: '5000mAh, Fast Charging' },
    ],
    boxItems: `${name} Smartphone#USB Type-C Charging Cable#Fast Charging Adapter#SIM Ejector Tool#Quick Start Guide`,
  };
  return data;
};

const phones = [
  {
    model: 'iPhone 15 Pro Max',
    highPrice: 150000,
    price: 141670,
    lowPrice: 130009,
    brand: 'Apple',
  },
  {
    model: 'iPhone 15 Pro',
    highPrice: 120784,
    price: 101111,
    lowPrice: 97666,
    brand: 'Apple',
  },
  {
    model: 'iPhone 15 Plus',
    highPrice: 110784,
    price: 91111,
    lowPrice: 83000,
    brand: 'Apple',
  },
  {
    model: 'iPhone 15',
    highPrice: 90784,
    price: 83666,
    lowPrice: 73927,
    brand: 'Apple',
  },
  {
    model: 'iPhone 14 Pro Max',
    highPrice: 120784,
    price: 101111,
    lowPrice: 97666,
    brand: 'Apple',
  },
  {
    model: 'iPhone 14 Pro',
    highPrice: 110784,
    price: 98760,
    lowPrice: 83567,
    brand: 'Apple',
  },
  {
    model: 'iPhone 14 Plus',
    highPrice: 100784,
    price: 89670,
    lowPrice: 74567,
    brand: 'Apple',
  },
  {
    model: 'iPhone 14',
    highPrice: 90453,
    price: 79999,
    lowPrice: 65999,
    brand: 'Apple',
  },
  {
    model: 'iPhone 13 Pro Max',
    highPrice: 110784,
    price: 98760,
    lowPrice: 83567,
    brand: 'Apple',
  },
  {
    model: 'iPhone 13 Pro',
    highPrice: 90784,
    price: 81760,
    lowPrice: 71567,
    brand: 'Apple',
  },
  {
    model: 'iPhone 13 Plus',
    highPrice: 89784,
    price: 72000,
    lowPrice: 65897,
    brand: 'Apple',
  },
  {
    model: 'iPhone 13',
    highPrice: 68784,
    price: 54897,
    lowPrice: 45000,
    brand: 'Apple',
  },
];

async function productSampleDataMaker() {
  //   const data = "This is a testing";
  const data = phones.map((item) =>
    productSampleData(
      item.model,
      item.lowPrice,
      item.price,
      item.highPrice,
      item.brand,
      'IOS'
    )
  );
  fs.writeFile('./file.txt', JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }
    console.log('Data has been written to file successfully.');
  });
}

productSampleDataMaker();
