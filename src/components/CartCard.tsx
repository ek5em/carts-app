import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { Cart } from '../api/carts/cart.types';
import {
  Card,
  IdBadge,
  InfoGroup,
  Label,
  TotalValue,
  Value,
  ViewButton,
} from './CartCard.styles';


interface CartCardProps {
  cart: Cart;
}

const CartCard: React.FC<CartCardProps> = (props) => {
  const navigate = useNavigate();
  const {
    cart: {
      id,
      userId,
      totalProducts,
      discountedTotal,
    },
  } = props;

  return (
    <Card>
      <IdBadge>#{id}</IdBadge>
      <InfoGroup>
        <Label>User ID</Label>
        <Value>{userId}</Value>
      </InfoGroup>
      <InfoGroup>
        <Label>Products</Label>
        <Value>{totalProducts}</Value>
      </InfoGroup>
      <InfoGroup>
        <Label>Total</Label>
        <TotalValue>${discountedTotal.toFixed(2)}</TotalValue>
      </InfoGroup>
      <ViewButton onClick={() => navigate(`/carts/${id}`)}>
        View Details
      </ViewButton>
    </Card>
  );
};

export default CartCard;
