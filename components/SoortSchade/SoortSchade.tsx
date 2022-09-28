import React, { useState } from 'react';

import { Text, View, Pressable, Image, ImageBackground } from 'react-native';

import styles from '../SoortIncident/SoortIncident.scss';

const Vinkje = require('../../assets/images/soort-incident/GSM_Vinkje.png');

const MilieuImg = require('../../assets/images/soort-schade/Milieu_Schade_Icon.png');
const MaterieleImg = require('../../assets/images/soort-schade/Materiele_Schade_Icon.png');
const InwendigImg = require('../../assets/images/soort-schade/Inwendig_Letsel_Icon.png');
const UitwendigImg = require('../../assets/images/soort-schade/Uitwendig_Letsel_Icon.png');
const GeenImg = require('../../assets/images/soort-schade/Geen_Schade_Letsel_Icon.png');

interface MyCheckboxProps {
  checked: boolean;
  onChange: (arg0: boolean) => void;
  buttonStyle?: Record<string, unknown>;
  activeButtonStyle?: Record<string, unknown>;
  inactiveButtonStyle?: Record<string, unknown>;
}

const MyCheckbox = ({
  checked,
  onChange,
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
}: MyCheckboxProps) => {
  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable style={[buttonStyle, checked ? activeButtonStyle : inactiveButtonStyle]} onPress={onCheckmarkPress}>
      {checked && <Image source={Vinkje} style={styles.vinkje} />}
    </Pressable>
  );
};

const SoortSchade = () => {
  const [oneChecked, onOneChange] = useState(false);
  const [twoChecked, onTwoChange] = useState(false);
  const [threeChecked, onThreeChange] = useState(false);
  const [fourChecked, onFourChange] = useState(false);
  const [fiveChecked, onFiveChange] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={MilieuImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(255, 173, 138, 1)' }]}
          />
          <MyCheckbox
            checked={oneChecked}
            onChange={onOneChange}
            buttonStyle={styles.checkboxOneBase}
            activeButtonStyle={styles.checkboxOneChecked}
          />
          <Text style={styles.paragraph}>Milieu schade</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={MaterieleImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(255, 212, 115, 1)' }]}
          />
          <MyCheckbox
            checked={twoChecked}
            onChange={onTwoChange}
            buttonStyle={styles.checkboxTwoBase}
            activeButtonStyle={styles.checkboxTwoChecked}
          />
          <Text style={styles.paragraph}>Materiële schade</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={InwendigImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(131, 220, 218, 1)' }]}
          />
          <MyCheckbox
            checked={threeChecked}
            onChange={onThreeChange}
            buttonStyle={styles.checkboxThreeBase}
            activeButtonStyle={styles.checkboxThreeChecked}
          />
          <Text style={styles.paragraph}>Inwendig letsel</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={UitwendigImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(184, 238, 191, 1)' }]}
          />
          <MyCheckbox
            checked={fourChecked}
            onChange={onFourChange}
            buttonStyle={styles.checkboxFourBase}
            activeButtonStyle={styles.checkboxFourChecked}
          />
          <Text style={styles.paragraph}>Uitwendig letsel</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={GeenImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(198, 145, 214, 1)' }]}
          />
          <MyCheckbox
            checked={fiveChecked}
            onChange={onFiveChange}
            buttonStyle={styles.checkboxFiveBase}
            activeButtonStyle={styles.checkboxFiveChecked}
          />
          <Text style={styles.paragraph}>Geen schade/letsel</Text>
        </View>
      </View>
    </View>
  );
};

export default SoortSchade;
