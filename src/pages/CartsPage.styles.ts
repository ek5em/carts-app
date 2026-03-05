import styled from '@emotion/styled';


export const PageWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const Header = styled.div`
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  margin: 0 0 4px 0;
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #64748b;
`;

export const Controls = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  padding: 8px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #1e293b;
  background: #fff;
  width: 180px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

export const LimitSelect = styled.select`
  padding: 8px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #1e293b;
  background: #fff;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    border-color: #6366f1;
  }
`;

export const ControlLabel = styled.label`
  font-size: 13px;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MetaText = styled.div`
  font-size: 13px;
  color: #94a3b8;
  margin-bottom: 12px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  color: #64748b;
  font-size: 15px;
`;

export const FetchingOverlay = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isTransparent',
})<{ isTransparent: boolean }>`
  opacity: ${({ isTransparent }) => (isTransparent ? 0.5 : 1)};
  transition: opacity 0.2s;
`;
