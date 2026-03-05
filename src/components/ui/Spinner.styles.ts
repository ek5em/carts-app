import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';


const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
`;

export const SpinnerCircle = styled.div<{ size?: number }>`
  width: ${({ size = 40 }) => size}px;
  height: ${({ size = 40 }) => size}px;
  border: 3px solid #e2e8f0;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;
