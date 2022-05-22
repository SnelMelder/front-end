import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import sharedStyles from '../shared.scss';
import styles from './ReportSummary.scss';

import { Text, View } from '../../components/Themed';

const submitSummary = () => {
  console.log('submitSummary');
};

const ReportSummary = () => {
  return (
    <>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitleContainer}>Uw melding</Text>
        <TouchableOpacity onPress={submitSummary} style={[styles.submitSummaryButton]}>
          <Text style={styles.textButton}>Afronden</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ alignSelf: 'flex-start', width: '100%' }} contentContainerStyle={styles.summaryScrollView}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryHeader}>Soort incident:</Text>
          <Text style={styles.summaryTextUnderline}>Ongeval</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryHeader}>Locatie:</Text>
          <Text style={styles.summaryTextUnderline}>Locatie 3</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryHeader}>Datum & tijd:</Text>
          <Text style={styles.summaryTextUnderline}>5 februari 2021, 14:59</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryHeader}>Naam betrokkene:</Text>
          <Text style={styles.summaryTextUnderline}>Ben Oirschot</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryHeader}>Hulpverlening/getuigen:</Text>
          <Text style={styles.summaryTextUnderline}>Dokter de Vries</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryHeader}>Schade:</Text>
          <Text style={styles.summaryTextUnderline}>Inwendig letsel, voeten</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryHeader}>Foto('s):</Text>
          <View style={{ flexDirection: 'column' }}>
            <Image
              style={styles.summaryBigPicture}
              source={require('/Users/koen/Workspace/front-end/assets/images/SnelMelder_Home_Logo.png')}
            />
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Image
                style={styles.summarySmallPicture}
                source={require('/Users/koen/Workspace/front-end/assets/images/SnelMelder_Home_Logo.png')}
              />
              <Image
                style={styles.summarySmallPicture}
                source={require('/Users/koen/Workspace/front-end/assets/images/SnelMelder_Home_Logo.png')}
              />
              <Image
                style={styles.summarySmallPicture}
                source={require('/Users/koen/Workspace/front-end/assets/images/SnelMelder_Home_Logo.png')}
              />
              <Image
                style={styles.summarySmallPicture}
                source={require('/Users/koen/Workspace/front-end/assets/images/SnelMelder_Home_Logo.png')}
              />
            </View>
          </View>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryHeader}>Aanvullende informatie:</Text>
          <Text style={styles.summaryTextUnderline}>
            Timmerman is gestruikeld over losse draden en heeft zijn rug gekneusd.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ReportSummary;
