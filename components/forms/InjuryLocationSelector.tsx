import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { InjuryLocation } from '../../types';

interface Props {
  value: InjuryLocation[];
  onValueChange: (newValue: InjuryLocation[]) => void;
}

/**
 * SVG created with Adobe Illustrater and converted with react-svgr.com
 */
const InjuryLocationSelector = ({ value, onValueChange }: Props) => {
  const selectInjuryLocationHandler = (location: InjuryLocation) => {
    if (value.includes(location)) {
      onValueChange(value.filter((item) => item !== location));
    } else {
      onValueChange([...value, location]);
    }
  };

  const getFillColor = (location: InjuryLocation) => {
    if (value.includes(location)) {
      return 'orange';
    }

    return 'black';
  };

  return (
    <View style={styles.container}>
      <Svg viewBox="0 0 458.5 719">
        <Path onPress={() => selectInjuryLocationHandler('Nek')} fill={getFillColor('Nek')} d="M190 163h78v59h-78z" />
        <Circle
          onPress={() => selectInjuryLocationHandler('Hoofd')}
          fill={getFillColor('Hoofd')}
          cx={229}
          cy={89}
          r={89}
        />
        <Path
          onPress={() => selectInjuryLocationHandler('Rechterbeen')}
          fill={getFillColor('Rechterbeen')}
          d="M140 490h75v191h-75z"
        />
        <Circle
          onPress={() => selectInjuryLocationHandler('Rechtervoet')}
          fill={getFillColor('Rechtervoet')}
          cx={177.5}
          cy={680.5}
          r={37.5}
        />
        <Path
          onPress={() => selectInjuryLocationHandler('Linkerbeen')}
          fill={getFillColor('Linkerbeen')}
          d="M243 490h75v191h-75z"
        />
        <Circle
          onPress={() => selectInjuryLocationHandler('Linkervoet')}
          fill={getFillColor('Linkervoet')}
          cx={280.5}
          cy={681.5}
          r={37.5}
        />
        <Path
          onPress={() => selectInjuryLocationHandler('Rechterarm')}
          fill={getFillColor('Rechterarm')}
          d="m140.259 221.706 53.033 53.033L64.018 404.012 10.985 350.98z"
        />
        <Circle
          onPress={() => selectInjuryLocationHandler('Rechterhand')}
          fill={getFillColor('Rechterhand')}
          cx={37.5}
          cy={377.5}
          r={37.5}
        />
        <Path
          onPress={() => selectInjuryLocationHandler('Linkerarm')}
          fill={getFillColor('Linkerarm')}
          d="m264.703 274.744 53.033-53.033L447.01 350.985l-53.033 53.033z"
        />
        <Circle
          onPress={() => selectInjuryLocationHandler('Linkerhand')}
          fill={getFillColor('Linkerhand')}
          cx={421}
          cy={377}
          r={37.5}
        />
        <Path
          onPress={() => selectInjuryLocationHandler('Romp')}
          fill={getFillColor('Romp')}
          d="M140 222h178v268H140z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1,
  },
});

export default InjuryLocationSelector;
