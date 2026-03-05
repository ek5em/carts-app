import React from 'react';
import {
  EllipsisCell,
  PageButton,
  PaginationWrapper,
} from './Pagination.styles';


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

type RenderPageItem = (page: number | '...', index: number) => React.JSX.Element;

const getPageNumbers = (current: number, total: number): (number | '...')[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const pages: (number | '...')[] = [1];

  if (current > 3) pages.push('...');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push('...');

  pages.push(total);

  return pages;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    currentPage,
    totalPages,
    onPageChange,
  } = props;

  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  const renderPageItem: RenderPageItem = (page, index) => {
    if (page === '...') {
      return <EllipsisCell key={`ellipsis-${index}`}>…</EllipsisCell>;
    }

    return (
      <PageButton
        key={page}
        active={page === currentPage}
        onClick={() => page !== currentPage && onPageChange(page)}
      >
        {page}
      </PageButton>
    );
  };

  return (
    <PaginationWrapper>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹ Prev
      </PageButton>
      {pages.map((page, index) => renderPageItem(page, index))}
      <PageButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next ›
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
