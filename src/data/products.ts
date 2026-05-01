export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  occasion: string[];
  color: string;
  description: string;
  bestseller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Blushing Romance Bouquet',
    price: 'From KES 300',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&h=750&fit=crop&q=80',
    category: 'roses',
    occasion: ['anniversary', 'birthday', 'just-because'],
    color: 'pink',
    description: 'A dreamy arrangement of soft pink roses, peonies, and delicate baby\'s breath.',
    bestseller: true,
  },
  {
    id: '2',
    name: 'Golden Hour Arrangement',
    price: 'From KES 300',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44f45a?w=600&h=750&fit=crop&q=80',
    category: 'mixed',
    occasion: ['corporate', 'birthday'],
    color: 'yellow',
    description: 'Warm golden roses and sunflowers that radiate joy and celebration.',
    bestseller: true,
  },
  {
    id: '3',
    name: 'Pure Elegance Whites',
    price: 'From KES 300',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=750&fit=crop&q=80',
    category: 'lilies',
    occasion: ['wedding', 'sympathy', 'corporate'],
    color: 'white',
    description: 'Pristine white lilies and roses for moments that call for grace and serenity.',
    bestseller: true,
  },
  {
    id: '4',
    name: 'Passionate Reds',
    price: 'From KES 300',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=750&fit=crop&q=80',
    category: 'roses',
    occasion: ['anniversary', 'just-because'],
    color: 'red',
    description: 'Classic deep red roses — timeless, bold, and unforgettable.',
    bestseller: true,
  },
  {
    id: '5',
    name: 'Lavender Dreams',
    price: 'From KES 300',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=750&fit=crop&q=80',
    category: 'mixed',
    occasion: ['birthday', 'just-because'],
    color: 'purple',
    description: 'Soft lavender roses and purple lisianthus in a calming, elegant bouquet.',
  },
  {
    id: '6',
    name: 'Sunshine Celebration',
    price: 'From KES 300',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44f45a?w=600&h=750&fit=crop&q=80',
    category: 'sunflowers',
    occasion: ['birthday', 'corporate', 'just-because'],
    color: 'yellow',
    description: 'Bright sunflowers paired with cheerful daisies for the happiest of days.',
  },
  {
    id: '7',
    name: 'Sympathy & Peace',
    price: 'From KES 300',
    image: 'https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?w=600&h=750&fit=crop&q=80',
    category: 'lilies',
    occasion: ['sympathy'],
    color: 'white',
    description: 'A graceful tribute arrangement with white lilies and soft greenery.',
  },
  {
    id: '8',
    name: 'Wedding Bliss Bundle',
    price: 'From KES 300',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600&h=750&fit=crop&q=80',
    category: 'roses',
    occasion: ['wedding'],
    color: 'pink',
    description: 'A luxurious bridal bouquet of blush roses, peonies, and trailing eucalyptus.',
  },
];

export const occasions = [
  { id: 'birthday', name: 'Birthday', icon: '🎂', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&h=400&fit=crop&q=80' },
  { id: 'anniversary', name: 'Anniversary', icon: '💕', image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop&q=80' },
  { id: 'sympathy', name: 'Sympathy', icon: '🕊️', image: 'https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?w=400&h=400&fit=crop&q=80' },
  { id: 'wedding', name: 'Wedding', icon: '💒', image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&h=400&fit=crop&q=80' },
  { id: 'corporate', name: 'Corporate', icon: '🏢', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop&q=80' },
  { id: 'just-because', name: 'Just Because', icon: '💐', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44f45a?w=400&h=400&fit=crop&q=80' },
];

export const testimonials = [
  {
    id: '1',
    name: 'Amina K.',
    text: 'Maua Corner made my wedding absolutely magical. The flowers were breathtaking and the team was so attentive to every detail.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Brian O.',
    text: 'I ordered a surprise birthday bouquet for my wife and she couldn\'t stop smiling. Beautiful arrangement, delivered on time!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Grace M.',
    text: 'The quality and freshness of their flowers is unmatched in Eldoret. My go-to shop for every occasion now.',
    rating: 5,
  },
];
