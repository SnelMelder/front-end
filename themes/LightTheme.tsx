import { MD3LightTheme as PaperTheme } from 'react-native-paper';
import { DefaultTheme as NavigationTheme } from '@react-navigation/native';

// Generate at: https://callstack.github.io/react-native-paper/theming.html

const LightTheme = {
  ...PaperTheme,
  ...NavigationTheme,
  colors: {
    ...PaperTheme.colors,
    ...NavigationTheme.colors,
    primary: 'rgb(0, 107, 86)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(126, 248, 212)',
    onPrimaryContainer: 'rgb(0, 32, 24)',
    secondary: 'rgb(75, 99, 91)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(206, 233, 221)',
    onSecondaryContainer: 'rgb(7, 32, 25)',
    tertiary: 'rgb(65, 98, 118)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(196, 231, 255)',
    onTertiaryContainer: 'rgb(0, 30, 44)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(251, 253, 250)',
    onBackground: 'rgb(25, 28, 27)',
    surface: 'rgb(251, 253, 250)',
    onSurface: 'rgb(25, 28, 27)',
    surfaceVariant: 'rgb(219, 229, 223)',
    onSurfaceVariant: 'rgb(63, 73, 69)',
    outline: 'rgb(111, 121, 117)',
    outlineVariant: 'rgb(191, 201, 195)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(46, 49, 47)',
    inverseOnSurface: 'rgb(239, 241, 238)',
    inversePrimary: 'rgb(96, 219, 185)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(238, 246, 242)',
      level2: 'rgb(231, 241, 237)',
      level3: 'rgb(223, 237, 232)',
      level4: 'rgb(221, 236, 230)',
      level5: 'rgb(216, 233, 227)',
    },
    surfaceDisabled: 'rgba(25, 28, 27, 0.12)',
    onSurfaceDisabled: 'rgba(25, 28, 27, 0.38)',
    backdrop: 'rgba(41, 50, 47, 0.4)',
  },
};

export default LightTheme;
