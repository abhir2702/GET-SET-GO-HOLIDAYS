import { Tour } from "@/types/Tour";

// Helper function to generate random IDs
const generateId = () => Math.random().toString(36).substring(2, 10);

export const internationalTours: Tour[] = [
  {
    id: generateId(),
    name: "Bali Paradise Getaway",
    pricing: {
      with_flight: "₹45,000",
      land_only: "₹32,000"
    },
    duration: "6N/7D",
    itinerary: [
      "Day 1: Arrival in Denpasar, transfer to Ubud",
      "Day 2: Ubud cultural tour, Monkey Forest",
      "Day 3: Sacred temples and rice terraces",
      "Day 4: Transfer to Seminyak, beach time",
      "Day 5: Uluwatu Temple and Kecak dance",
      "Day 6: Water sports and relaxation",
      "Day 7: Departure"
    ],
    location: "Bali, Indonesia",
    image: "/src/assets/images/Bali Paradise Getaway.webp",
    rating: 4.8,
    reviewCount: 302,
    featured: true,
    category: "international"
  },
  {
    id: generateId(),
    name: "Swiss Alps Adventure",
    pricing: {
      with_flight: "₹1,20,000",
      land_only: "₹75,000"
    },
    duration: "8N/9D",
    itinerary: [
      "Day 1: Arrival in Zurich, transfer to Lucerne",
      "Day 2: Mt. Pilatus excursion",
      "Day 3: Lucerne to Interlaken",
      "Day 4: Jungfraujoch – Top of Europe",
      "Day 5: Interlaken to Zermatt",
      "Day 6: Gornergrat and Matterhorn views",
      "Day 7: Zermatt to St. Moritz via Glacier Express",
      "Day 8: St. Moritz exploration",
      "Day 9: Departure from Zurich"
    ],
    location: "Switzerland",
    image: "/src/assets/images/Swiss Alps Adventure.webp",
    rating: 4.9,
    reviewCount: 187,
    featured: true,
    category: "international"
  },
  {
    id: generateId(),
    name: "Japan Cherry Blossom Tour",
    pricing: {
      with_flight: "₹1,35,000",
      land_only: "₹90,000"
    },
    duration: "9N/10D",
    itinerary: [
      "Day 1: Arrival in Tokyo, hotel check-in",
      "Day 2: Tokyo city tour, Shinjuku Gyoen",
      "Day 3: Tokyo to Hakone, Mt. Fuji views",
      "Day 4: Hakone to Kyoto",
      "Day 5: Kyoto temples and gardens",
      "Day 6: Arashiyama Bamboo Grove",
      "Day 7: Kyoto to Osaka",
      "Day 8: Osaka city tour",
      "Day 9: Free day in Osaka",
      "Day 10: Departure"
    ],
    location: "Japan",
    image: "/src/assets/images/Japan Cherry Blossom Tour.webp",
    rating: 4.9,
    reviewCount: 230,
    featured: true,
    category: "international"
  },
  {
    id: generateId(),
    name: "Greek Islands Cruise",
    pricing: {
      with_flight: "₹95,000",
      land_only: "₹65,000"
    },
    duration: "7N/8D",
    itinerary: [
      "Day 1: Arrival in Athens, hotel check-in",
      "Day 2: Athens city tour, Acropolis",
      "Day 3: Board cruise, sail to Mykonos",
      "Day 4: Explore Mykonos",
      "Day 5: Santorini, Oia sunset",
      "Day 6: Crete, Knossos Palace",
      "Day 7: Return to Athens",
      "Day 8: Departure"
    ],
    location: "Greece",
    image: "/src/assets/images/Greek Islands Cruise.webp",
    rating: 4.7,
    reviewCount: 178,
    featured: true,
    category: "international"
  },
  {
    id: generateId(),
    name: "Bali Bliss Tour",
    pricing: {
      with_flight: "₹45,000"
    },
    duration: "5N/6D",
    itinerary: [
      "Day 1: Arrival in Denpasar, hotel check-in, relax at Kuta Beach",
      "Day 2: Visit Uluwatu Temple, enjoy sunset",
      "Day 3: Day trip to Ubud, explore rice fields and Monkey Forest",
      "Day 4: Beach day in Seminyak, shopping",
      "Day 5: Visit Tanah Lot Temple, departure"
    ],
    location: "Bali, Indonesia",
    image: "/src/assets/images/Bali Bliss Tour.jpg",
    rating: 4.8,
    reviewCount: 210,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Thailand Explorer Tour",
    pricing: {
      with_flight: "₹43,260"
    },
    duration: "6N/7D",
    itinerary: [
      "Day 1: Arrival in Bangkok, hotel check-in",
      "Day 2: Bangkok city tour, Grand Palace, Wat Arun",
      "Day 3: Transfer to Pattaya, beach relaxation",
      "Day 4: Coral Island tour, water sports",
      "Day 5: Transfer to Bangkok, shopping",
      "Day 6: Visit Floating Market, departure"
    ],
    location: "Thailand",
    image: "/src/assets/images/Thailand Explorer Tour.jpg",
    rating: 4.7,
    reviewCount: 185,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Dubai Extravaganza Tour",
    pricing: {
      with_flight: "₹55,000"
    },
    duration: "5N/6D",
    itinerary: [
      "Day 1: Arrival in Dubai, hotel check-in",
      "Day 2: City tour, visit Burj Khalifa",
      "Day 3: Desert Safari with BBQ dinner",
      "Day 4: Visit Dubai Mall, shopping",
      "Day 5: Dhow Cruise on Dubai Marina, departure"
    ],
    location: "Dubai, UAE",
    image: "/src/assets/images/Dubai Extravaganza Tour.webp",
    rating: 4.8,
    reviewCount: 198,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Kazakhstan Adventure Tour",
    pricing: {
      with_flight: "₹65,000"
    },
    duration: "6N/7D",
    itinerary: [
      "Day 1: Arrival in Almaty, hotel check-in",
      "Day 2: Visit Kok-Tobe Hill, city tour",
      "Day 3: Day trip to Charyn Canyon",
      "Day 4: Explore Big Almaty Lake",
      "Day 5: Transfer to Astana, visit Bayterek Tower",
      "Day 6: Astana city tour, departure"
    ],
    location: "Kazakhstan",
    image: "/src/assets/images/Kazakhstan Adventure Tour.webp",
    rating: 4.6,
    reviewCount: 89,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Bangkok Getaway Tour",
    pricing: {
      with_flight: "₹38,000"
    },
    duration: "4N/5D",
    itinerary: [
      "Day 1: Arrival in Bangkok, hotel check-in",
      "Day 2: Visit Wat Pho and Wat Traimit",
      "Day 3: Day trip to Ayutthaya, historical sites",
      "Day 4: Shopping at Chatuchak Market, departure"
    ],
    location: "Bangkok, Thailand",
    image: "/src/assets/images/Bangkok Getaway Tour.webp",
    rating: 4.6,
    reviewCount: 150,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Vietnam Highlights Tour",
    pricing: {
      with_flight: "₹40,000"
    },
    duration: "5N/6D",
    itinerary: [
      "Day 1: Arrival in Hanoi, hotel check-in",
      "Day 2: Hanoi city tour, Ho Chi Minh Mausoleum",
      "Day 3: Day trip to Halong Bay, overnight cruise",
      "Day 4: Transfer to Ho Chi Minh City",
      "Day 5: Cu Chi Tunnels tour, departure"
    ],
    location: "Vietnam",
    image: "/src/assets/images/Vietnam Highlights Tour.webp",
    rating: 4.7,
    reviewCount: 142,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Maldives Paradise Tour",
    pricing: {
      with_flight: "₹67,486"
    },
    duration: "4N/5D",
    itinerary: [
      "Day 1: Arrival in Male, transfer to resort",
      "Day 2: Snorkeling and beach relaxation",
      "Day 3: Water sports, sunset cruise",
      "Day 4: Spa day, departure"
    ],
    location: "Maldives",
    image: "/src/assets/images/Maldives Paradise Tour.webp",
    rating: 4.9,
    reviewCount: 230,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Malaysia Cultural Tour",
    pricing: {
      with_flight: "₹48,534"
    },
    duration: "6N/7D",
    itinerary: [
      "Day 1: Arrival in Kuala Lumpur, hotel check-in",
      "Day 2: Visit Petronas Towers, city tour",
      "Day 3: Day trip to Batu Caves",
      "Day 4: Transfer to Penang, explore Georgetown",
      "Day 5: Penang Hill visit",
      "Day 6: Local food tour, departure"
    ],
    location: "Malaysia",
    image: "/src/assets/images/Malaysia Cultural Tour.webp",
    rating: 4.7,
    reviewCount: 156,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Singapore City Escape",
    pricing: {
      with_flight: "₹50,000"
    },
    duration: "4N/5D",
    itinerary: [
      "Day 1: Arrival in Singapore, hotel check-in",
      "Day 2: Visit Gardens by the Bay, Marina Bay Sands",
      "Day 3: Sentosa Island tour",
      "Day 4: Shopping on Orchard Road, departure"
    ],
    location: "Singapore",
    image: "/src/assets/images/Singapore City Escape.webp",
    rating: 4.8,
    reviewCount: 189,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Australia Outback Tour",
    pricing: {
      with_flight: "₹1,20,000"
    },
    duration: "7N/8D",
    itinerary: [
      "Day 1: Arrival in Sydney, hotel check-in",
      "Day 2: Sydney Opera House, Harbour Bridge",
      "Day 3: Day trip to Blue Mountains",
      "Day 4: Transfer to Melbourne",
      "Day 5: Great Ocean Road tour",
      "Day 6: Melbourne city tour",
      "Day 7: Departure"
    ],
    location: "Australia",
    image: "/src/assets/images/Australia Outback Tour.webp",
    rating: 4.8,
    reviewCount: 132,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Paris Romantic Tour",
    pricing: {
      with_flight: "₹90,000"
    },
    duration: "5N/6D",
    itinerary: [
      "Day 1: Arrival in Paris, hotel check-in",
      "Day 2: Visit Eiffel Tower, Seine River cruise",
      "Day 3: Louvre Museum, Notre-Dame",
      "Day 4: Day trip to Versailles",
      "Day 5: Montmartre exploration, departure"
    ],
    location: "Paris, France",
    image: "/src/assets/images/Paris Romantic Tour.webp",
    rating: 4.8,
    reviewCount: 205,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Bali Honeymoon Special",
    pricing: {
      with_flight: "₹50,000"
    },
    duration: "4N/5D",
    itinerary: [
      "Day 1: Arrival in Denpasar, transfer to Ubud",
      "Day 2: Romantic dinner, spa day",
      "Day 3: Visit Tegenungan Waterfall",
      "Day 4: Beach day in Nusa Dua, departure"
    ],
    location: "Bali, Indonesia",
    image: "/src/assets/images/Bali Honeymoon Special.webp",
    rating: 4.9,
    reviewCount: 178,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Thailand Beach Adventure",
    pricing: {
      with_flight: "₹47,000"
    },
    duration: "5N/6D",
    itinerary: [
      "Day 1: Arrival in Phuket, hotel check-in",
      "Day 2: Phi Phi Island tour",
      "Day 3: James Bond Island visit",
      "Day 4: Beach relaxation, water sports",
      "Day 5: Local market visit, departure"
    ],
    location: "Phuket, Thailand",
    image: "/src/assets/images/Thailand Beach Adventure.webp",
    rating: 4.7,
    reviewCount: 165,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Dubai Luxury Tour",
    pricing: {
      with_flight: "₹70,000"
    },
    duration: "4N/5D",
    itinerary: [
      "Day 1: Arrival in Dubai, stay at luxury hotel",
      "Day 2: Burj Al Arab visit, spa day",
      "Day 3: Desert Safari with VIP dinner",
      "Day 4: Shopping at Gold Souk, departure"
    ],
    location: "Dubai, UAE",
    image: "/src/assets/images/Dubai Luxury Tour.webp",
    rating: 4.9,
    reviewCount: 142,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Kazakhstan Cultural Tour",
    pricing: {
      with_flight: "₹60,000"
    },
    duration: "5N/6D",
    itinerary: [
      "Day 1: Arrival in Astana, hotel check-in",
      "Day 2: Visit Hazrat Sultan Mosque",
      "Day 3: Transfer to Almaty, Medeu Skating Rink",
      "Day 4: Explore local bazaars",
      "Day 5: Departure"
    ],
    location: "Kazakhstan",
    image: "/src/assets/images/Kazakhstan Cultural Tour.webp",
    rating: 4.5,
    reviewCount: 78,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Bangkok Shopping Spree",
    pricing: {
      with_flight: "₹35,000"
    },
    duration: "3N/4D",
    itinerary: [
      "Day 1: Arrival in Bangkok, hotel check-in",
      "Day 2: Visit MBK Center, Siam Paragon",
      "Day 3: Chatuchak Weekend Market, departure"
    ],
    location: "Bangkok, Thailand",
    image: "/src/assets/images/Bangkok Shopping Spree.webp",
    rating: 4.6,
    reviewCount: 120,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Vietnam Coastal Tour",
    pricing: {
      with_flight: "₹45,000"
    },
    duration: "6N/7D",
    itinerary: [
      "Day 1: Arrival in Da Nang, hotel check-in",
      "Day 2: Visit Marble Mountains",
      "Day 3: Transfer to Hoi An, lantern tour",
      "Day 4: Beach day in Hoi An",
      "Day 5: Transfer to Hue, Imperial City",
      "Day 6: Departure"
    ],
    location: "Vietnam",
    image: "/src/assets/images/Vietnam Coastal Tour.webp",
    rating: 4.7,
    reviewCount: 135,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Maldives Overwater Villa Tour",
    pricing: {
      with_flight: "₹80,000"
    },
    duration: "5N/6D",
    itinerary: [
      "Day 1: Arrival in Male, transfer to overwater villa",
      "Day 2: Snorkeling, dolphin watching",
      "Day 3: Private beach dinner",
      "Day 4: Kayaking, spa treatment",
      "Day 5: Departure"
    ],
    location: "Maldives",
    image: "/src/assets/images/Maldives Overwater Villa Tour.webp",
    rating: 4.9,
    reviewCount: 210,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Malaysia-Singapore Combo Tour",
    pricing: {
      with_flight: "₹55,000"
    },
    duration: "6N/7D",
    itinerary: [
      "Day 1: Arrival in Kuala Lumpur, hotel check-in",
      "Day 2: KL Tower, city tour",
      "Day 3: Transfer to Singapore",
      "Day 4: Universal Studios visit",
      "Day 5: Merlion Park, shopping",
      "Day 6: Departure"
    ],
    location: "Malaysia & Singapore",
    image: "/src/assets/images/Malaysia-Singapore Combo Tour.webp",
    rating: 4.8,
    reviewCount: 168,
    featured: false,
    category: "international"
  },
  {
    id: generateId(),
    name: "Australia Coastal Drive Tour",
    pricing: {
      with_flight: "₹1,30,000"
    },
    duration: "8N/9D",
    itinerary: [
      "Day 1: Arrival in Brisbane, hotel check-in",
      "Day 2: Visit Gold Coast, beach day",
      "Day 3: Transfer to Sydney",
      "Day 4: Bondi Beach, city tour",
      "Day 5: Transfer to Melbourne",
      "Day 6: Phillip Island penguin parade",
      "Day 7: Great Ocean Road drive",
      "Day 8: Departure"
    ],
    location: "Australia",
    image: "/src/assets/images/Australia Coastal Drive Tour.webp",
    rating: 4.8,
    reviewCount: 145,
    featured: false,
    category: "international"
  }
];
