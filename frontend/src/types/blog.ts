import { ReactNode } from "react";

export interface Blog {
  slug: string;
  id: number;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  category: string;
  image?: string;
  published_at: string
}