const phones = [
  {
    model: 'Galaxy S23 Ultra',
    lowPrice: 99999,
    highPrice: 145000,
    price: 115897,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S23 Plus',
    lowPrice: 69000,
    highPrice: 85000,
    price: 95000,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S23',
    lowPrice: 54000,
    highPrice: 70000,
    price: 63000,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S22 Ultra',
    lowPrice: 78000,
    highPrice: 99999,
    price: 83000,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S22 Plus',
    lowPrice: 55000,
    highPrice: 78000,
    price: 65000,
  },
  {
    model: 'Galaxy S22',
    lowPrice: 47000,
    highPrice: 55045,
    price: 62397,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S21 Ultra',
    lowPrice: 54378,
    highPrice: 61999,
    price: 70000,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S21 Plus',
    lowPrice: 45045,
    highPrice: 52315,
    price: 67319,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S21',
    lowPrice: 30672,
    highPrice: 37666,
    price: 41444,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S23 FE',
    lowPrice: 48000,
    highPrice: 65000,
    price: 55000,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S22 FE',
    lowPrice: 38000,
    highPrice: 55000,
    price: 45000,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy S21 FE',
    lowPrice: 28000,
    highPrice: 45000,
    price: 35000,
    brand: 'Samsung',
  },
];

const iphone_phones = [
  {
    model: 'Iphone 15 Pro Max',
    highPrice: 150000,
    price: 141670,
    lowPrice: 130009,
  },
  {
    model: 'Iphone 15 Pro',
    highPrice: 120784,
    price: 101111,
    lowPrice: 97666,
  },
  {
    model: 'Iphone 15 Plus',
    highPrice: 110784,
    price: 91111,
    lowPrice: 83000,
  },
  {
    model: 'Iphone 15',
    highPrice: 90784,
    price: 83666,
    lowPrice: 73927,
  },
  {
    model: 'Iphone 14 Pro Max',
    highPrice: 120784,
    price: 101111,
    lowPrice: 97666,
  },
  {
    model: 'Iphone 14 Pro',
    highPrice: 110784,
    price: 98760,
    lowPrice: 83567,
  },
  {
    model: 'Iphone 14 Plus',
    highPrice: 100784,
    price: 89670,
    lowPrice: 74567,
  },
  { model: 'Iphone 14', highPrice: 90453, price: 79999, lowPrice: 65999 },
  {
    model: 'Iphone 13 Pro Max',
    highPrice: 110784,
    price: 98760,
    lowPrice: 83567,
  },
  { model: 'Iphone 13 Pro', highPrice: 90784, price: 81760, lowPrice: 71567 },
  { model: 'Iphone 13 Plus', highPrice: 89784, price: 72000, lowPrice: 65897 },
  { model: 'Iphone 13', highPrice: 68784, price: 54897, lowPrice: 45000 },
];

const tablets = [
  {
    model: 'Galaxy Tab S9+',
    lowPrice: 99999,
    highPrice: 145000,
    price: 115897,
    brand: 'Samsung',
  },
  {
    model: 'Galaxy Tab S6',
    lowPrice: 69000,
    highPrice: 85000,
    price: 95000,
    brand: 'Samsung',
  },
  {
    model: 'Tab P11 Pro',
    lowPrice: 54000,
    highPrice: 70000,
    price: 63000,
    brand: 'Lenovo',
  },
  {
    model: 'MatePad Pro',
    lowPrice: 78000,
    highPrice: 99999,
    price: 83000,
    brand: 'Huawei',
  },
  {
    model: 'Fire HD 10',
    lowPrice: 55000,
    highPrice: 78000,
    price: 65000,
    brand: 'Amazon',
  },
  {
    model: 'Galaxy Tab A7',
    lowPrice: 47000,
    highPrice: 55045,
    price: 62397,
    brand: 'Samsung',
  },
  {
    model: 'Tab M10 Plus',
    lowPrice: 54378,
    highPrice: 61999,
    price: 70000,
    brand: 'Lenovo',
  },
  {
    model: 'Galaxy Tab S5e',
    lowPrice: 45045,
    highPrice: 52315,
    price: 67319,
    brand: 'Samsung',
  },
  {
    model: 'ZenPad 3S 10',
    lowPrice: 30672,
    highPrice: 37666,
    price: 41444,
    brand: 'Asus',
  },
  {
    model: 'Pixel Slate',
    lowPrice: 48000,
    highPrice: 65000,
    price: 55000,
    brand: 'Google',
  },
  {
    model: 'Mi Pad 6',
    lowPrice: 38000,
    highPrice: 55000,
    price: 45000,
    brand: 'Redmi',
  },
  {
    model: 'Pad 6',
    lowPrice: 28000,
    highPrice: 45000,
    price: 35000,
    brand: 'Xiaomi',
  },
];

const phone_productSampleData = (
  name,
  lowPrice,
  price,
  highPrice,
  brand,
  os
) => {
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

const tabletSampleData = (name, lowPrice, price, highPrice, brand, os) => {
  const data = {
    categoryId: '65ac11a43a47f7e86e68a5d4', // Use the appropriate tablet category ID
    name: `${name} - High-Performance Tablet`,
    description_1: `Introducing the ${name}, our latest high-performance tablet designed to elevate your digital experience. Packed with advanced features and a sleek design, the ${name} delivers superior performance for work and entertainment.`,
    description_2: `Enhance your productivity and entertainment with the ${name}. Order now and enjoy a seamless tablet experience!`,
    highestPrice: highPrice,
    currentPrice: price,
    lowestPrice: lowPrice,
    category: 'Tablet', // Update category to 'Tablet'
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
