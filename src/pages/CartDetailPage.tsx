import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { CartProduct } from '../api/carts';
import CartProductRow from '../components/CartProductRow';
import Spinner from '../components/ui/Spinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useCartQuery } from '../hooks/useCartQuery';
import { useUpdateCart } from '../hooks/useUpdateCart';
import {
  ActionBar,
  BackButton,
  Badge,
  Card,
  CardFooter,
  CardHeader,
  CartTitle,
  EmptyProducts,
  ErrorBanner,
  MetaBadges,
  OriginalTotal,
  PageWrapper,
  ProductsSection,
  ResetButton,
  SaveButton,
  SectionTitle,
  SuccessBanner,
  TotalAmount,
  TotalLabel,
  TotalWrapper,
} from './CartDetailPage.styles';


const CheckIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="2 7 5.5 10.5 12 3" />
  </svg>
);

const AlertIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7" cy="7" r="6" />
    <line x1="7" y1="4" x2="7" y2="7.5" />
    <line x1="7" y1="10" x2="7.01" y2="10" />
  </svg>
);

const CartDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cartId = Number(id);

  const {
    data: cart,
    isLoading,
    isError,
    error,
    refetch,
  } = useCartQuery(cartId);

  const {
    mutate,
    isPending,
    isSuccess,
    isError: isMutateError,
    error: mutateError,
    reset,
  } = useUpdateCart(cartId);

  const [localProducts, setLocalProducts] = useState<CartProduct[]>([]);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (cart) {
      setLocalProducts(cart.products);
      setIsDirty(false);
    }
  }, [cart]);

  const handleQuantityChange = (productId: number, quantity: number) => {
    setLocalProducts((previous) =>
      previous.map((product) =>
        product.id === productId
          ? {
            ...product,
            quantity,
            total: product.price * quantity,
          }
          : product,
      ),
    );
    setIsDirty(true);
    reset();
  };

  const handleDelete = (productId: number) => {
    setLocalProducts((previous) => previous.filter((product) => product.id !== productId));
    setIsDirty(true);
    reset();
  };

  const handleSave = () => {
    mutate({
      merge: false,
      products: localProducts.map(({ id: productId, quantity }) => ({
        id: productId,
        quantity,
      })),
    });
    setIsDirty(false);
  };

  const handleReset = () => {
    if (cart) {
      setLocalProducts(cart.products);
      setIsDirty(false);
      reset();
    }
  };

  const localTotal = localProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const isTotalChanged = Math.abs(localTotal - (cart?.total ?? 0)) > 0.01;

  const renderErrorBanner = (err: unknown) => (
    <ErrorBanner>
      <AlertIcon />
      {err instanceof Error ? err.message : 'Failed to update cart'}
    </ErrorBanner>
  );

  const renderSuccessBanner = () => (
    <SuccessBanner>
      <CheckIcon />
      Cart updated successfully
    </SuccessBanner>
  );

  const renderResetButton = () => (
    <ResetButton onClick={handleReset} disabled={isPending}>
      Reset
    </ResetButton>
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <PageWrapper>
        <BackButton onClick={() => navigate('/')}>← Back to Carts</BackButton>
        <ErrorMessage
          message={error instanceof Error ? error.message : 'Failed to load cart'}
          onRetry={() => refetch()}
        />
      </PageWrapper>
    );
  }

  if (!cart) return null;

  const productCount = localProducts.length;

  return (
    <PageWrapper>
      <BackButton onClick={() => navigate('/')}>← Back to Carts</BackButton>
      <Card>
        <CardHeader>
          <CartTitle>Cart #{cart.id}</CartTitle>
          <MetaBadges>
            <Badge>User ID: {cart.userId}</Badge>
            <Badge>{productCount} product{productCount !== 1 ? 's' : ''}</Badge>
          </MetaBadges>
        </CardHeader>
        <ProductsSection>
          <SectionTitle>Products</SectionTitle>
          {localProducts.length > 0 ? (
            localProducts.map((product) => (
              <CartProductRow
                key={product.id}
                product={product}
                onQuantityChange={handleQuantityChange}
                onDelete={handleDelete}
                disabled={isPending}
              />
            ))
          ) : (
            <EmptyProducts>No products in this cart</EmptyProducts>
          )}
        </ProductsSection>
        {isMutateError && renderErrorBanner(mutateError)}
        {isSuccess && !isDirty && renderSuccessBanner()}
        <CardFooter>
          <TotalWrapper>
            <TotalLabel>Total:</TotalLabel>
            <TotalAmount>${localTotal.toFixed(2)}</TotalAmount>
            {isTotalChanged && <OriginalTotal>${cart.total.toFixed(2)}</OriginalTotal>}
          </TotalWrapper>
          <ActionBar>
            {isDirty && renderResetButton()}
            <SaveButton
              onClick={handleSave}
              isLoading={isPending}
              disabled={!isDirty || isPending || localProducts.length === 0}
            >
              {isPending ? 'Saving...' : 'Save Changes'}
            </SaveButton>
          </ActionBar>
        </CardFooter>
      </Card>
    </PageWrapper>
  );
};

export default CartDetailPage;
