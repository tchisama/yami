import { Store } from '@/types/storeType';
import { create } from 'zustand'



const initialState:Store[] = [
  {
      storeName: "Pizza Delight",
      id: 12345,
      rating: {
          rating: 4.5,
          numberOfRaters: 250,
      },
      description: "A cozy pizzeria serving delicious, handcrafted pizzas.",
      hourOfWorkInWeek: {
          Monday: "10:00 AM - 10:00 PM",
          Tuesday: "10:00 AM - 10:00 PM",
          Wednesday: "10:00 AM - 10:00 PM",
          Thursday: "10:00 AM - 10:00 PM",
          Friday: "10:00 AM - 11:00 PM",
          Saturday: "11:00 AM - 11:00 PM",
          Sunday: "11:00 AM - 10:00 PM",
      },
      jobTime: ["Full-time", "Part-time"],
      backgroundImage: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      avatarImage: "url('pizza_store_logo.png')",
      location: {
          lat: 45.7128,
          lng: -74.006,
      },
  },
  {
      storeName: "Burger Haven",
      id: 54321,
      rating: {
          rating: 4.2,
          numberOfRaters: 180,
      },
      description: "Your go-to spot for mouthwatering burgers and fries.",
      hourOfWorkInWeek: {
          Monday: "11:00 AM - 9:00 PM",
          Tuesday: "11:00 AM - 9:00 PM",
          Wednesday: "11:00 AM - 9:00 PM",
          Thursday: "11:00 AM - 9:00 PM",
          Friday: "11:00 AM - 10:00 PM",
          Saturday: "12:00 PM - 10:00 PM",
          Sunday: "12:00 PM - 8:00 PM",
      },
      jobTime: ["Full-time", "Part-time"],
      backgroundImage: "https://images.pexels.com/photos/3504876/pexels-photo-3504876.jpeg?auto=compress&cs=tinysrgb&w=1600",
      avatarImage: "url('burger_store_logo.png')",
      location: {
          lat: 41.8781,
          lng: -87.6298,
      },
  },
  {
      storeName: "Sushi Heaven",
      id: 67890,
      rating: {
          rating: 4.7,
          numberOfRaters: 300,
      },
      description: "Experience the freshest and most delectable sushi in town.",
      hourOfWorkInWeek: {
          Monday: "12:00 PM - 9:00 PM",
          Tuesday: "12:00 PM - 9:00 PM",
          Wednesday: "12:00 PM - 9:00 PM",
          Thursday: "12:00 PM - 9:00 PM",
          Friday: "12:00 PM - 10:00 PM",
          Saturday: "1:00 PM - 10:00 PM",
          Sunday: "Closed",
      },
      jobTime: ["Full-time", "Part-time", "Internship"],
      backgroundImage: "https://images.pexels.com/photos/8951202/pexels-photo-8951202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      avatarImage: "url('sushi_store_logo.png')",
      location: {
          lat: 30.0522,
          lng: -108.2437,
      },
  },
  {
      storeName: "Coffee Express",
      id: 98765,
      rating: {
          rating: 4.0,
          numberOfRaters: 150,
      },
      description: "A cozy cafe serving premium coffee and pastries.",
      hourOfWorkInWeek: {
          Monday: "7:00 AM - 6:00 PM",
          Tuesday: "7:00 AM - 6:00 PM",
          Wednesday: "7:00 AM - 6:00 PM",
          Thursday: "7:00 AM - 6:00 PM",
          Friday: "7:00 AM - 7:00 PM",
          Saturday: "8:00 AM - 7:00 PM",
          Sunday: "8:00 AM - 5:00 PM",
      },
      jobTime: ["Full-time", "Part-time", "Seasonal"],
      backgroundImage: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      avatarImage: "url('coffee_store_logo.png')",
      location: {
          lat: 40.7749,
          lng: -122.4194,
      },
  },
  {
    storeName: "Taco Fiesta",
    id: 13579,
    rating: {
        rating: 4.3,
        numberOfRaters: 220,
    },
    description: "Savor the flavors of authentic Mexican tacos and cuisine.",
    hourOfWorkInWeek: {
        Monday: "10:30 AM - 9:30 PM",
        Tuesday: "10:30 AM - 9:30 PM",
        Wednesday: "10:30 AM - 9:30 PM",
        Thursday: "10:30 AM - 9:30 PM",
        Friday: "10:30 AM - 10:30 PM",
        Saturday: "11:00 AM - 10:30 PM",
        Sunday: "11:00 AM - 9:00 PM",
    },
    jobTime: ["Full-time", "Part-time"],
    backgroundImage: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatarImage: "url('taco_store_logo.png')",
    location: {
        lat: 33.6846,
        lng: -117.8265,
    },
  },
  {
    storeName: "Italian Trattoria",
    id: 24680,
    rating: {
        rating: 4.6,
        numberOfRaters: 280,
    },
    description: "Indulge in the rich flavors of Italy with our authentic pasta and pizza.",
    hourOfWorkInWeek: {
        Monday: "12:00 PM - 9:00 PM",
        Tuesday: "12:00 PM - 9:00 PM",
        Wednesday: "12:00 PM - 9:00 PM",
        Thursday: "12:00 PM - 9:00 PM",
        Friday: "12:00 PM - 10:00 PM",
        Saturday: "1:00 PM - 10:00 PM",
        Sunday: "Closed",
    },
    jobTime: ["Full-time", "Part-time"],
    backgroundImage: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatarImage: "url('italian_store_logo.png')",
    location: {
        lat: 40.7128,
        lng: -74.006,
    },
  },
  {
    storeName: "Mediterranean Delights",
    id: 56789,
    rating: {
        rating: 4.4,
        numberOfRaters: 210,
    },
    description: "Experience the taste of the Mediterranean with our fresh and flavorful dishes.",
    hourOfWorkInWeek: {
        Monday: "11:00 AM - 9:00 PM",
        Tuesday: "11:00 AM - 9:00 PM",
        Wednesday: "11:00 AM - 9:00 PM",
        Thursday: "11:00 AM - 9:00 PM",
        Friday: "11:00 AM - 10:00 PM",
        Saturday: "12:00 PM - 10:00 PM",
        Sunday: "12:00 PM - 8:00 PM",
    },
    jobTime: ["Full-time", "Part-time", "Internship"],
    backgroundImage: "https://images.pexels.com/photos/10563268/pexels-photo-10563268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatarImage: "url('mediterranean_store_logo.png')",
    location: {
        lat: 34.0522,
        lng: -118.2437,
    },
  },
  {
    storeName: "Bakery Bliss",
    id: 97531,
    rating: {
        rating: 4.8,
        numberOfRaters: 320,
    },
    description: "Satisfy your sweet tooth with our delectable pastries and freshly baked goods.",
    hourOfWorkInWeek: {
        Monday: "8:00 AM - 7:00 PM",
        Tuesday: "8:00 AM - 7:00 PM",
        Wednesday: "8:00 AM - 7:00 PM",
        Thursday: "8:00 AM - 7:00 PM",
        Friday: "8:00 AM - 8:00 PM",
        Saturday: "9:00 AM - 8:00 PM",
        Sunday: "9:00 AM - 6:00 PM",
    },
    jobTime: ["Full-time", "Part-time", "Seasonal"],
    backgroundImage: "https://images.pexels.com/photos/14565951/pexels-photo-14565951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatarImage: "url('bakery_store_logo.png')",
    location: {
        lat: 37.7749,
        lng: -122.4194,
    },
  }  
  // Add even more random stores here...
];


type Actions = {
    stores : Store[]
    setStore :(newStore:Store[]) => void
}

export const useStores = create<Actions>()((set) => ({
  stores: initialState,
  setStore: (newStore:Store[]) => set({ stores: newStore }),
}))