export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  isNew?: boolean;
}