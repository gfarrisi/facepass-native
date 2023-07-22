import { View } from 'react-native';

interface SpaceProps {
  size?: number;
  h?: number;
  w?: number;
}

function Space(props: SpaceProps) {
  const { size, h, w } = props;
  return (
    <View
      style={{
        height: 8 * (h || size || 1),
        width: 8 * (w || size || 1),
      }}
    />
  );
}
export default Space;
