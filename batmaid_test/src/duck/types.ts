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

type jobByLocation = {
  city: string;
  location: string;
  state: string;
  total: 4;
  uuid: string;
  jobs: string[];
};

export interface cleaningsFetch {
  jobs: Job[];
  jobsByLocation: jobByLocation[];
}
