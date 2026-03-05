import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type UpdateCartPayload, updateCart } from '../api/carts';
import { CART_QUERY_KEY } from './useCartQuery';
import { CARTS_QUERY_KEY } from './useCartsQuery';


export const useUpdateCart = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateCartPayload) => updateCart(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEY, id] });
      queryClient.invalidateQueries({ queryKey: [CARTS_QUERY_KEY] });
    },
  });
};
