import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageInfo } from 'expo-image-picker';
import { ImagePickerAsset } from 'expo-image-picker';
import { ReportFormParamList } from '../../types';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Container from '../../components/ui/Container';
import Question from '../../components/forms/Question';
import Explanation from '../../components/forms/Explanation';
import PicturePicker from '../../components/forms/PicturePicker';
import { ReportFormContext } from '../../store/ReportFormContext';
import InputContainer from '../../components/forms/InputContainer';
import FormQuestion from '../../components/forms/FormQuestion';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportAddPicture'>;

const ReportAddPicture = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportAdditionalInformation');
  };

  const setImages = (images: ImagePickerAsset[]) => {
    setData((current) => ({ ...current, images }));
  };

  return (
    <FormQuestion
      question="Voeg een foto toe"
      explanation="Dit is niet verplicht"
      additionalInfo="U kan maximaal 5 foto's toevoegen"
      onNextQuestion={nextQuestion}
      canSubmit={data.images.length > 0}
      canSkip
    >
      <PicturePicker value={data.images} onValueChange={setImages} />
    </FormQuestion>
  );
};

export default ReportAddPicture;
