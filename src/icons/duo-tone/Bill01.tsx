import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function Bill01({
  width = 30,
  height = 31,
  color = "#0064DC",
  fill = "#001870",
  strokeWidth = 2,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M25 9.32031V9.07031C25 6.97012 25 5.92002 24.5913 5.11785C24.2317 4.41224 23.6581 3.83856 22.9525 3.47904C22.1503 3.07031 21.1002 3.07031 19 3.07031H11C8.8998 3.07031 7.8497 3.07031 7.04754 3.47904C6.34193 3.83856 5.76825 4.41224 5.40873 5.11785C5 5.92002 5 6.97012 5 9.07031V22.0703C5 24.1705 5 25.2206 5.40873 26.0228C5.76825 26.7284 6.34193 27.3021 7.04754 27.6616C7.8497 28.0703 8.8998 28.0703 11 28.0703H15.625M15.625 14.3203H10M14.375 19.3203H10M20 9.32031H10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 24.3844C20 25.6235 20.9327 26.628 22.0833 26.628H24.0179C25.2506 26.628 26.25 25.5518 26.25 24.2242C26.25 22.8966 25.2506 21.8203 24.0179 21.8203H22.2321C20.9994 21.8203 20 20.7441 20 19.4165C20 18.0889 20.9994 17.0126 22.2321 17.0126H24.1667C25.3173 17.0126 26.25 18.0171 26.25 19.2562M23.125 15.5703V17.0126M23.125 26.628V28.0703"
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default Bill01;
