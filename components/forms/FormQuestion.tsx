import { Text, Button } from 'react-native-paper';
import InputContainer from './InputContainer';
import Container from '../ui/Container';

interface Props {
  question: string;
  explanation: string;
  additionalInfo?: string;
  onNextQuestion: () => void;
  canSkip?: boolean;
  canSubmit: boolean;
  children: React.ReactNode;
}

const FormQuestion = ({ question, explanation, additionalInfo, onNextQuestion, canSkip = false, canSubmit, children }: Props) => {
  const buttonText = canSkip && !canSubmit ? 'Overslaan' : 'Volgende';
  const canGoNext = canSkip || canSubmit;

  return (
    <Container>
      <Text variant="titleMedium">{question}</Text>
      <Text variant="bodyMedium">{explanation}</Text>
      <Text variant="bodySmall">{additionalInfo}</Text>
      <InputContainer>{children}</InputContainer>
      <Button mode="contained" onPress={onNextQuestion} disabled={!canGoNext}>
        {buttonText}
      </Button>
    </Container>
  );
};

export default FormQuestion;
