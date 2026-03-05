import styled from '@emotion/styled';


export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 24px 0;
  flex-wrap: wrap;
`;

export const PageButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border: 1px solid ${({ active }) => (active ? '#6366f1' : '#e2e8f0')};
  border-radius: 8px;
  background: ${({ active }) => (active ? '#6366f1' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#374151')};
  font-size: 14px;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover:not(:disabled) {
    background: ${({ active }) => (active ? '#6366f1' : '#f1f5f9')};
    border-color: ${({ active }) => (active ? '#6366f1' : '#cbd5e1')};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const EllipsisCell = styled.span`
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 14px;
`;
