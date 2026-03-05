import styled from '@emotion/styled';


export const PageWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

export const CardHeader = styled.div`
  padding: 24px 28px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CartTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
`;

export const MetaBadges = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Badge = styled.div`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  background: #eef2ff;
  color: #6366f1;
`;

export const ProductsSection = styled.div`
  padding: 8px 28px;
`;

export const SectionTitle = styled.h3`
  margin: 20px 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.07em;
`;

export const EmptyProducts = styled.div`
  padding: 32px 0;
  text-align: center;
  color: #94a3b8;
  font-size: 14px;
`;

export const CardFooter = styled.div`
  padding: 20px 28px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  background: #fafafa;
`;

export const TotalWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const TotalLabel = styled.span`
  font-size: 15px;
  color: #64748b;
`;

export const TotalAmount = styled.span`
  font-size: 26px;
  font-weight: 800;
  color: #059669;
`;

export const OriginalTotal = styled.span`
  font-size: 14px;
  color: #94a3b8;
  text-decoration: line-through;
`;

export const ActionBar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SaveButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isLoading',
})<{ isLoading?: boolean }>`
  padding: 10px 22px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
  opacity: ${({ isLoading }) => (isLoading ? 0.7 : 1)};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #4f46e5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ResetButton = styled.button`
  padding: 10px 18px;
  background: #fff;
  color: #64748b;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`;

export const ErrorBanner = styled.div`
  margin: 0 28px 16px;
  padding: 12px 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  font-size: 13px;
  color: #dc2626;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SuccessBanner = styled.div`
  margin: 0 28px 16px;
  padding: 12px 16px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 13px;
  color: #16a34a;
  display: flex;
  align-items: center;
  gap: 8px;
`;
