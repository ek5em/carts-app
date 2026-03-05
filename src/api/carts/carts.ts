import apiClient from '../apiClient';
import type {
  Cart,
  CartsResponse,
  GetCarts,
  GetCart,
  UpdateCart,
} from './cart.types';


export const getCarts: GetCarts = async (params) => {
  const { data } = await apiClient.get<CartsResponse>('/carts', { params });

  return data;
};

export const getCart: GetCart = async (id) => {
  const { data } = await apiClient.get<Cart>(`/carts/${id}`);

  return data;
};

export const updateCart: UpdateCart = async (id, payload) => {
  const { data } = await apiClient.put<Cart>(`/carts/${id}`, payload);

  return data;
};
