// boatsData.js
import boat1 from '../assets/_DSC4791.jpg';
import boat2 from '../assets/_DSC4804.jpg';
import boat3 from '../assets/_DSC4810.jpg';
import boat4 from '../assets/_DSC4831.jpg';
import boat5 from '../assets/_DSC4839.jpg';
import boat6 from '../assets/_DSC4857.jpg';

const boatsData = [
    {
      id: 1,
      img: boat1, // Example image import
      name: 'August',
      length: '7.15m',
      width: '2.50m',
      engine: 'Suzuki 200ks',
      persons: 6,
      price: 'from 300€',
      description: 'The Cap-Ferret 752 Cruiser is a modern, stylish and extremely seaworthy design with a 100% self-draining deck. Measuring 7.52 meters in length, this generous space is perfect for those long weekends away. This 752 Cruiser has all the facilities for comfort during extended trips on the water with it’s 4-berth, spacious cabin. Presenting it’s wrap around seating, which offers a sociable cockpit area and dining table, prioritising social interactions allowing passengers to enjoy each others company while cruising.  This boat can be rented with or without the skipper. If you want to rent it without the skipper, you need to have a valid maritime license and put a 600€ security deposit on the spot. If you do not have a valid maritime license, you can hire one of our experienced skippers for an additional 100 € per day.   Please note that fuel is not included in the price. Cost depends on the consumption on your trip.  This boat is very good on sea with powerfull 200 hp Suzuki engine.   It is equipped with bimini, sundeck, water tank and shower, snorkelling equipment, external table, refrigirator, GPS and depth sounder,electric windlass, anchor and mooring equipment, ladders, radio with speakers, mp3 with bluetooth, usb plug, outdoor cushions, safety equipment etc.  If you have any additional questions, feel free to reach out to me here and I will reply to you as soon as possible. See you soon!',
      Technical_characteristics: {
        "char1": "Type: Speedboats",
        "char2": "Year: 2018",
        "char3": "Length: 7.15m",
        "char4": "Width: 2.50m",
        "char5": "Number of persons: 6",
        "char6": "Engine: Suzuki 200ks",
        "char7": "Water tank: 75l",
        "char8": "Fuel tank: 190l",
        "char9": "Max speed: 38 mph"
      },
      Additional_equipment: {
        "equip1": "Bimini awning",
        "equip2": "Outdor shower",
        "equip3": "External table",
        "equip4": "External speakers",
        "equip5": "Bow sundeck",
        "equip6": "Aft sundeck",
        "equip7": "Bathing ladder",
        "equip8": "USB socket",
        "equip9": "GPS, map of Adriatic sea, Fishfinder and depth sonder",
        "equip10": "Radio bluetooth/MP3 with speakers",
        "equip11": "Fridge",
        "equip12": "Electric windlass",
        "equip13": "Snorkelling equipment",
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
  