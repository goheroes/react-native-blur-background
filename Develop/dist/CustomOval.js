import React from 'react';
import { Oval, Blur } from '@shopify/react-native-skia';
var CustomOval = function (_a) {
    var x = _a.x, y = _a.y, r = _a.r, color = _a.color, opacity = _a.opacity, blur = _a.blur;
    return (<Oval x={x} y={y} width={r} height={r} color={color} opacity={opacity}>
      <Blur blur={blur}/>
    </Oval>);
};
export default CustomOval;
//# sourceMappingURL=CustomOval.js.map