import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function Close({
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
        d="M18 6 6 18M6 6l12 12"
      />
    </Svg>
  );
}
export default Close;
