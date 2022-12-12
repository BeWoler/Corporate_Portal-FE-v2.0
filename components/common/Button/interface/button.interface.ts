export interface IButton {
  w?: string;
  h?: string;
  color?: string;
  bgColor?: string;
  value?: string;
  borderWidth?: string;
  borderColor?: string;
  disabled?: boolean
  onClick?: () => void;
}