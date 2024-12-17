import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function SwitchHorizontal({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SwitchHorizontal;
