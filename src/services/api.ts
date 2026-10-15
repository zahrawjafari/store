import axios from "axios";
export const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
});
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  rating?: number;
  stock?: number;
  images?: string[];
}
interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export async function getProducts(): Promise<Product[]> {
  const response = await api.get<ProductsResponse>(
    "/products/category/groceries"
  );
  return response.data.products;
}
export async function getProduct(id: string): Promise<Product> {
  const response = await api.get<Product>(
    `/products/${encodeURIComponent(id)}`
  );
  return response.data;
}