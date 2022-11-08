import React, { FC } from 'react';
import {Oval, Blur} from '@shopify/react-native-skia'
type Props = {
  x: number;
  y: number;
  r: number;
  color: string;
  opacity: number;
  blur: number;
}

const CustomOval: FC<Props> = ({ x, y, r, color, opacity, blur }) => {
  
  return (
    <Oval x={x} y={y} width={r} height={r} color={color} opacity={opacity}>
      <Blur blur={blur} />
    </Oval>
  );
    };

export default CustomOval;
