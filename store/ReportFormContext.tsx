import React, { createContext, useMemo, useState } from 'react';
import { ReportFormData } from '../types';

const initialData: ReportFormData = {
  categories: [],
  otherCategoryDescription: '',
  location: undefined,
  dateTime: new Date(Date.now()),
  personsInvolved: '',
  assistanceWitness: '',
  typeOfDamage: [],
  injuryLocation: undefined,
  photoURIs: [],
  additionalInformation: '',
};

interface IReportFormContext {
  data: ReportFormData;
  setData: React.Dispatch<React.SetStateAction<ReportFormData>>;
}

export const ReportFormContext = createContext<IReportFormContext>({
  data: initialData,
  setData: () => undefined,
});

interface Props {
  children: React.ReactNode;
}

const ReportFormContextProvider = ({ children }: Props) => {
  const [data, setData] = useState(initialData);

  const value = useMemo(() => ({ data, setData }), [data, setData]);

  return <ReportFormContext.Provider value={value}>{children}</ReportFormContext.Provider>;
};

export default ReportFormContextProvider;
