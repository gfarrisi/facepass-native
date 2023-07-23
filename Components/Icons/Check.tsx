import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CheckProps {
  size?: number;
  color?: string;
}

const Check: React.FC<CheckProps> = (props) => {
  const { size = 24, color = '#757575' } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
        fill={color}
      />
    </Svg>
  );
};

export default Check;
