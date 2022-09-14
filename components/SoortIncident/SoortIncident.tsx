import React, { useState } from 'react';

import { Text, View, Pressable, Image, ImageBackground } from 'react-native';

import styles from './SoortIncident.scss';

const Vinkje = require('../../assets/images/soort-incident/GSM_Vinkje.png');

const OngevalImg = require('../../assets/images/soort-incident/soort_incident_ongeval.png');
const BijnaOngImg = require('../../assets/images/soort-incident/soort_incident_bijna_ongeval.png');
const GevSitImg = require('../../assets/images/soort-incident/soort_incident_gev_sit.png');
const GevHanImg = require('../../assets/images/soort-incident/soort_incident_gev_han.png');
const OverigImg = require('../../assets/images/soort-incident/soort_incident_overig.png');

interface MyCheckboxProps {
  checked: boolean;
  onChange: (arg0: boolean) => void;
  buttonStyle?: Record<string, unknown>;
  activeButtonStyle?: Record<string, unknown>;
}

const MyCheckbox = ({ checked, onChange, buttonStyle = {}, activeButtonStyle = {} }: MyCheckboxProps) => {
  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable style={[buttonStyle, checked ? activeButtonStyle : buttonStyle]} onPress={onCheckmarkPress}>
      {checked && <Image source={Vinkje} style={styles.vinkje} />}
    </Pressable>
  );
};

const SoortIncident = () => {
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
            source={OngevalImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(255, 173, 138, 1)' }]}
          />
          <MyCheckbox
            checked={oneChecked}
            onChange={onOneChange}
            buttonStyle={styles.checkboxOneBase}
            activeButtonStyle={styles.checkboxOneChecked}
          />
          <Text style={styles.paragraph}>Ongeval</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={BijnaOngImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(255, 212, 115, 1)' }]}
          />
          <MyCheckbox
            checked={twoChecked}
            onChange={onTwoChange}
            buttonStyle={styles.checkboxTwoBase}
            activeButtonStyle={styles.checkboxTwoChecked}
          />
          <Text style={styles.paragraph}>Bijna Ongeval</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={GevSitImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(131, 220, 218, 1)' }]}
          />
          <MyCheckbox
            checked={threeChecked}
            onChange={onThreeChange}
            buttonStyle={styles.checkboxThreeBase}
            activeButtonStyle={styles.checkboxThreeChecked}
          />
          <Text style={styles.paragraph}>Gevaarlijke situatie</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={GevHanImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(184, 238, 191, 1)' }]}
          />
          <MyCheckbox
            checked={fourChecked}
            onChange={onFourChange}
            buttonStyle={styles.checkboxFourBase}
            activeButtonStyle={styles.checkboxFourChecked}
          />
          <Text style={styles.paragraph}>Gevaarlijke handeling</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <ImageBackground
            source={OverigImg}
            style={[styles.ongevalBackImg, { backgroundColor: 'rgba(198, 145, 214, 1)' }]}
          />
          <MyCheckbox
            checked={fiveChecked}
            onChange={onFiveChange}
            buttonStyle={styles.checkboxFiveBase}
            activeButtonStyle={styles.checkboxFiveChecked}
          />
          <Text style={styles.paragraph}>Overig</Text>
        </View>
      </View>
    </View>
  );
};

export default SoortIncident;
