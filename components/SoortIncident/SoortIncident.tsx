import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, ImageBackground, TouchableOpacity } from 'react-native';

const Vinkje = require('../../assets/images/soort-incident/GSM_Vinkje.png');

const OngevalImg = require('../../assets/images/soort-incident/soort_incident_ongeval.png');
const BijnaOngImg = require('../../assets/images/soort-incident/soort_incident_bijna_ongeval.png');
const GevSitImg = require('../../assets/images/soort-incident/soort_incident_gev_sit.png');
const GevHanImg = require('../../assets/images/soort-incident/soort_incident_gev_han.png');
const OverigImg = require('../../assets/images/soort-incident/soort_incident_overig.png');

import styles from '../SoortIncident/SoortIncident.scss';

{
  /*
    https://docs.expo.dev/versions/latest/sdk/checkbox/
    terminal: yarn start

    colors:
    - #FFAD8A / rgba(255, 173, 138, 0.65) (red/orange)
    - #FFD473 / rgba(255, 212, 115, 0.65) (yellow)
    - #83DCDA / rgba(131, 220, 218, 0.65) (blue)
    - #B8EEBF / rgba(184, 238, 191, 0.65) (green)
    - #C691D6 / rgba(198, 145, 214, 0.65) (purple)

    - #52BB1D (check green)
*/
}

function MyCheckbox({ checked, onChange, buttonStyle = {}, activeButtonStyle = {}, inactiveButtonStyle = {} }) {
  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable style={[buttonStyle, checked ? activeButtonStyle : buttonStyle]} onPress={onCheckmarkPress}>
      {checked && <Image source={Vinkje} style={styles.vinkje} />}
    </Pressable>
  );
}

export default function SoortIncident() {
  MyCheckbox;

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
            inactiveButtonStyle={styles.checkboxOneBase}
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
}
