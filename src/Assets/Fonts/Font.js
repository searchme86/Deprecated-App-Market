import { createGlobalStyle } from 'styled-components';

import NotoSansBlack from './NotoSansKR-Black.otf';
import NotoSansBold from './NotoSansKR-Bold.otf';
import NotoSansLight from './NotoSansKR-Light.otf';
import NotoSansMedium from './NotoSansKR-Medium.otf';
import NotoSansRegular from './NotoSansKR-Regular.otf';
import NotoSansThin from './NotoSansKR-Thin.otf';
import RobotoBlack from './Roboto-Black.ttf';
import RobotoBlackItalic from './Roboto-BlackItalic.ttf';
import RobotoBold from './Roboto-Bold.ttf';
import RobotoBoldItalic from './Roboto-BoldItalic.ttf';
import RobotoItalic from './Roboto-Italic.ttf';
import RobotoLightItalic from './Roboto-LightItalic.ttf';
import RobotoMedium from './Roboto-Medium.ttf';
import RobotoMediumItalic from './Roboto-MediumItalic.ttf';
import RobotoRegular from './Roboto-Regular.ttf';
import RobotoThin from './Roboto-Thin.ttf';
import RobotoThinItalic from './Roboto-ThinItalic.ttf';

const Font = createGlobalStyle`

@font-face{
  src:url(${NotoSansBlack}) format('otf'),
      url(${NotoSansBold}) format('otf'),
      url(${NotoSansLight}) format("otf"),
      url(${NotoSansMedium}) format('otf'),
      url(${NotoSansRegular}) format('otf'),
      url(${NotoSansThin}) format('otf'),
      url(${RobotoBlack}) format('ttf'),
      url(${RobotoBlackItalic}) format('ttf'),
      url(${RobotoBold}) format('ttf'),
      url(${RobotoBoldItalic}) format('ttf'),
      url(${RobotoItalic}) format('ttf'),
      url(${RobotoLightItalic}) format('ttf'),
      url(${RobotoMedium}) format('ttf'),
      url(${RobotoMediumItalic}) format('ttf'),
      url(${RobotoRegular}) format('ttf'),
      url(${RobotoThin}) format('ttf'),
      url(${RobotoThinItalic}) format('ttf'),
}
`;

export default Font;
