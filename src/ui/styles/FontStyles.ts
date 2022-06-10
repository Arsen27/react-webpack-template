import { createGlobalStyle } from 'styled-components';

import PlusJakartaSansLight from '../assets/fonts/PlusJakartaSans-Light.ttf';
import PlusJakartaSansRegular from '../assets/fonts/PlusJakartaSans-Regular.ttf';
import PlusJakartaSansMedium from '../assets/fonts/PlusJakartaSans-Medium.ttf';
import PlusJakartaSansSemiBold from '../assets/fonts/PlusJakartaSans-SemiBold.ttf';
import PlusJakartaSansBold from '../assets/fonts/PlusJakartaSans-Bold.ttf';
import PlusJakartaSansExtraBold from '../assets/fonts/PlusJakartaSans-ExtraBold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url(${PlusJakartaSansLight}) format('ttf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url(${PlusJakartaSansRegular}) format('ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url(${PlusJakartaSansMedium}) format('ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url(${PlusJakartaSansSemiBold}) format('ttf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url(${PlusJakartaSansBold}) format('ttf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url(${PlusJakartaSansExtraBold}) format('ttf');
    font-weight: 800;
  }
`;
