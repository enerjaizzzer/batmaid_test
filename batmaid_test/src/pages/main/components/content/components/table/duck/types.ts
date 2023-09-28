export type Job = {
  agent: string;
  amount: number;
  contractPeriodicity: number;
  currency: string;
  duration: number;
  executionDate: string;
  floorAndDoor: string;
  location: string;
  locationComment: string;
  locationUuid: string;
  type: string;
  uuid: string;
};

export interface TableProps {
  data: Job[];
  mode: string;
}
