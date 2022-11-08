import React from 'react';
import { Dimensions, } from 'react-native';
import { Canvas, } from '@shopify/react-native-skia';
import CustomOval from './CustomOval';
var screen = Dimensions.get('window');
var BlurBackground = function (_a) {
    var width = _a.width, height = _a.height;
    var w = width !== null && width !== void 0 ? width : screen.width;
    var h = height !== null && height !== void 0 ? height : screen.height;
    var rR1 = Math.random() * (w - w / 2) + w;
    var xR1 = Math.random() * (w / 2);
    var yR1 = Math.random() * h / 2;
    var rR2 = Math.random() * (w - w / 2) + w;
    var xR2 = Math.random() * w / 2;
    var yR2 = Math.random() * h / 2;
    var rR3 = Math.random() * (w - w / 2) + w;
    var xR3 = Math.random() * w / 2;
    var yR3 = Math.random() * h / 2;
    return (<Canvas style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#121212',
    }}>
    
      <CustomOval r={rR1} x={xR1} y={yR1} color={'#005B6C'} opacity={1} blur={100}/>
            <CustomOval r={rR1} x={xR1} y={yR1} color={'#FCAF3C'} opacity={1} blur={70}/>
            
    
      <CustomOval r={rR2} x={xR2} y={yR2} color={'#001845'} opacity={1} blur={100}/>
      <CustomOval r={rR2} x={xR2} y={yR2} color={'#000'} opacity={1} blur={70}/>
            
            <CustomOval r={rR3} x={xR3} y={yR3} color={'#62011f'} opacity={1} blur={100}/>
      <CustomOval r={rR3} x={xR3} y={yR3} color={'#000'} opacity={1} blur={70}/>
    </Canvas>);
};
export default BlurBackground;
//# sourceMappingURL=index.js.map