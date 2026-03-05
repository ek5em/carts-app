import styled from '@emotion/styled';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px 24px;
  text-align: center;
`;

export const IconWrapper = styled.div`
  color: #f59e0b;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 14px;
  color: #64748b;
  max-width: 400px;
`;

export const RetryButton = styled.button`
  padding: 8px 20px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #4f46e5;
  }
`;
