/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ReportForm: undefined;
  Login: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabHome: undefined;
  TabNotification: undefined;
  TabSettings: undefined;
};

export type ReportFormParamList = {
  ReportCategory: undefined;
  ReportIncidentOther: undefined;
  ReportLocation: undefined;
  ReportDateTime: undefined;
  ReportPersonInvolved: undefined;
  ReportAssistanceWitness: undefined;
  ReportTypeOfDamage: undefined;
  ReportLocationOfInjury: undefined;
  ReportAddPicture: undefined;
  ReportAdditionalInformation: undefined;
  ReportSummary: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type ButtonIncidentProps = {
  title: string;
  method: () => void;
  style?: React.CSSProperties;
};

// export type ButtonInformationProps = {};

export type HeaderProps = {
  handleBack: () => void;
  handleClose: () => void;
};

export type ButtonPlusProps = {
  handle: () => void;
};

export type ButtonInformationProps = {
  title: string;
  text: string;
};

export type Category = 'ongeval' | 'bijna-ongeval' | 'gevaarlijke-situatie' | 'gevaarlijke-handeling' | 'overig';

export type TypeOfDamage =
  | 'milieu-schade'
  | 'materiele-schade'
  | 'inwendig-letsel'
  | 'uitwendig-letsel'
  | 'geen-schade-letsel';

export type InjuryLocation =
  | 'hoofd'
  | 'romp'
  | 'rechterarm'
  | 'rechterhand'
  | 'linkerarm'
  | 'linkerhand'
  | 'rechterbeen'
  | 'linkerbeen'
  | 'rechtervoet'
  | 'linkervoet'
  | 'nek';

export interface ReportFormData {
  categories: Category[];
  otherCategoryDescription: string;
  location?: string;
  dateTime: Date;
  personInvolved: string;
  assistanceWitness: string;
  typeOfDamage: TypeOfDamage[];
  injuryLocation: InjuryLocation[];
  photoURIs: string[];
  additionalInformation: string;
}

export type MultiSelectOptionPropType<T> = {
  id: number;
  name: T;
  label?: string;
  image: ImageSourcePropType;
  backgroundColor?: string;
};
