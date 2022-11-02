import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageInfo } from 'expo-image-picker';
import { ReportFormParamList } from '../../types';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Container from '../../components/ui/Container';
import Question from '../../components/forms/Question';
import Explanation from '../../components/forms/Explanation';
import PicturePicker from '../../components/forms/PicturePicker';
import { ReportFormContext } from '../../store/ReportFormContext';
import InputContainer from '../../components/forms/InputContainer';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportAddPicture'>;

const ReportAddPicture = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportAdditionalInformation');
  };

  const setImages = (images: ImageInfo[]) => {
    setData((current) => ({ ...current, images }));
  };

  return (
    <Container>
      <Question>Voeg een foto toe</Question>
      <Explanation>Dit is niet verplicht</Explanation>
      <InputContainer>
        <PicturePicker value={data.images} onValueChange={setImages} />
      </InputContainer>
      <PrimaryButton text="Volgende" onPress={nextQuestion} />
    </Container>
  );
};

export default ReportAddPicture;
