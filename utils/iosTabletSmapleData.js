const fs = require('fs');

const productSampleData = (name, lowPrice, price, highPrice, brand) => {
  const data = {
    categoryId: '65ac11a43a47f7e86e68a5d4',
    subCategoryId: '65ad3f85e52dec4f99e0ca43',
    name: `${name} - High-Performance Tablet`,
    description_1: `Introducing the ${name}, our latest high-performance tablet designed to elevate your digital experience. Packed with advanced features and a sleek design, the ${name} delivers superior performance for work and entertainment.`,
    description_2: `Enhance your productivity and entertainment with the ${name}. Order now and enjoy a seamless tablet experience!`,
    highestPrice: highPrice,
    currentPrice: price,
    lowestPrice: lowPrice,
    category: 'Tablet',
    features: `#Vivid Display: Immerse yourself in the crisp and clear 10.1-inch display, perfect for multimedia consumption and productivity tasks.#Powerful Processing: Equipped with a fast quad-core processor and 6GB of RAM, the ${name} ensures smooth multitasking and responsive performance.#High-Resolution Cameras: Capture stunning photos with the 13MP main camera and enjoy video calls with the 8MP front camera.#Long Battery Life: Stay connected all day with the robust 7000mAh battery, providing extended usage on a single charge.#Slim and Lightweight: The ${name} features a slim and lightweight design, making it easy to carry and ideal for on-the-go use.#Enhanced Security: Ensure the security of your data with advanced biometric authentication options, including fingerprint recognition and facial unlock.`,
    brand: { brand },
    image: '',
    rating: [
      { key: 'Display', value: 4.8 },
      { key: 'Performance', value: 4.7 },
      { key: 'Battery', value: 4.5 },
      { key: 'Features', value: 4.8 },
    ],
    reviews: [],
    colors: ['Silver', 'Space Gray', 'Gold'],
    variants: [
      { storage: '64GB', connectivity: 'Wi-Fi' },
      { storage: '128GB', connectivity: 'Wi-Fi + Cellular' },
    ],
    specifications: [
      {
        key: 'Dimensions',
        value: 'Height: 245 mm#Width: 175 mm#Thickness: 7.5 mm',
      },
      { key: 'Weight', value: '450g' },
      { key: 'Display', value: '10.1-inch IPS LCD, 2560 x 1600 pixels' },
      { key: 'Processor', value: 'Quad-core' },
      { key: 'RAM', value: '6GB' },
      { key: 'Storage', value: '64GB or 128GB (expandable via microSD)' },
      { key: 'Main Camera', value: '13MP' },
      { key: 'Front Camera', value: '8MP' },
      { key: 'Battery', value: '7000mAh, Fast Charging' },
    ],
    boxItems: `${name} Tablet#USB Type-C Charging Cable#Power Adapter#User Manual`,
  };
  return data;
};

const phones = [
  {
    model: 'iPad Pro 12.9-inch (2021)',
    lowPrice: 99999,
    highPrice: 145000,
    price: 115897,
    brand: 'Apple',
  },
  {
    model: 'iPad Pro 11-inch (2021)',
    lowPrice: 69000,
    highPrice: 85000,
    price: 95000,
    brand: 'Apple',
  },
  {
    model: 'iPad Air (2020)',
    lowPrice: 54000,
    highPrice: 70000,
    price: 63000,
    brand: 'Apple',
  },
  {
    model: 'iPad (9th generation)',
    lowPrice: 78000,
    highPrice: 99999,
    price: 83000,
    brand: 'Apple',
  },
  {
    model: 'iPad mini (6th generation)',
    lowPrice: 55000,
    highPrice: 78000,
    price: 65000,
    brand: 'Apple',
  },
  {
    model: 'iPad Pro 12.9-inch (2020)',
    lowPrice: 47000,
    highPrice: 55045,
    price: 62397,
    brand: 'Apple',
  },
  {
    model: 'iPad Pro 11-inch (2020)',
    lowPrice: 54378,
    highPrice: 61999,
    price: 70000,
    brand: 'Apple',
  },
  {
    model: 'iPad Air (4th generation)',
    lowPrice: 45045,
    highPrice: 52315,
    price: 67319,
    brand: 'Apple',
  },
  {
    model: 'iPad (8th generation)',
    lowPrice: 30672,
    highPrice: 37666,
    price: 41444,
    brand: 'Apple',
  },
  {
    model: 'iPad mini (5th generation)',
    lowPrice: 48000,
    highPrice: 65000,
    price: 55000,
    brand: 'Apple',
  },
  {
    model: 'iPad Pro 12.9-inch (2018)',
    lowPrice: 38000,
    highPrice: 55000,
    price: 45000,
    brand: 'Apple',
  },
  {
    model: 'iPad Pro 10.5-inch (2017)',
    lowPrice: 28000,
    highPrice: 45000,
    price: 35000,
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
      item.brand
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
