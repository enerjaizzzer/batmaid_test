type Record = {
  name: string;
  value: string;
};

export interface RadioProps {
  record: Record[];
  checkedItem: string;
  onChange: (newMode: string) => void;
}
