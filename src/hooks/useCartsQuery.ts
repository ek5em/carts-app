import { useQuery } from '@tanstack/react-query';
import { getCarts } from '../api/carts/carts';
import { useCartsStore } from '../store/cartsStore';


export const CARTS_QUERY_KEY = 'carts';

const CARTS_STALE_TIME = 5 * 60 * 1000;

export const useCartsQuery = () => {
  const { page, limit } = useCartsStore();
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: [CARTS_QUERY_KEY, { limit, skip }],
    queryFn: () => getCarts({ limit, skip }),
    placeholderData: (previous) => previous,
    staleTime: CARTS_STALE_TIME,
  });
};
