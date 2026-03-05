import React from 'react';
import {
  IconWrapper,
  Message,
  RetryButton,
  Title,
  Wrapper,
} from './ErrorMessage.styles';


interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

type RenderRetryButton = (onRetry: () => void) => React.JSX.Element;

const WarningIcon: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const renderRetryButton: RenderRetryButton = (onRetry) => (
  <RetryButton onClick={onRetry}>Try again</RetryButton>
);

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const {
    message = 'Something went wrong',
    onRetry,
  } = props;

  return (
    <Wrapper>
      <IconWrapper>
        <WarningIcon />
      </IconWrapper>
      <Title>Error</Title>
      <Message>{message}</Message>
      {onRetry && renderRetryButton(onRetry)}
    </Wrapper>
  );
};

export default ErrorMessage;
