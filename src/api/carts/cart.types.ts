export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface Cart {
  id: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface CartsResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

interface Product {
  id: number;
  quantity: number;
}

export interface UpdateCartPayload {
  merge: boolean;
  products: Product[];
}

export interface GetCartsParams {
  limit: number;
  skip: number;
}

export type GetCarts = (params: GetCartsParams) => Promise<CartsResponse>;

export type GetCart = (id: number) => Promise<Cart>;

export type UpdateCart = (id: number, payload: UpdateCartPayload) => Promise<Cart>;
