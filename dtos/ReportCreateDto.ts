interface ReportCreateDto {
  projectLocation: string;
  dateTime: Date;
  personInvolved?: string;
  witness?: string;
  additionalInformation?: string;
  anonymous: boolean;
  contractorAdditionalInfo?: string;
  damageTypes: DamageTypeDto[];
  incidentTypeAdditionalInfo: string;
  injurySite: InjurySiteDto[];
}

export default ReportCreateDto;
