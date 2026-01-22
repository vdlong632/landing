import { ReactNode } from "react";

export interface Product {
  [x: string]: ReactNode;
  id: number;
  name: string;
  category: string;
  material: string;
  image?: string | string[];
  price: number;
  oldPrice?: number;
  discount?: number;
  isNew?: boolean;
}