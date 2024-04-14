// boatsData.js
import boat1 from '../assets/boat1.jpg';
import boat2 from '../assets/boat2.jpg';
import boat3 from '../assets/boat3.jpg';
import boat4 from '../assets/boat4.jpg';
import boat5 from '../assets/boat5.jpg';
import boat6 from '../assets/boat6.jpg';

const boatsData = [
    {
      id: 1,
      img: boat1, // Example image import
      name: 'August',
      length: '6.3m',
      width: '2.3m',
      engine: 'Destroyer69',
      persons: 6,
      price: 'from 400€',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates, alias, hic quo adipisci possimus officiis accusantium pariatur ex doloribus expedita, nihil iusto eveniet! Quidem asperiores fugit delectus dolorum enim.',
      Technical_characteristics: {
        "char1": "nesto nesto nesto",
        "char2": "nesto nesto nesto",
        "char3": "nesto nesto nesto",
        "char4": "nesto nesto nesto",
        "char5": "nesto nesto nesto",
        "char6": "nesto nesto nesto",
        "char7": "nesto nesto nesto"
      },
      Additional_equipment: {
        "equip1": "nesto nesto nesto",
        "equip2": "nesto nesto nesto",
        "equip3": "nesto nesto nesto",
        "equip4": "nesto nesto nesto",
        "equip5": "nesto nesto nesto",
        "equip6": "nesto nesto nesto",
        "equip7": "nesto nesto nesto"
      },
      prices: {
        "1.5-31.5": "300€",
        "1.6-30.6": "350€",
        "1.7-31.8": "400€",
        "1.9-30.9": "350€"
      },

      images: {
        "boat1": boat1,
        "boat2": boat2,
        "boat3": boat3,
        "boat4": boat4,
        "boat5": boat5,
        "boat6": boat6,
      }
    },
    
    // Add more boat objects as needed...
  ];


  
  export default boatsData;
  