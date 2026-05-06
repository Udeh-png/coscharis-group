import { Vehicle } from "./types";

export const Businesses = [
  "Motors",
  "Technologies",
  "Mobility",
  "Beverages",
  "Medicine & Food",
  "Farms",
];

export const FeaturedCars: Vehicle[] = [
  {
    name: "2022 Renault Fluence",
    mainImage:
      "https://www.pngarts.com/files/1/Renault-PNG-Transparent-Image.png",
    category: "Compact Sudan",
    keySpecs: ["manual", "4 doors", "110hp"],
    startingPrice: 53000000,
    detailShots: [],
  },
  {
    name: "2023 Land Rover Defender",
    mainImage: "https://www.pngarts.com/files/3/Land-Rover-PNG-Pic.png",
    category: "Luxury SUV",
    keySpecs: ["4x4 drive", "5 Seats", "300hp", "Automatic", "3.5L"],
    startingPrice: 35000000,
    detailShots: [
      "https://www.pngarts.com/files/3/Land-Rover-PNG-Pic.png",
      "https://picsum.photos/id/32/818/540",
      "https://picsum.photos/id/61/818/540",
      "https://picsum.photos/id/68/818/540",
      "https://picsum.photos/id/72/818/540",
      "https://picsum.photos/id/79/818/540",
      "https://picsum.photos/id/91/818/540",
      "https://picsum.photos/id/96/818/540",
      "https://picsum.photos/id/183/818/540",
      "https://picsum.photos/id/237/818/540",
      "https://picsum.photos/id/232/818/540",
    ],
    performanceSpecs: {
      engine: "32-valve DOHC V8 engine",
      horsepower: "355 hp",
      torque: "250 Nm",
      "0-100km/h": "6.5s",
      weight: "3300 lb",
      transmission: "automatic",
      top_speed: "220 km/h",
      fuel_tank_capacity: "90 L",
      engin_displacement: "3 L",
    },
    dimensions: {
      length: "4932 mm",
      width: "2104 mm",
      height: "1744 mm",
      wheel_base: "2,982 mm",
      ground_clearance: "214 mm",
      seats: "5",
      boot_space: "650 L",
      gross_vehicle_weight: "4468 lb",
    },
  },
  {
    name: "2024 BMW X5",
    mainImage: "https://picsum.photos/id/61/818/540",
    category: "Premium SUV",
    keySpecs: ["automatic", "5 seats", "335hp"],
    startingPrice: 42000000,
    detailShots: [],
  },
  {
    name: "2022 Ford Mustang",
    mainImage: "https://www.pngarts.com/files/3/Ford-Mustang-PNG-Image.png",
    category: "Sports Coupe",
    keySpecs: ["automatic", "2 doors", "450hp"],
    startingPrice: 30000000,
    detailShots: [],
  },
  {
    name: "2024 Rolls Royce Ghost",
    mainImage:
      "https://www.pngarts.com/files/3/White-Rolls-Royce-PNG-Background-Image.png",
    category: "Ultra Luxury Sedan",
    keySpecs: ["automatic", "4 doors", "563hp"],
    startingPrice: 150000000,
    detailShots: [],
  },
  {
    name: "2024 Toyota Land Cruiser",
    mainImage:
      "https://www.pngarts.com/files/4/Toyota-PNG-Image-Background.png",
    category: "Off-Road SUV",
    keySpecs: ["4x4 drive", "7 seats", "381hp"],
    startingPrice: 28000000,
    detailShots: [],
  },
  {
    name: "2023 BMW M3",
    mainImage: "https://www.pngarts.com/files/4/BMW-PNG-Image-Background.png",
    category: "Performance Sedan",
    keySpecs: ["RWD", "4 doors", "473hp"],
    startingPrice: 55000000,
    detailShots: [],
  },
  {
    name: "2023 Jaguar F-Pace",
    mainImage:
      "https://e7.pngegg.com/pngimages/559/561/png-clipart-jaguar-cars-jaguar-cars-2017-jaguar-f-pace-jaguar-f-type-jaguar-compact-car-animals.png",
    category: "Performance Crossover",
    keySpecs: ["AWD", "5 seats", "296hp"],
    startingPrice: 38000000,
    detailShots: [],
  },
];

export const CoscharisMotorsServices = [
  {
    eyebrow: "01",
    title: "New & Second-Hand Vehicle Sales",
    description:
      "Explore our extensive inventory of new and pre-owned vehicles, including sedans, SUVs, trucks, and luxury cars. Our knowledgeable sales team is here to help you find the perfect vehicle that suits your needs and budget.",
  },
  {
    eyebrow: "02",
    title: "After-Sales & Maintenance",
    description:
      "Our state-of-the-art service center is staffed with certified technicians who provide comprehensive maintenance and repair services. From routine oil changes to complex engine repairs, we ensure your vehicle stays in optimal condition.",
  },
  {
    eyebrow: "03",
    title: "Vehicle Assembly",
    description:
      "We offer flexible financing solutions to make your vehicle purchase affordable. Our finance experts work with a network of lenders to secure competitive rates and terms that fit your budget.",
  },
  {
    eyebrow: "04",
    title: "Genuine Parts & AutoCare",
    description:
      "We provide a wide range of genuine parts and accessories to keep your vehicle running smoothly. Whether you need replacement parts or want to customize your vehicle, we have you covered with high-quality products.",
  },
];
