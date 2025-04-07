import { Tour } from "@/types/Tour";

// Helper function to generate random IDs
const generateId = () => Math.random().toString(36).substring(2, 10);

export const indianTours: Tour[] = [
  {
    id: generateId(),
    name: "Goa Beach Escape",
    pricing: {
      with_flight: "₹22,025",
      land_only: "₹17,645"
    },
    duration: "5N/6D",
    itinerary: [
      "Day 1: Arrival, hotel check-in, Baga Beach",
      "Day 2: Old Goa, churches",
      "Day 3: Panjim, shopping",
      "Day 4: Beach day, water sports",
      "Day 5: Departure"
    ],
    location: "Goa, India",
    image: "/src/assets/images/Goa Beach Escape.webp",
    rating: 4.7,
    reviewCount: 128,
    featured: true,
    category: "india"
  },
  {
    id: generateId(),
    name: "Goa Cultural Tour",
    pricing: {
      with_flight: "₹25,000"
    },
    duration: "4N/5D",
    itinerary: [
      "Day 1: Arrival, hotel check-in, local market",
      "Day 2: Historical sites in Old Goa",
      "Day 3: Day trip to Margao",
      "Day 4: Relax at beach",
      "Day 5: Departure"
    ],
    location: "Goa, India",
    image: "/src/assets/images/Goa Cultural Tour.webp",
    rating: 4.5,
    reviewCount: 92,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Kashmir Magnificent Tour",
    pricing: {
      with_flight: "₹29,516",
      land_only: "₹25,000"
    },
    duration: "7N/8D",
    itinerary: [
      "Day 1: Arrival in Srinagar, hotel check-in",
      "Day 2: Srinagar city tour, Dal Lake",
      "Day 3: Trip to Gulmarg",
      "Day 4: Trip to Pahalgam",
      "Day 5: Back to Srinagar, shopping",
      "Day 6: Visit Sonamarg",
      "Day 7: Relaxation day",
      "Day 8: Departure"
    ],
    location: "Kashmir, India",
    image: "/src/assets/images/Kashmir Magnificent Tour.webp",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    category: "india"
  },
  {
    id: generateId(),
    name: "Rajasthan Golden Triangle Tour",
    pricing: {
      with_flight: "₹30,000",
      land_only: "₹25,000"
    },
    duration: "6N/7D",
    itinerary: [
      "Day 1: Arrival in Delhi, hotel check-in",
      "Day 2: Delhi to Agra, Taj Mahal, Agra Fort",
      "Day 3: Agra to Fatehpur Sikri, then to Jaipur",
      "Day 4: Jaipur: City Palace, Hawa Mahal, Amber Fort",
      "Day 5: Jaipur to Udaipur, City Palace, Lake Pichola boat ride",
      "Day 6: Udaipur to Jodhpur, Jaswant Thada, Mehrangarh Fort",
      "Day 7: Jodhpur to Delhi, departure"
    ],
    location: "Rajasthan, India",
    image: "/src/assets/images/Rajasthan Golden Triangle Tour.jpg",
    rating: 4.8,
    reviewCount: 169,
    featured: true,
    category: "india"
  },
  {
    id: generateId(),
    name: "Rajasthan Golden Triangle Premium Tour",
    pricing: {
      with_flight: "₹35,000"
    },
    duration: "7N/8D",
    itinerary: [
      "Day 1: Arrival in Delhi, hotel check-in",
      "Day 2: Delhi sightseeing (Red Fort, Qutub Minar, etc.)",
      "Day 3: Delhi to Agra, Taj Mahal, Agra Fort",
      "Day 4: Agra to Fatehpur Sikri, then to Jaipur",
      "Day 5: Jaipur: City Palace, Hawa Mahal, Amber Fort",
      "Day 6: Jaipur to Udaipur, City Palace, Lake Pichola boat ride",
      "Day 7: Udaipur to Jodhpur, Jaswant Thada, Mehrangarh Fort",
      "Day 8: Jodhpur to Delhi, departure"
    ],
    location: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1590687755272-62eae3441038?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 132,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Kerala Backwaters Tour",
    pricing: {
      with_flight: "₹25,000",
      land_only: "₹20,000"
    },
    duration: "7N/8D",
    itinerary: [
      "Day 1: Arrival in Kochi, hotel check-in",
      "Day 2: Kochi city tour, Fort Kochi",
      "Day 3: Kochi to Alleppey, houseboat stay",
      "Day 4: Houseboat tour in backwaters",
      "Day 5: Alleppey to Munnar, tea gardens",
      "Day 6: Munnar, trekking and sightseeing",
      "Day 7: Munnar to Thekkady, Periyar National Park",
      "Day 8: Thekkady, wildlife tour, departure"
    ],
    location: "Kerala, India",
    image: "/src/assets/images/Kerala Backwaters Tour.webp",
    rating: 4.9,
    reviewCount: 215,
    featured: true,
    category: "india"
  },
  {
    id: generateId(),
    name: "Himachal Adventure Tour",
    pricing: {
      with_flight: "₹22,000",
      land_only: "₹18,500"
    },
    duration: "6N/7D",
    itinerary: [
      "Day 1: Arrival in Shimla, hotel check-in",
      "Day 2: Shimla to Kufri, trekking",
      "Day 3: Kufri to Manali, via Rohtang Pass",
      "Day 4: Manali, local sightseeing, river rafting",
      "Day 5: Manali to Dharamshala, Dalai Lama Temple",
      "Day 6: Dharamshala to McLeod Ganj, trekking",
      "Day 7: Departure from Delhi"
    ],
    location: "Himachal Pradesh, India",
    image: "/src/assets/images/Himachal Adventure Tour.webp",
    rating: 4.7,
    reviewCount: 178,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Himachal Honeymoon Package",
    pricing: {
      land_only: "₹18,000"
    },
    duration: "4N/5D",
    itinerary: [
      "Day 1: Arrival in Manali, hotel check-in",
      "Day 2: Rohtang Pass, snow activities",
      "Day 3: Old Manali, local markets",
      "Day 4: River rafting, departure"
    ],
    location: "Himachal Pradesh, India",
    image: "/src/assets/images/Himachal Honeymoon Package.jpg",
    rating: 4.6,
    reviewCount: 145,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Magnificient Kashmir - Book Now Pay Later Package",
    pricing: {
      with_flight: "₹30,000",
      land_only: "₹25,000"
    },
    duration: "7D/6N",
    itinerary: [
      "Day 1: Arrival in Srinagar, hotel check-in",
      "Day 2: Srinagar city tour, Dal Lake shikara ride",
      "Day 3: Trip to Sonamarg, Thajiwas glacier, Vishansar Lake",
      "Day 4: Trip to Pahalgam, Betaab Valley, Aru Valley",
      "Day 5: Trip to Gulmarg, Gondola ride",
      "Day 6: Back to Srinagar, local shopping",
      "Day 7: Departure"
    ],
    location: "Kashmir, India",
    image: "/src/assets/images/Kashmir Premium Package.webp",
    rating: 4.8,
    reviewCount: 220,
    featured: true,
    category: "india"
  },
  {
    id: generateId(),
    name: "Scuba Diving Special Package",
    pricing: {
      with_flight: "₹89,064",
      land_only: "₹80,064"
    },
    duration: "7D/6N",
    itinerary: [
      "Day 1: Arrival in Port Blair, hotel check-in",
      "Day 2: Scuba diving at Havelock Island",
      "Day 3: Snorkeling at Neil Island",
      "Day 4: Visit Cellular Jail, Anthropological Museum",
      "Day 5: Another scuba diving session",
      "Day 6: Relaxation, beach activities",
      "Day 7: Departure"
    ],
    location: "Andaman, India",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 180,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Most Wanted Goa Package",
    pricing: {
      with_flight: "₹22,025"
    },
    duration: "5D/4N",
    itinerary: [
      "Day 1: Arrival in Goa, hotel check-in",
      "Day 2: Visit to Old Goa, churches, museums",
      "Day 3: Beach activities, water sports",
      "Day 4: Shopping in Panjim, local cuisine",
      "Day 5: Departure"
    ],
    location: "Goa, India",
    image: "https://images.unsplash.com/photo-1577717908798-de21559896c1?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 155,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Rajasthan Desert Tour",
    pricing: {
      with_flight: "₹25,000",
      land_only: "₹20,000"
    },
    duration: "5D/4N",
    itinerary: [
      "Day 1: Arrival in Jodhpur, visit Jaswant Thada and Mehrangarh Fort",
      "Day 2: Jodhpur to Jaisalmer, visit Jaisalmer Fort and Desert Safari",
      "Day 3: Jaisalmer to Bikaner, visit Junagarh Fort and Karni Mata Temple",
      "Day 4: Bikaner to Jaipur, visit City Palace",
      "Day 5: Jaipur to Delhi, departure"
    ],
    location: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1604149370700-e7a4b209a15a?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 142,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Sikkim Himalayan Adventure",
    pricing: {
      with_flight: "₹30,000",
      land_only: "₹25,500"
    },
    duration: "5D/4N",
    itinerary: [
      "Day 1: Arrival in Gangtok, hotel check-in",
      "Day 2: Gangtok to Pelling, visit Rabdentse Ruins, Pelling monastery",
      "Day 3: Pelling to Darjeeling, visit Tiger Hill, Darjeeling Zoo",
      "Day 4: Darjeeling to Kalimpong, visit local markets",
      "Day 5: Kalimpong to Bagdogra, departure"
    ],
    location: "Sikkim, India",
    image: "/src/assets/images/Sikkim Himalayan Adventure.webp",
    rating: 4.8,
    reviewCount: 115,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Jim Corbett National Park Tour",
    pricing: {
      with_flight: "₹20,000",
      land_only: "₹17,000"
    },
    duration: "4D/3N",
    itinerary: [
      "Day 1: Arrival in Ramnagar, hotel check-in",
      "Day 2: Morning and evening jungle safaris",
      "Day 3: Visit to nearby attractions like Garjiya Temple or Dhela Resort",
      "Day 4: Departure"
    ],
    location: "Uttarakhand, India",
    image: "/src/assets/images/Jim Corbett National Park Tour.webp",
    rating: 4.6,
    reviewCount: 98,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Tamil Nadu Cultural Tour",
    pricing: {
      with_flight: "₹25,000",
      land_only: "₹20,000"
    },
    duration: "5D/4N",
    itinerary: [
      "Day 1: Arrival in Chennai, hotel check-in, visit Marina Beach and Fort St. George",
      "Day 2: Chennai to Kanchipuram, visit Ekambareswarar Temple and Kailasanathar Temple",
      "Day 3: Kanchipuram to Mahabalipuram, visit Shore Temple and Five Raths",
      "Day 4: Mahabalipuram to Puducherry, visit Auroville and French Quarter",
      "Day 5: Departure from Chennai"
    ],
    location: "Tamil Nadu, India",
    image: "/src/assets/images/Tamil Nadu Cultural Tour.webp",
    rating: 4.5,
    reviewCount: 110,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Karnataka Heritage Tour",
    pricing: {
      with_flight: "₹30,000",
      land_only: "₹25,000"
    },
    duration: "5D/4N",
    itinerary: [
      "Day 1: Arrival in Bangalore, hotel check-in, visit Bangalore Palace and Cubbon Park",
      "Day 2: Bangalore to Mysore, visit Mysore Palace and Chamundeshwari Temple",
      "Day 3: Mysore to Hampi, visit Virupaksha Temple and Vijaya Vittala Temple",
      "Day 4: Hampi, explore the ruins and local markets",
      "Day 5: Hampi to Bangalore, departure"
    ],
    location: "Karnataka, India",
    image: "/src/assets/images/Karnataka Heritage Tour.webp",
    rating: 4.7,
    reviewCount: 122,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Andhra Pradesh Coastal Tour",
    pricing: {
      with_flight: "₹22,000",
      land_only: "₹17,000"
    },
    duration: "4D/3N",
    itinerary: [
      "Day 1: Arrival in Visakhapatnam, hotel check-in, visit Ramakrishna Beach and Kailasagiri Park",
      "Day 2: Visakhapatnam to Araku Valley, visit coffee estates and tribal villages",
      "Day 3: Araku Valley to Vijayawada, visit Undavalli Caves and Bhavani Island",
      "Day 4: Departure from Vijayawada"
    ],
    location: "Andhra Pradesh, India",
    image: "https://images.unsplash.com/photo-1623667238365-78a0315eac78?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 85,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Telangana Historical Tour",
    pricing: {
      with_flight: "₹18,000",
      land_only: "₹13,000"
    },
    duration: "3D/2N",
    itinerary: [
      "Day 1: Arrival in Hyderabad, hotel check-in, visit Charminar and Golconda Fort",
      "Day 2: Hyderabad to Warangal, visit Thousand Pillar Temple and Ramappa Temple",
      "Day 3: Warangal to Hyderabad, departure"
    ],
    location: "Telangana, India",
    image: "https://images.unsplash.com/photo-1606298855672-1a96d17b6609?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 78,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Puducherry French Quarter Tour",
    pricing: {
      with_flight: "₹25,000",
      land_only: "₹15,000"
    },
    duration: "4D/3N",
    itinerary: [
      "Day 1: Arrival in Chennai, transfer to Puducherry, hotel check-in",
      "Day 2: Explore French Quarter and Auroville",
      "Day 3: Visit local markets and beaches",
      "Day 4: Departure from Puducherry to Chennai"
    ],
    location: "Puducherry, India",
    image: "https://images.unsplash.com/photo-1642429080576-c6094c6d0ef5?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 90,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Lakshadweep Island Paradise Tour",
    pricing: {
      with_flight: "₹30,000"
    },
    duration: "5D/4N",
    itinerary: [
      "Day 1: Arrival in Agatti Island, hotel check-in, beach relaxation",
      "Day 2: Snorkeling and diving activities",
      "Day 3: Island hopping to nearby islands",
      "Day 4: Cultural tour and local cuisine",
      "Day 5: Departure"
    ],
    location: "Lakshadweep, India",
    image: "https://images.unsplash.com/photo-1592287914050-465654e2c566?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 105,
    featured: true,
    category: "india"
  },
  {
    id: generateId(),
    name: "Karnataka Coastal Tour",
    pricing: {
      with_flight: "₹22,000",
      land_only: "₹17,000"
    },
    duration: "4D/3N",
    itinerary: [
      "Day 1: Arrival in Mangalore, hotel check-in, visit St. Aloysius Chapel",
      "Day 2: Mangalore to Udupi, visit Krishna Temple and local markets",
      "Day 3: Udupi to Gokarna, visit Mahabaleshwar Temple and Om Beach",
      "Day 4: Gokarna to Mangalore, departure"
    ],
    location: "Karnataka, India",
    image: "https://images.unsplash.com/photo-1595232133541-7d780be2ead5?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 82,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Kerala Hill Station Tour",
    pricing: {
      with_flight: "₹25,000",
      land_only: "₹20,000"
    },
    duration: "4D/3N",
    itinerary: [
      "Day 1: Arrival in Kochi, transfer to Munnar, hotel check-in",
      "Day 2: Explore Munnar, visit tea gardens and Eravikulam National Park",
      "Day 3: Munnar to Wayanad, visit Banasura Sagar Dam and Edakkal Caves",
      "Day 4: Wayanad to Kochi, departure"
    ],
    location: "Kerala, India",
    image: "https://images.unsplash.com/photo-1604164388977-1b6250cf0483?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 115,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Tamil Nadu Hill Station Tour",
    pricing: {
      with_flight: "₹22,000",
      land_only: "₹17,000"
    },
    duration: "4D/3N",
    itinerary: [
      "Day 1: Arrival in Chennai, transfer to Ooty, hotel check-in",
      "Day 2: Explore Ooty, visit Botanical Garden and Nilgiri Mountain Railway",
      "Day 3: Ooty to Coonoor, visit Lamb's Rock and Sim's Park",
      "Day 4: Coonoor to Chennai, departure"
    ],
    location: "Tamil Nadu, India",
    image: "https://images.unsplash.com/photo-1518004260913-cb8a1f7d4c44?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 95,
    featured: false,
    category: "india"
  },
  {
    id: generateId(),
    name: "Karnataka Jungle Safari Tour",
    pricing: {
      with_flight: "₹25,000",
      land_only: "₹20,000"
    },
    duration: "5D/4N",
    itinerary: [
      "Day 1: Arrival in Bangalore, transfer to Bandipur National Park, hotel check-in",
      "Day 2: Morning and evening jungle safaris in Bandipur",
      "Day 3: Bandipur to Kabini, visit Kabini Backwaters and wildlife tours",
      "Day 4: Kabini to Nagarhole National Park, jungle safaris",
      "Day 5: Nagarhole to Bangalore, departure"
    ],
    location: "Karnataka, India",
    image: "https://images.unsplash.com/photo-1628620252435-1251ec07e5ce?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 102,
    featured: false,
    category: "india"
  }
];
