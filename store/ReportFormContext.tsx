import axios from 'axios';
import React, { createContext, useMemo, useState } from 'react';
import { ReportFormData } from '../types';

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

  const apiUrl = 'https://snelmelder.marijnvandijk.com/report'; // TODO: Move to some env file

  const submit = useMemo(
    () => () => {
      setStatus('sending');

      axios
        .post(apiUrl, {
          user: '634fcafdd3b2ad8a0b31069c', // TODO: use some actual user ID here, preferably the AD user ID
          anonymous: data.anonymous,
          dateTime: data.dateTime,
          environmentalDamage: data.typeOfDamage.includes('Milieu schade'),
          materialDamage: data.typeOfDamage.includes('Materiële schade'),
          personInvolved: data.personInvolved,
          projectLocation: '634fcafdd3b2ad8a0b31069e', // TODO: use an actual project location, get them from the API
          additionalInformation: data.additionalInformation,
          witness: data.assistanceWitness,
          injurySite: ['head'], // TODO: fix injury types in backend
          incidentType: ['accident'], // TODO: mappen naar namen die in back-end gebruikt worden
          injuryType: 'internally', // TODO: replace by actual value once backend is fixed
          incidentTypeAdditionalInfo: data.otherCategoryDescription,
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
    [data, apiUrl]
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

export default ReportFormContextProvider;
