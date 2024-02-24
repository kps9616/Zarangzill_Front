// CustomTabBarBackground.tsx
import React from 'react';
import Svg, { Path } from "react-native-svg";

const CustomTabBarBackground = () => {
    return (
        <Svg height="60" width="100%" viewBox="0 0 800 60">
            <Path d="M580,15.37v-0.07H427.53v0.07v6.98c0,14.66-12,26.66-26.66,26.66h-1.55c-14.66,0-26.66-12-26.66-26.66v-6.98v-0.07H220v0.07H0v44h220h360h220v-44H580z" fill="#000" />
            <Path d="M400,44.55c12.3,0,22.27-9.97,22.27-22.27c0-2.41-0.39-4.73-1.1-6.91C418.27,6.45,409.89,0,400,0s-18.27,6.45-21.18,15.37c-0.71,2.18-1.1,4.5-1.1,6.91C377.73,34.58,387.7,44.55,400,44.55z" fill="#000" />
        </Svg>
    );
};

export default CustomTabBarBackground;
