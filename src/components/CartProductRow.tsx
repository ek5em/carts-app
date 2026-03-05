import React from 'react';
import type { CartProduct } from '../api/carts';
import {
  DeleteButton,
  PriceCell,
  ProductName,
  QtyButton,
  QtyInput,
  QuantityWrapper,
  Row,
  Thumbnail,
  TotalCell,
} from './CartProductRow.styles';


interface CartProductRowProps {
  product: CartProduct;
  onQuantityChange: (productId: number, quantity: number) => void;
  onDelete: (productId: number) => void;
  disabled?: boolean;
}

const CloseIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="1" y1="1" x2="11" y2="11" />
    <line x1="11" y1="1" x2="1" y2="11" />
  </svg>
);

const CartProductRow: React.FC<CartProductRowProps> = (props) => {
  const {
    product,
    onQuantityChange,
    onDelete,
    disabled,
  } = props;
  const {
    id,
    title,
    price,
    quantity,
    thumbnail,
  } = product;

  const computedTotal = (price * quantity).toFixed(2);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value) && value >= 1) {
      onQuantityChange(id, value);
    }
  };

  return (
    <Row>
      <Thumbnail src={thumbnail} alt={title} loading="lazy" />
      <ProductName>{title}</ProductName>
      <PriceCell>${price.toFixed(2)}</PriceCell>
      <QuantityWrapper>
        <QtyButton
          onClick={() => onQuantityChange(id, quantity - 1)}
          disabled={disabled || quantity <= 1}
        >
          −
        </QtyButton>
        <QtyInput
          type="number"
          value={quantity}
          min={1}
          onChange={handleInputChange}
          disabled={disabled}
        />
        <QtyButton
          onClick={() => onQuantityChange(id, quantity + 1)}
          disabled={disabled}
        >
          +
        </QtyButton>
      </QuantityWrapper>
      <TotalCell>${computedTotal}</TotalCell>
      <DeleteButton
        onClick={() => onDelete(id)}
        disabled={disabled}
        title="Remove product"
      >
        <CloseIcon />
      </DeleteButton>
    </Row>
  );
};

export default CartProductRow;
