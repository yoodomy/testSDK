import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';

export function FilePlus({
  width = 30,
  height = 31,
  color = '#0064DC',
  fill = '#001870',
  strokeWidth = 2,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
    >
      <Path
        d="M25 13.6953V9.07031C25 6.97012 25 5.92002 24.5913 5.11785C24.2317 4.41224 23.6581 3.83856 22.9525 3.47904C22.1503 3.07031 21.1002 3.07031 19 3.07031H11C8.8998 3.07031 7.8497 3.07031 7.04754 3.47904C6.34193 3.83856 5.76825 4.41224 5.40873 5.11785C5 5.92002 5 6.97012 5 9.07031V22.0703C5 24.1705 5 25.2206 5.40873 26.0228C5.76825 26.7284 6.34193 27.3021 7.04754 27.6616C7.8497 28.0703 8.8998 28.0703 11 28.0703H15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 14.3203H10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 19.3203H10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 9.32031H10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.5 26.8203V19.3203"
        stroke="#001870"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.75 23.0703H26.25"
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default FilePlus;
