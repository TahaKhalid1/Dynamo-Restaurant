export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  isVegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}