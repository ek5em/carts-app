import React, { useEffect, useState } from 'react';
import CartCard from '../components/CartCard';
import Spinner from '../components/ui/Spinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import Pagination from '../components/ui/Pagination';
import { useCartsQuery } from '../hooks/useCartsQuery';
import useDebounce from '../hooks/useDebounce';
import { useCartsStore } from '../store/cartsStore';
import {
  CartList,
  ControlLabel,
  Controls,
  EmptyState,
  FetchingOverlay,
  FilterInput,
  Header,
  LimitSelect,
  MetaText,
  PageWrapper,
  Subtitle,
  Title,
} from './CartsPage.styles';


const LIMIT_OPTIONS = [5, 10, 20];

const CartsPage: React.FC = () => {
  const {
    page,
    limit,
    userIdFilter,
    setPage,
    setLimit,
    setUserIdFilter,
  } = useCartsStore();

  const [userIdInput, setUserIdInput] = useState(userIdFilter);
  const debouncedUserId = useDebounce(userIdInput, 400);

  useEffect(() => {
    setUserIdFilter(debouncedUserId);
  }, [debouncedUserId, setUserIdFilter]);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useCartsQuery();

  const allCarts = data?.carts ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);
  const isPaginationVisible = !userIdFilter;

  const filteredCarts = userIdFilter
    ? allCarts.filter(({ userId }) => String(userId) === userIdFilter.trim())
    : allCarts;

  const renderLoadingState = () => <Spinner />;

  const renderErrorState = (err: unknown) => (
    <ErrorMessage
      message={err instanceof Error ? err.message : 'Failed to load carts'}
      onRetry={() => refetch()}
    />
  );

  const renderMetaText = () => {
    if (!data) return null;

    const hasFilterMatch = userIdFilter && filteredCarts.length !== allCarts.length;

    return (
      <MetaText>
        Showing {allCarts.length} of {total} carts
        {hasFilterMatch && <> · {filteredCarts.length} match filter</>}
      </MetaText>
    );
  };

  const renderCartList = () => {
    const emptyMessage = userIdFilter
      ? `No carts found for user ID "${userIdFilter}"`
      : 'No carts available';

    return (
      <FetchingOverlay isTransparent={isFetching && !isLoading}>
        <CartList>
          {filteredCarts.length > 0
            ? filteredCarts.map((cart) => <CartCard key={cart.id} cart={cart} />)
            : <EmptyState>{emptyMessage}</EmptyState>}
        </CartList>
      </FetchingOverlay>
    );
  };

  const renderPagination = () => (
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  );

  const renderContent = () => (
    <>
      {renderMetaText()}
      {renderCartList()}
      {isPaginationVisible && renderPagination()}
    </>
  );

  return (
    <PageWrapper>
      <Header>
        <Title>Shopping Carts</Title>
        <Subtitle>Browse and manage user carts</Subtitle>
      </Header>
      <Controls>
        <FilterInput
          type="text"
          placeholder="Filter by User ID"
          value={userIdInput}
          onChange={(event) => setUserIdInput(event.target.value)}
        />
        <ControlLabel>
          Per page:
          <LimitSelect
            value={limit}
            onChange={(event) => setLimit(Number(event.target.value))}
          >
            {LIMIT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </LimitSelect>
        </ControlLabel>
      </Controls>
      {isLoading && renderLoadingState()}
      {isError && renderErrorState(error)}
      {!isLoading && !isError && renderContent()}
    </PageWrapper>
  );
};

export default CartsPage;
