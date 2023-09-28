export interface RadioElementProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (newMode: string) => void;
}
