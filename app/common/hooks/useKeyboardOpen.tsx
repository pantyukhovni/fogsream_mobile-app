import React, { useEffect } from 'react'
import { Keyboard } from 'react-native';
import type { KeyboardEventListener } from 'react-native';

interface OwnProps {
  keyboardWillShow: KeyboardEventListener;
}

const useKeyboardOpen = ({ keyboardWillShow }: OwnProps) => {
  useEffect(() => {
    const unscribeKeyboard = Keyboard.addListener('keyboardWillShow', keyboardWillShow);

    return () => {
      unscribeKeyboard.remove();
    }
  }, []);
};

export { useKeyboardOpen };

//
// import React, { useEffect } from 'react';
// import { Keyboard, KeyboardEventListener } from 'react-native';

// interface OwnProps {
//   keyboardWillShow: KeyboardEventListener;
// }

// const useKeyboardOpen = ({ keyboardWillShow }: OwnProps) => {
//   useEffect(() => {
//     const unscribeKeyboard = Keyboard.addListener(
//       'keyboardWillShow',
//       keyboardWillShow
//     );

//     return () => {
//       unscribeKeyboard.remove();
//     };
//   }, []);
// };

// export { useKeyboardOpen };
