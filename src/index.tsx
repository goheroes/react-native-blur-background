import React,{FC} from 'react';
import { Dimensions, } from 'react-native';
import {Canvas, } from '@shopify/react-native-skia'
import CustomOval from './CustomOval';
const screen= Dimensions.get('window')
type Props = {
  width?: number;
  height?: number;
};

const BlurBackground: FC<Props> = ({ width, height }): JSX.Element => {
    const w = width ?? screen.width;
    const h = height ?? screen.height;

    const rR1 = Math.random() * (w-w/2)+w;
const xR1 =  Math.random() * (w/2);
    const yR1 = Math.random() * h/2;
    
    const rR2 = Math.random() * (w-w/2)+w;
    const xR2 =  Math.random() * w/2;
    const yR2 = Math.random() * h/2;
    
  const rR3 = Math.random() * (w-w/2)+w;
    const xR3 =  Math.random() * w/2;
  const yR3 =  Math.random() * h/2;
    return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor:'#121212',
      }}>
{/* group first row */}
      <CustomOval
        r={rR1}
        x={xR1}
        y={yR1}
        color={'#005B6C'}
        opacity={1}
        blur={100}
      />
            <CustomOval
          r={rR1}
        x={xR1}
        y={yR1}
                color={'#FCAF3C'}
                opacity={1}
                blur={70} />
            
{/* group second row */}
      <CustomOval
        r={rR2}
        x={xR2}
        y={yR2}
        color={'#001845'}
        opacity={1}
        blur={100}
      />
      <CustomOval
        r={rR2}
        x={xR2}
        y={yR2}
        color={'#000'}
        opacity={1}
        blur={70}
            />
            {/* group third row */}
            <CustomOval
       r={rR3}
        x={xR3}
        y={yR3}
        color={'#62011f'}
        opacity={1}
        blur={100}
      />
      <CustomOval
         r={rR3}
        x={xR3}
        y={yR3}
        color={'#000'}
        opacity={1}
        blur={70}
      />
    </Canvas>
  );
};
export default BlurBackground;
