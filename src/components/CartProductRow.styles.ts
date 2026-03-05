import styled from '@emotion/styled';


export const Row = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr auto auto auto auto;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    grid-template-columns: 56px 1fr;
    grid-template-rows: auto auto;
  }
`;

export const Thumbnail = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  flex-shrink: 0;
`;

export const ProductName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
  line-height: 1.4;
`;

export const PriceCell = styled.span`
  font-size: 14px;
  color: #64748b;
  white-space: nowrap;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const QtyButton = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: #f8fafc;
  color: #374151;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s, border-color 0.15s;
  line-height: 1;

  &:hover:not(:disabled) {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const QtyInput = styled.input`
  width: 44px;
  text-align: center;
  padding: 4px 6px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #6366f1;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const TotalCell = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #059669;
  white-space: nowrap;
  min-width: 72px;
  text-align: right;
`;

export const DeleteButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #fecaca;
  border-radius: 8px;
  background: #fef2f2;
  color: #ef4444;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: #fee2e2;
    border-color: #ef4444;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
