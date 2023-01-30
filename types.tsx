/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageSourcePropType } from 'react-native';
import { ImageInfo } from 'expo-image-picker';
import Location from './models/Location';

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
  Root: undefined;
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
  SendingScreen: undefined;
  SuccessScreen: undefined;
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

export type Category = 'Ongeval' | 'Bijna ongeval' | 'Gevaarlijke situatie' | 'Gevaarlijke handeling' | 'Overig';

export type TypeOfDamage =
  | 'Milieu schade'
  | 'Materiële schade'
  | 'Inwendig letsel'
  | 'Uitwendig letsel'
  | 'Geen schade/letsel';

export type InjuryLocation =
  | 'Hoofd'
  | 'Romp'
  | 'Rechterarm'
  | 'Rechterhand'
  | 'Linkerarm'
  | 'Linkerhand'
  | 'Rechterbeen'
  | 'Linkerbeen'
  | 'Rechtervoet'
  | 'Linkervoet'
  | 'Nek';

export interface ReportFormData {
  categories: Category[];
  otherCategoryDescription: string;
  location?: Location;
  dateTime: Date;
  personInvolved: string;
  assistanceWitness: string;
  typeOfDamage: TypeOfDamage[];
  injuryLocation: InjuryLocation[];
  images: ImageInfo[];
  additionalInformation: string;
  anonymous: boolean;
}

export type MultiSelectOptionPropType<T> = {
  id: number;
  name: T;
  label?: string;
  image: ImageSourcePropType;
  backgroundColor?: string;
};
