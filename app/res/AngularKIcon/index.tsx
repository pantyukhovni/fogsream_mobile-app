import React from 'react'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const AngularIcon = () => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <G clipPath="url(#clip0_1684_1300)">
      <Path
        d="M12.4708 0L0.833252 4.15L2.60825 19.5375L12.4708 25L22.3333 19.5375L24.1083 4.15L12.4708 0Z"
        fill="#DD0031"
      />
      <Path
        d="M12.4707 0V2.775V2.7625V15.425V25L22.3332 19.5375L24.1082 4.15L12.4707 0Z"
        fill="#C3002F"
      />
      <Path
        d="M12.4708 2.76248L5.1958 19.075H7.9083L9.3708 15.425H15.5458L17.0083 19.075H19.7208L12.4708 2.76248ZM14.5958 13.175H10.3458L12.4708 8.06248L14.5958 13.175Z"
        fill="white"
      />
      </G>
      <Defs>
      <ClipPath id="clip0_1684_1300">
        <Rect width="25" height="25" fill="white"/>
      </ClipPath>
      </Defs>
    </Svg>
  );
};

export default AngularIcon;