import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/carts/carts';


export const CART_QUERY_KEY = 'cart';

const CART_STALE_TIME = 5 * 60 * 1000;

export const useCartQuery = (id: number) => {
  return useQuery({
    queryKey: [CART_QUERY_KEY, id],
    queryFn: () => getCart(id),
    staleTime: CART_STALE_TIME,
    enabled: !!id,
  });
};
