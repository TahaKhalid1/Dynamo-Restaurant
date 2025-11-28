import { MenuCategory, Review, FaqItem } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'raw-bar',
    title: 'Raw Bar',
    items: [
      { name: 'Shrimp Cocktail', description: 'Old Bay Mayo', price: '$28.95' },
      { name: 'Oysters On The Half Shell', description: 'Chef’s Selection', price: 'Market Price' },
      { name: 'Chilled Deviled Lobster', description: '', price: '$62.95' },
      { name: 'Ocean Plateau for Two', description: 'Oysters, shrimp, clams, lobster', price: '$89.95' },
      { name: 'Grand Plateau for Four', description: 'The ultimate seafood tower', price: '$148.95' },
    ]
  },
  {
    id: 'appetizers',
    title: 'Appetizers',
    items: [
      { name: 'Parker House Rolls', description: 'Salted Butter', price: '$8.95' },
      { name: 'Clam & Leek Toast', description: '', price: '$15.95' },
      { name: 'Waldorf Salad', description: 'Classic preparation', price: '$19.95' },
      { name: 'Steak Tartare', description: 'With Salt & Vinegar Chips', price: '$24.95' },
      { name: 'Jumbo Lump Crab Cake', description: 'Tartare Sauce', price: '$27.95' },
      { name: 'Bigeye Tuna Tartare', description: 'Peppers, Capers, Olives', price: '$26.95' },
      { name: 'Oysters Meuniere', description: 'Warm butter sauce', price: '$27.95' },
      { name: 'BBQ Bone Marrow', description: '', price: '$21.95' },
      { name: 'Smoked Cheddar Soufflé', description: '', price: '$22.95' },
      { name: 'Honeynut Squash Ravioli', description: 'Brown Butter, Chanterelles, Hazelnuts', price: '$26.95' },
      { name: 'Spaghetti Vongole', description: 'Clams, white wine, garlic', price: '$34.95' },
    ]
  },
  {
    id: 'salads',
    title: 'Salads',
    items: [
      { name: 'Caesar Salad', description: 'Add: Chicken +$7, Salmon +$10, Steak +$12', price: '$21.95' },
      { name: 'Cobb Salad', description: 'Chicken, Bacon, Egg, Tomato, Blue Cheese, Avocado', price: '$26.95' },
      { name: 'Mediterranean Chopped Salad', description: 'With grilled chicken', price: '$25.95' },
      { name: 'Steak Salad', description: 'Hanger Steak, Roquefort, Pecans, Raspberry Vinaigrette', price: '$29.95' },
    ]
  },
  {
    id: 'entrees',
    title: 'Main Entrees',
    items: [
      { name: 'Dynamo Burger', description: 'Dry-aged beef, sharp cheddar, grilled onions, special sauce, beef-fat fries. "Drenched" +$3', price: '$30.95' },
      { name: 'Chicken Kiev', description: 'Garlic butter–filled, crispy chicken breast, classic mash', price: '$34.95' },
      { name: 'Pork Tomahawk', description: 'With spiced pork jus', price: '$49.95' },
      { name: 'Faroe Island Salmon', description: 'Swiss Chard, Red Wine Bordelaise', price: '$38.95' },
      { name: 'Swordfish', description: 'Red Sonora Beans and Saffron Butter', price: '$41.95' },
      { name: 'Maitake Mushroom Steak', description: 'Mushroom Bordelaise (Vegetarian)', price: '$28.95', isVegetarian: true },
    ]
  },
  {
    id: 'steaks',
    title: 'Steaks & Chops',
    items: [
      { name: 'Hanger Steak', description: 'Butcher’s cut', price: '$42.95' },
      { name: 'Filet Mignon', description: 'With Onion Rings & BBQ Beurre Blanc', price: '$62.95' },
      { name: 'NY Strip Steak', description: '10 oz Angus', price: '$59.95' },
      { name: '30-Day Dry-Aged Bone-in NY Strip', description: '14 oz', price: '$84.95' },
      { name: 'Shawn’s Deckle Cut', description: '8 oz', price: '$95.95' },
      { name: 'Margaret River Wagyu NY Strip', description: '8 oz', price: '$145.95' },
      { name: '50-Day Dry-Aged Ribeye', description: 'Cowboy Cut', price: '$195.95' },
    ]
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      { name: 'Beef Fat Fries', description: 'Hand cut', price: '$14.95' },
      { name: 'Onion Rings', description: '', price: '$13.95' },
      { name: 'Classic Potato Mash', description: '', price: '$13.95' },
      { name: 'Mac & Cheese', description: '', price: '$15.95' },
      { name: 'Creamed Greens', description: '', price: '$14.95' },
      { name: 'Steamed Broccoli', description: '', price: '$13.95' },
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'New York Style Cheesecake', description: 'Classic recipe', price: '$14.95' },
      { name: 'Triple Chocolate Layer Cake', description: 'Decadent chocolate ganache', price: '$14.95' },
      { name: 'Carrot Cake', description: 'Cream cheese frosting', price: '$14.95' },
      { name: 'Chocolate Tart & Caviar', description: 'Sweet and savory indulgence', price: '$34.95' },
      { name: 'Apple Crumb Cake', description: '', price: '$14.95' },
      { name: 'Hot Chocolate for Two', description: 'Marshmallows & fresh whipped cream', price: '$16.95' },
    ]
  },
  {
    id: 'drinks',
    title: 'Cocktails & Drinks',
    items: [
      { name: 'Classic Gibson', description: 'Gin or Vodka, pickled onion', price: '$22.95' },
      { name: 'Saturn', description: 'House specialty gin cocktail', price: '$19.95' },
      { name: 'Infinity and Beyond', description: 'Tequila, Mezcal, citrus', price: '$21.95' },
      { name: 'Sunspot Negroni', description: 'A bright twist on the classic', price: '$20.95' },
      { name: 'Space Oddity', description: 'Bourbon, amaro, smoke', price: '$22.95' },
      { name: 'Island Negroni', description: 'Spirit-Free', price: '$13.95' },
      { name: 'Five Boroughs Pilsner', description: 'Local Draft', price: '$9.95' },
    ]
  }
];

export const REVIEWS_DATA: Review[] = [
  { id: 1, name: "Sarah J.", text: "The atmosphere is incredible. Dark, moody, perfect for a date night. The oysters were fresh and the Filet Mignon was melted in my mouth.", rating: 5, date: "October 2023" },
  { id: 2, name: "Michael T.", text: "Great spot before a game at MSG. Service was quick and the Dynamo Burger is honestly one of the best in the city.", rating: 5, date: "September 2023" },
  { id: 3, name: "Elena R.", text: "A bit pricey, but worth it for the 'Grand Plateau'. The cocktails are works of art.", rating: 4, date: "August 2023" },
  { id: 4, name: "David K.", text: "Service was a little slow at first but the manager made up for it. The dry-aged ribeye is to die for.", rating: 4, date: "November 2023" },
];

export const FAQS_DATA: FaqItem[] = [
  { question: "Do you have a dress code?", answer: "We recommend business casual. While we don't require jackets, we ask that guests avoid athletic wear and flip-flops to maintain our dining room's atmosphere." },
  { question: "Are you wheelchair accessible?", answer: "Yes, our main entrance at 2 Pennsylvania Plaza is fully accessible. Please let us know if you need specific table arrangements." },
  { question: "Do you accept reservations?", answer: "Yes, we highly recommend reservations, especially on event nights at Madison Square Garden. You can book directly through our website via Resy." },
  { question: "Is parking available?", answer: "We do not have a private lot, but there are several parking garages located on 33rd and 34th streets nearby." },
  { question: "Can I bring my own wine?", answer: "We have an extensive wine list curated by our sommelier. If you wish to bring a special bottle, our corkage fee is $50 per bottle (max 2 bottles)." }
];

export const CONTACT_INFO = {
  address: "2 Pennsylvania Plaza, Floor 1, New York, NY 10121",
  phone: "+1 203-297-9477",
  email: "reservations@thedynamoroom.com"
};