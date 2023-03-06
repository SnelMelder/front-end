import axios from 'axios';
import { ImageInfo, ImagePickerAsset } from 'expo-image-picker';
import React, { createContext, useMemo, useState, useContext } from 'react';
import { manipulateAsync, ImageResult } from 'expo-image-manipulator';
import { AuthContext } from '../auth/AuthContext';
import { Category, InjuryLocation, ReportFormData, TypeOfDamage } from '../types';
import apiBaseUrl from '../env';

const initialData: ReportFormData = {
  categories: [],
  otherCategoryDescription: '',
  location: undefined,
  dateTime: new Date(Date.now()),
  personInvolved: '',
  assistanceWitness: '',
  typeOfDamage: [],
  injuryLocation: [],
  images: [],
  additionalInformation: '',
  anonymous: false,
};

type FormStatus = 'collecting' | 'sending' | 'success' | 'failure';

interface IReportFormContext {
  data: ReportFormData;
  setData: React.Dispatch<React.SetStateAction<ReportFormData>>;
  submit: () => void;
  reset: () => void;
  status: FormStatus;
}

export const ReportFormContext = createContext<IReportFormContext>({
  data: initialData,
  setData: () => undefined,
  submit: () => undefined,
  reset: () => undefined,
  status: 'collecting',
});

interface Props {
  children: React.ReactNode;
}

const ReportFormContextProvider = ({ children }: Props) => {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState<FormStatus>('collecting');

  const { getAccessToken } = useContext(AuthContext);

  const url = `${apiBaseUrl}/reports`; // TODO: Move to some env file

  const submit = useMemo(
    () => () => {
      setStatus('sending');

      let accessToken = '';

      getAccessToken()
        .then((token) => {
          accessToken = token;
          return getPictures(data);
        })
        .then((pictures) => {
          const payload = {
            projectLocation: getLocationId(data),
            dateTime: getDateTimeOfIncident(data),
            personInvolved: getPersonsInvolved(data),
            witness: getWitnesses(data),
            additionalInformation: getAdditionalInformation(data),
            anonymous: getIsAnonymous(data),
            incidentType: getIncidentCategories(data),
            incidentTypeAdditionalInfo: getOtherCategoryDescription(data),
            damageTypes: getTypesOfDamage(data),
            injurySite: getLocationsOfInjuryOnBody(data),
            pictureList: pictures,
          };

         // console.log(payload);

          return axios.post(url, payload, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        })
        .then(() => {
          setStatus('success');
        })
        .catch((error) => {
          setStatus('failure');

          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
    [data, url, getAccessToken]
  );

  const reset = useMemo(
    () => () => {
      setData(initialData);
      setStatus('collecting');
    },
    [setData, setStatus]
  );

  const value = useMemo(() => ({ data, setData, submit, reset, status }), [data, setData, submit, reset, status]);

  return <ReportFormContext.Provider value={value}>{children}</ReportFormContext.Provider>;
};

function getIsAnonymous(data: ReportFormData) {
  return data.anonymous;
}

function getLocationId(data: ReportFormData) {
  if (!data.location) {
    throw new Error('Location is undefined');
  }

  return data.location.id;
}

function getDateTimeOfIncident(data: ReportFormData) {
  return data.dateTime;
}

function getPersonsInvolved(data: ReportFormData) {
  return data.personInvolved;
}

function getWitnesses(data: ReportFormData) {
  return data.assistanceWitness;
}

function getAdditionalInformation(data: ReportFormData) {
  return data.additionalInformation;
}

function getTypesOfDamage(data: ReportFormData) {
  console.log(data.typeOfDamage);
  return data.typeOfDamage.map((typeOfDamage) => typeOfDamageToDto(typeOfDamage));
}

function typeOfDamageToDto(damageType: TypeOfDamage) {
  switch (damageType) {
    case 'Milieu schade':
      return 'environmental';
    case 'Materiële schade':
      return 'material';
    case 'Inwendig letsel':
      return 'internal-injury';
    case 'Uitwendig letsel':
      return 'external-injury';
    case 'Geen schade/letsel':
      return 'no-damage';
    default:
      throw new Error('Unexpected damage type value');
  }
}

function getLocationsOfInjuryOnBody(data: ReportFormData) {
  return data.injuryLocation.map((injuryLocation) => injuryLocationToDto(injuryLocation));
}

function injuryLocationToDto(injuryLocation: InjuryLocation) {
  switch (injuryLocation) {
    case 'Hoofd':
      return 'head';
    case 'Nek':
      return 'neck';
    case 'Linkerhand':
      return 'left-hand';
    case 'Linkerarm':
      return 'left-arm';
    case 'Rechterhand':
      return 'right-hand';
    case 'Rechterarm':
      return 'right-arm';
    case 'Romp':
      return 'torso';
    case 'Linkerbeen':
      return 'left-leg';
    case 'Linkervoet':
      return 'left-foot';
    case 'Rechterbeen':
      return 'right-leg';
    case 'Rechtervoet':
      return 'right-foot';
    default:
      throw new Error('Unexpected injuryLocation value');
  }
}

async function getPictures(data: ReportFormData) {
  return Promise.all(data.images.map(async (image) => (await cropAndCompress(image)).base64));
}

async function cropAndCompress(image: ImagePickerAsset): Promise<ImageResult> {
  const manipulatedImage = await manipulateAsync(image.uri, [{ resize: { height: 800 } }], {
    base64: true,
    compress: 0.5,
  });

  return manipulatedImage;
}

function getIncidentCategories(data: ReportFormData) {
  return data.categories.map((category) => categoryToDto(category));
}

function categoryToDto(category: Category) {
  switch (category) {
    case 'Bijna ongeval':
      return 'near-accident';
    case 'Gevaarlijke handeling':
      return 'dangerousAct';
    case 'Gevaarlijke situatie':
      return 'dangerousSituation';
    case 'Ongeval':
      return 'accident';
    case 'Overig':
      return 'other';
    default:
      throw new Error('Unexpected category value');
  }
}

function getOtherCategoryDescription(data: ReportFormData) {
  return data.otherCategoryDescription;
}

export default ReportFormContextProvider;
