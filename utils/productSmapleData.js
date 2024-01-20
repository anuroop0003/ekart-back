const fs = require('fs');

const productSampleData = (name, lowPrice, price, highPrice) => {
  const data = {
    categoryId: '65ac11a43a47f7e86e68a5d4',
    name: `Galaxy ${name} - Flagship Android Smartphone`,
    description_1: `Introducing the Galaxy ${name}, our latest flagship Android smartphone designed to redefine your mobile experience. Packed with cutting-edge features and sleek design, the Galaxy ${name} offers unparalleled performance and innovation.`,
    description_2: `Elevate your mobile experience with the Galaxy ${name}. Order now and stay ahead with the latest in smartphone technology!`,
    highestPrice: highPrice,
    currentPrice: price,
    lowestPrice: lowPrice,
    category: 'Mobile',
    features: `#Stunning Display: Immerse yourself in the vibrant 6.5#inch Super AMOLED display, delivering rich colors and sharp details for an exceptional viewing experience.#Powerful Performance: Equipped with a lightning-fast octa-core processor and 8GB of RAM, the Galaxy ${name} ensures smooth multitasking and responsive performance.#Dual Rear Cameras: Capture breathtaking moments with the 64MP main camera and 12MP ultra-wide lens. The AI-powered camera system delivers stunning photos in any lighting condition.#5G Connectivity: Experience blazing-fast internet speeds with 5G connectivity, ensuring seamless streaming, gaming, and downloading on the go.#All-Day Battery Life: Stay connected all day with the powerful 5000mAh battery, and with fast charging support, you'll be ready to go in no time.#Premium Design: The sleek and slim design of the Galaxy ${name} features a glass back and aluminum frame, exuding elegance and durability.#Secure Biometric Unlock: Unlock your phone effortlessly with the in-display fingerprint sensor or facial recognition for enhanced security.`,
    brand: 'Samsung',
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
    boxItems: `Galaxy ${name} Smartphone#USB Type-C Charging Cable#Fast Charging Adapter#SIM Ejector Tool#Quick Start Guide`,
  };
  return data;
};

const phones = [
  {
    model: 'Galaxy S23 Ultra',
    lowPrice: 99999,
    highPrice: 145000,
    price: 115897,
  },
  {
    model: 'Galaxy S23 Plus',
    lowPrice: 69000,
    highPrice: 85000,
    price: 95000,
  },
  { model: 'Galaxy S23', lowPrice: 54000, highPrice: 70000, price: 63000 },
  {
    model: 'Galaxy S22 Ultra',
    lowPrice: 78000,
    highPrice: 99999,
    price: 83000,
  },
  {
    model: 'Galaxy S22 Plus',
    lowPrice: 55000,
    highPrice: 78000,
    price: 65000,
  },
  { model: 'Galaxy S22', lowPrice: 47000, highPrice: 55045, price: 62397 },
  {
    model: 'Galaxy S21 Ultra',
    lowPrice: 54378,
    highPrice: 61999,
    price: 70000,
  },
  {
    model: 'Galaxy S21 Plus',
    lowPrice: 45045,
    highPrice: 52315,
    price: 67319,
  },
  { model: 'Galaxy S21', lowPrice: 30672, highPrice: 37666, price: 41444 },
  { model: 'Galaxy S23 FE', lowPrice: 48000, highPrice: 65000, price: 55000 },
  { model: 'Galaxy S22 FE', lowPrice: 38000, highPrice: 55000, price: 45000 },
  { model: 'Galaxy S21 FE', lowPrice: 28000, highPrice: 45000, price: 35000 },
];

function productSampleDataMaker() {
  //   const data = "This is a testing";
  const data = phones.map((item) =>
    productSampleData(item.model, item.lowPrice, item.price, item.highPrice)
  );
  fs.writeFile('./file.txt', JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }
    console.log('Data has been written to file successfully.');
  });
}

productSampleDataMaker();
