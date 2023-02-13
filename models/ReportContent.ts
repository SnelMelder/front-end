import IncidentCategory from './IncidentCategory';
import InjuryLocation from './InjuryLocation';
import DamageType from './DamageType';
import Image from './Image';

interface ReportContent {
  categories: IncidentCategory[];
  otherCategoryDescription: string | undefined;
  incidentHappenedAt: Date;
  personsInvolved: string;
  personsAssistedOrWitnessed: string;
  damageTypes: DamageType[];
  injuryLocations: InjuryLocation[];
  images: Image[];
  additionalInformation: string;
  anonymous: boolean;
}

export default ReportContent;
