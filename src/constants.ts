/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'cold' | 'heat' | 'light';
  tagline: string;
  description: string;
  price?: string;
  image: string;
  models: string[];
  specs: string[];
  benefits: {
    title: string;
    description: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'water-chiller',
    name: 'Water Chiller',
    category: 'cold',
    tagline: 'Professional-Grade Ice Bath System',
    description: 'Engineered for peak performance recovery, our Water Chiller delivers precisely controlled cold therapy — transforming ordinary baths into powerful recovery tools.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    models: [
      'Capacity 1 Ton — LWC-WP-00-1000KW',
      'Capacity 2 Ton — LWC-WP-00-2000KW',
      'Capacity 3 Ton — LWC-WP-00-3000KW'
    ],
    specs: [
      'Reciprocating Compressor',
      'Air Cooled Condenser',
      'Plate Heat Exchanger',
      'Crompton Greaves Make 1 Phase',
      'Danfoss / Flokool Dryer'
    ],
    benefits: [
      { title: 'Muscle Recovery', description: 'Reduces soreness, speeds repair and helps flush out lactic acid.' },
      { title: 'Inflammation Relief', description: 'Constricts blood vessels, reducing swelling and acute inflammation fast.' },
      { title: 'Mental Clarity', description: 'Triggers norepinephrine release — improving mood and focus.' }
    ]
  },
  {
    id: 'steam-generator',
    name: 'Steam Generator',
    category: 'heat',
    tagline: 'Professional-Grade Steam Wellness',
    description: 'Experience the ultimate in therapeutic steam wellness. Our commercial-grade Steam Generator brings luxury spa performance directly to your space.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    models: [
      '4.5 KW — LSG-WP-00-4.5KW',
      '6 KW — LSG-WP-00-6KW',
      '9 KW — LSG-WP-00-9KW',
      '12 KW — LSG-WP-00-12KW'
    ],
    specs: [
      'Digital Control Panel Operated',
      'Auto Timer Cut-Off System',
      'Stainless Steel (304/316) Tank',
      'Water Level Sensor Cut-Off',
      'Short Circuit Protection'
    ],
    benefits: [
      { title: 'Detox & Cleanse', description: 'Promotes sweating to expel toxins and impurities.' },
      { title: 'Respiratory Health', description: 'Opens airways and improves lung function.' },
      { title: 'Stess Relief', description: 'Triggers endorphin release and lowers cortisol.' }
    ]
  },
  {
    id: 'red-light-panel',
    name: 'Red Light Therapy Panel',
    category: 'light',
    tagline: 'Professional Full-Body Light Therapy',
    description: 'Harness the science of photobiomodulation with 660nm red and 850nm near-infrared wavelengths for deep cellular healing.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop',
    models: [
      'LRP-WP-00-200 (Pro Edition)',
      'LRP-WP-00-300 (Ultra Edition)'
    ],
    specs: [
      '660 nm + 850 nm Primary Wavelengths',
      'Dual Chip LED Type',
      'Alloy Sandblasted Black Housing',
      '30° Focused Lens Angle',
      'Touch Controller Panel'
    ],
    benefits: [
      { title: 'Skin Rejuvenation', description: 'Stimulates collagen to reduce fine lines and wrinkles.' },
      { title: 'Cellular Vitality', description: 'Boosts ATP production in mitochondria for whole-body energy.' },
      { title: 'Sleep Quality', description: 'Regulates circadian rhythm and melatonin production.' }
    ]
  }
];
