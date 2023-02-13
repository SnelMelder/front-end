import { useContext, useState, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RadioButton, ActivityIndicator } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import Container from '../../components/ui/Container';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import FormQuestion from '../../components/forms/FormQuestion';
import Location from '../../models/Location';
import { AuthContext } from '../../auth/AuthContext';
import apiBaseUrl from '../../env';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportLocation'>;

interface LocationReadDto {
  _id: string;
  name: string;
}

const ReportLocation = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);
  const [locations, setLocations] = useState<Location[] | null>(null);
  const { getAccessToken } = useContext(AuthContext);

  useEffect(() => {
    const url = `${apiBaseUrl}/locations`;
    console.log(url);

    getAccessToken()
      .then((token) => {
        console.log(token);

        return axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .then((response) => {
        const responseData = response.data as LocationReadDto[];
        const receivedLocations = responseData.map((item) => new Location(item._id, item.name));
        setLocations(receivedLocations);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, [getAccessToken]);

  const nextQuestion = () => {
    navigation.navigate('ReportDateTime');
  };

  const setSelectedLocation = (selectedLocationId: string) => {
    const selectedLocation = locations?.find((item) => item.id === selectedLocationId);
    setData((current) => ({ ...current, location: selectedLocation }));
  };

  if (!locations) {
    return (
      <Container style={styles.container}>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  return (
    <FormQuestion
      question="Wat is de locatie van het incident?"
      explanation="Tik één locatie aan"
      canSubmit={data.location !== undefined}
      onNextQuestion={nextQuestion}
    >
      <RadioButton.Group onValueChange={(value) => setSelectedLocation(value)} value={data.location?.id || ''}>
        {locations.map((location) => (
          <RadioButton.Item key={location.id} label={location.name} value={location.id} />
        ))}
      </RadioButton.Group>
    </FormQuestion>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReportLocation;
