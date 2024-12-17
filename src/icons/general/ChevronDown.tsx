import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';

export function ChevronDown({
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
      viewBox="0 0 12 8"
      fill="none"
    >
      <Path
        d="M1 1.5L6 6.5L11 1.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChevronDown;
