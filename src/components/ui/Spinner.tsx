import React from 'react';
import { SpinnerCircle, SpinnerWrapper } from './Spinner.styles';


interface SpinnerProps {
  size?: number;
  centered?: boolean;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  const {
    size = 40,
    centered = true,
  } = props;

  if (centered) {
    return (
      <SpinnerWrapper>
        <SpinnerCircle size={size} />
      </SpinnerWrapper>
    );
  }

  return <SpinnerCircle size={size} />;
};

export default Spinner;
