import React from 'react';
import { ThemeProvider as BaseProvider } from 'styled-components';

const createTheme = scale => ({
  // Scale
  scale,

  // Spacer
  spacer: 8 * scale,
  xSmallSpacer: 2 * scale,
  smallSpacer: 4 * scale,
  largeSpacer: 16 * scale,
  xlargeSpacer: 32 * scale,
  xxlargeSpacer: 48 * scale,
  xxxlargeSpacer: 64 * scale,

  // Radius
  borderRadius: 0,

  // Buttons
  buttonHeightSmall: 24 * scale,
  buttonHeight: 36 * scale,
  buttonHeightLarge: 44 * scale,
  buttonMinWidth: 136 * scale,
  buttonMinWidthSmall: 90 * scale,
  buttonFooterHeight: 88 * scale,

  // Inputs
  inputBorderRadius: 6,

  // Columns
  centeredDesktopColumnWidth: 448,

  // Colors
  background: 'rgb(8, 8, 8)',
  midground: 'rgba(255, 255, 255, 0.048)',
  foreground: 'rgb(255, 255, 255)',
  primary: 'rgb(92, 255, 16)',
  secondary: 'rgb(255, 97, 203)',
  success: 'rgb(92, 255, 16)',
  warning: 'rgb(222, 255, 26)',
  error: 'rgb(241, 96, 85)',
  linkColour: 'rgb(255, 97, 203)',
  white: 'rgb(255, 255, 255)',
  vvlgrey: 'rgb(243, 243, 243)',
  vlgrey: 'rgb(231, 231, 231)',
  lgrey: 'rgb(183, 183, 183)',
  grey: 'rgb(98, 98, 98)',
  mgrey: 'rgb(80, 80, 80)',
  dgrey: 'rgb(62, 62, 62)',
  vdgrey: 'rgb(44, 44, 44)',
  vvdgrey: 'rgb(26, 26, 26)',
  black: 'rgb(8, 8, 8)',
  darkShade: 'rgba(0, 0, 0, 0.5)',
  lightShade: 'rgba(0, 0, 0, 0.2)',

  // Shadows
  shadow: `${1 * scale}px ${2 * scale}px ${4 * scale}px rgba(0, 0, 0, 0.12)`,
  darkShadow: `0px 0px ${16 * scale}px rgba(0, 0, 0, 0.6)`,
  solidShadow: `${3 * scale}px ${3 * scale}px 0px 0px rgba(128, 128, 128, 0.5)`,
  solidShadowLight: `${3 * scale}px ${3 * scale}px 0px 0px #FFF`,
  solidShadowAttention: `${3 * scale}px ${
    3 * scale
  }px 0px 0px rgb(255, 97, 203)`,
  shadowsDarkerLonger: '1.5px 3px 6px 1.5px rgba(51, 51, 51, 0.5)',

  // icons (Avatar, icons etc...)
  iconCanvasSize: 24,

  // Top Bar
  topbarHeightDesktop: 96,
  topbarHeightMobile: 64,

  // Scrollbars
  scrollbarWidth: 8,

  // Modals
  modalMediumWidth: 1000,
  modalMediumHeight: 600,

  // Alert
  alertWidth: 500,

  // Z-Index
  zIndexFullScreenLoadingOverlay: 350,
  zIndexModal: 300,
  zIndexShading: 200,
  zIndexSideNav: 187,
  zIndexTopFade: 176,
  zIndexAppHeader: 175,
  zIndexTopNav: 150,
  zIndexFadeScreen: 75,
  zIndexLoadingOverlay: 50,

  // Typography
  headingFont: `LoreKeeper Heading`,
  headingFontSize: 17 * scale,
  headingLetterSpacing: -0.68 * scale,
  headingLineHeight: 18.7 * scale, //

  headingLargeFont: `LoreKeeper Heading`,
  headingLargeFontSize: 24 * scale,
  headingLargeLetterSpacing: -1 * scale,
  headingLargeLineHeight: 28 * scale,

  headingXLargeFont: `LoreKeeper Heading`,
  headingXLargeFontSize: 40 * scale,
  headingXLargeLetterSpacing: -1.6 * scale,
  headingXLargeLineHeight: 44 * scale,

  headingSmallFont: `LoreKeeper Heading`,
  headingSmallFontSize: 14 * scale,
  headingSmallLetterSpacing: -0.56 * scale,
  headingSmallLineHeight: 16 * scale,

  headingLabelFont: `LoreKeeper Subheading`,
  headingLabelFontSize: 13 * scale,
  headingLabelLineHeight: 14.2 * scale,
  headingLabelLetterSpacing: 1 * scale,
  headingLabelTextTransform: 'uppercase',

  headingLabelSmallFontSize: 10 * scale,
  headingLabelSmallLineHeight: 11.2 * scale,

  headingLabelLargeFontSize: 16 * scale,
  headingLabelLargeLineHeight: 18.7 * scale,

  infographicNumberFont: `LoreKeeper Infographic`,
  infographicNumberFontSize: 35 * scale,
  infographicNumberLargeFontSize: 48 * scale,
  infographicNumberLineHeight: 35 * scale,
  infographicNumberLetterSpacing: -1.4 * scale,
  infographicNumberTextTransform: 'uppercase',

  bodyTextFont: `LoreKeeper Body`,
  bodyTextFontSize: 14 * scale,
  bodyTextLineHeight: 20 * scale,

  bodyBoldFont: `LoreKeeper Body Bold`,
  bodyItalicFont: `LoreKeeper Body Italic`,

  descriptionTextFont: `LoreKeeper Body`,
  descriptionTextFontSize: 12 * scale,
  descriptionTextLineHeight: 20 * scale,

  smallTextFont: `LoreKeeper Body`,
  smallTextFontSize: 11 * scale,
  smallTextLineHeight: 12 * scale,

  buttonTextFont: `LoreKeeper Button`,
  buttonTextFontSize: 13 * scale,
  buttonTextLineHeight: 15 * scale,
  buttonTextLetterSpacing: 1 * scale,
  buttonTextTextTransform: 'uppercase',

  buttonSmallTextFont: `LoreKeeper Button`,
  buttonSmallTextFontSize: 12 * scale,
  buttonSmallTextLineHeight: 12 * scale,
  buttonSmallTextLetterSpacing: 0 * scale,
  buttonSmallTextTextTransform: 'uppercase',

  inputTextFont: `LoreKeeper Body`,
  inputTextFontSize: 16 * scale,
  inputTextLineHeight: 20 * scale,

  placeholderTextFont: `LoreKeeper Body Italic`,
  placeholderTextFontSize: 14 * scale,
  placeholderTextLineHeight: 20 * scale,
  placeholderTextFontStyle: 'normal',

  headingTitleFont: `LoreKeeper Heading`,
  headingTitleFontSize: 32 * scale,
  headingTitleLetterSpacing: -1.28 * scale,
  headingTitleLineHeight: 35.2 * scale,

  headingSubtitleFont: `LoreKeeper Subheading`,
  headingSubtitleFontSize: 24.5 * scale,
  headingSubtitleLineHeight: 35.2 * scale,
  headingSubtitleLetterSpacing: -1 * scale,
  headingSubtitleTextTransform: 'uppercase',
});

const ThemeProvider = ({ children }) => {
  const defaultTheme = createTheme(1);
  return <BaseProvider theme={defaultTheme}>{children}</BaseProvider>;
};

export default ThemeProvider;
