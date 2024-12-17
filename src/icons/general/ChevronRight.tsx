import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function ChevronRight({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m9 18 6-6-6-6"
      />
    </Svg>
  );
}
export default ChevronRight;
